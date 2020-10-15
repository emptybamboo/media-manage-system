<template>
  <div id="staff" class="flex-column">
    <el-card class="box-card"  shadow="always">
      <div slot="header" class="clearfix">
        <div id="staff-button-group" class="flex-simple padding-little">
          <el-button type="primary" @click="addDialog">新增</el-button>
          <el-button type="danger" @click="deleteAll">删除</el-button>
        </div>
      </div>
      <div>
        <basic-table
            @table-edit="tableEdit"
            @table-delete="tableDelete"
            :table-data-arr="currentPageTableData"
            ref="basicTable"
        >
          <!--通过slot插入到表格组件的部分-->
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column
              label="日期"
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.time}}</span>
            </template>
          </el-table-column>
          <el-table-column
              label="姓名"
          >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
              label="性别"
          >
            <template slot-scope="scope">
              <p>{{ scope.row.gender===0?"男":"女" }}</p>
            </template>
          </el-table-column>
        </basic-table>
        <complete-pagination
            :pagination-data="paginationData"
            @change-current-page="changeCurrentPage"
            @change-page-size="changePageSize"
            id="complete-pagination"
        ></complete-pagination>
      </div>
    </el-card>

    <form-dialog :dialog-status="dialogStatus"
                 @close-dialog="cancelDialog"
                 @commit-dialog="commitDialog"
                 :form-title="formTitle"
    >
      <!--使用slot插入弹出层的表单-->
      <el-form :model="form" :label-position="labelPosition" ref="staffForm">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
              v-model="form.time"
              type="datetime"
              style="width: 100%"
              placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio-group v-model="form.gender" >
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </form-dialog>
  </div>
</template>

<script>
import BasicTable from "../../components/main/table/BasicTable";
import CompletePagination from "../../components/main/pagination/CompletePagination";
import FormDialog from "../../components/main/dialog/FormDialog";
import dateFilter from "../../../util/js/dateFilter";

export default {
  name: "Staff",
  data(){
    return{
      dialogStatus : {
        show : false,
      },
      tableData : {},//保存异步传递过来的所有数据
      currentPageTableData : {},//当前页面表格数据,放置当前页码页面该放置的所有表格数据
      paginationData : {
        totalNum : 1,//数据总条数
        currentPage : 1,//当前页码
        pageSizeArr : [10, 20, 30, 40],//所有可选一页多少条数据的选项
        pageSize : 10,//当前一页显示几条数据
      },
      //新增编辑弹窗属性
      form: {
        name: '',
        time: '',
        gender: false,
      },
      formLabelWidth: '80px',
      formTitle : "",
      labelPosition : 'right',//dialog中每一行的对齐方式
    }
  },
  created(){
    console.log("created开始前");
    //上下两个url必须一致,这样将来只需要删掉mock代码即可
    this.$axios.request({
      'method' : 'get',
      'url' : '/staff',
    }).then(res => {
      console.log(res.data);
      console.log("mock生成数据类型->"+typeof res.data);
      console.log("mock生成数据↓");
      console.log(res.data);
      console.log("mock生成数据.data↓");
      console.log(res.data.data);
      console.log(typeof this.$dateFunction.dateFilter());
      console.log(this.$dateFunction.dateFilter());
      //新建数组装所有数据
      let transferData = [];
      //转换时间戳为时间格式
      for(let getData of res.data.data){
        getData.time = this.$dateFunction.dateFilter(getData.time*1000);
        transferData.push(getData);
      }
      //数组塞进对象
      let transferDataObj = {
        data : transferData
      };

      // this.tableData = res.data;//传送表格数据
      // this.paginationData.totalNum = res.data.data.length;//传送当前数组总条数
      // this.currentPageTableData = {
      //   data : res.data.data.slice(
      //       (this.paginationData.currentPage-1)*this.paginationData.pageSize,
      //       this.paginationData.currentPage*this.paginationData.pageSize
      //   )//根据页码分割表格数据再传送
      // };
      this.tableData = transferDataObj;//传送表格数据
      this.paginationData.totalNum = transferDataObj.data.length;//传送当前数组总条数
      this.currentPageTableData = {
        data : transferDataObj.data.slice(
            (this.paginationData.currentPage-1)*this.paginationData.pageSize,
            this.paginationData.currentPage*this.paginationData.pageSize
        )//根据页码分割表格数据再传送
      };
      console.log("当前页面表格数据.data↓");
      console.log(this.currentPageTableData);
    }).catch(res=>{
      console.log(res);
    });


    // this.$axios.request({
    //   'method' : 'post',
    //   'url' : 'http://localhost:8181/staff',
    // }).then(res=>{
    //   console.log("insert触发post接口");
    //   console.log(res);
    //   console.log(res.data);
    //   console.log(res.data.message);
    // });
    // const Random = this.$Mock.Random;
    // const data = this.$Mock.mock('http://localhost:8181/staff',{
    //   'data|100-200' : [
    //     {
    //       'id|+1' : 1,
    //       "name" : "@cname",
    //       // "phone" : ()=>Random.string(11),
    //       "gender|0-1" : 1,
    //       "time" : "@date('yyyy-MM-dd')",
    //     }
    //   ]
    // });

  },
  components : {
    BasicTable,
    CompletePagination,
    FormDialog
  },
  methods : {
    addDialog(){
      console.log("点击新增按钮");
      console.log(this.dialogStatus.show);
      console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");

      this.form = {};
      this.formTitle = "新增员工";
      this.dialogStatus.show = true;
    },
    cancelDialog(){
      console.log("点击dialog取消");
      console.log(this.dialogStatus.show);
      this.dialogStatus.show = false;
      console.log(this.dialogStatus.show);
      console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    },
    commitDialog(){
      console.log("点击dialog确定");
      console.log(this.dialogStatus.show);
      this.dialogStatus.show = false;
      console.log(this.dialogStatus.show);
      console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
      //如果当前表单属性中存在id说明是编辑
      if('id' in this.form){
        console.log("dialog编辑数据");
        console.log(this.form);
      }else{//否则是新增
        console.log("dialog新增数据");
        console.log(this.form);
        console.log(new Date(this.form.time).getTime());
        console.log(typeof new Date(this.form.time).getTime());
        this.form.time = new Date(this.form.time).getTime()/1000;
        this.$axios.request({
          'method' : 'post',
          'data' : this.$Qs.stringify(this.form),
          'url' : '/staff',
        }).then(res=>{
          console.log("insert触发post接口");
          console.log(res.data);
          this.$message({
            type: 'success',
            message: res.data.message
          });
        }).catch(res => {
          console.log("异步新增员工失败");
          console.log(this.form);
          console.log(res);
          console.log(this.form.time);
          console.log(typeof this.form.time);
          console.log(this.form.time.setTime());
          this.$message({
            type: 'error',
            message: "异步新增员工失败"+res.message,
          });
        });
      }
    },
    tableEdit(index,row){
      console.log("点击表格编辑");
      console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
      console.log(index);
      console.log(row);
      this.formTitle = "编辑员工";
      //先把当前行数据代入弹出层数据form中再打开
      this.form = row;
      this.dialogStatus.show = true;

    },
    tableDelete(index,row){
      console.log("点击表格删除");
      this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //切换页码
    changeCurrentPage(page){
      console.log("切换页码");
      console.log(this.tableData.data);
      this.paginationData.currentPage = page;//把传递过来的页码值赋给主组件的页码值
      // this.currentPageTableData.data = this.tableData.data.slice(
      //     (this.paginationData.currentPage-1)*this.paginationData.pageSize,
      //     this.paginationData.currentPage*this.paginationData.pageSize
      // );//根据页码分割表格数据
      this.changeTable();//重新改变页面表格风闸UN改成了这个方法
      console.log(this.tableData.data);
    },
    //切换每页显示条数
    changePageSize(size){
      console.log("进入切换每页显示条数staff方法->changePageSize");
      console.log("传递过来的每页条数"+size);
      console.log(typeof size);
      if(typeof size==="number"){
        this.paginationData.pageSize = size;
        this.changeTable();//重新改变页面表格风闸UN改成了这个方法
      }
    },
    //重新规整当前页面显示数据
    changeTable(){
      this.currentPageTableData.data = this.tableData.data.slice(
          (this.paginationData.currentPage-1)*this.paginationData.pageSize,
          this.paginationData.currentPage*this.paginationData.pageSize
      );//根据页码分割表格数据
    },
    //点击表头删除按钮显示消息提示弹框
    deleteAll(){
      //当前选中的所有数据,一次都没勾选的时候为undefined,勾选再取消为空数组
      let selectData = this.$refs.basicTable.multipleSelection;
      this.$confirm('此操作将删除所有选中数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if(Array.isArray(selectData)&&selectData.length!==0){
            this.$message({
              type: 'success',
              message: '删除成功'
            });
        }else{
            this.$message({
              type: 'info',
              message: '请勾选数据再删除'
            });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

  },
}
</script>

<style scoped>
  #complete-pagination{
    text-align: center;
    margin-top: 20px;
  }
  .box-card {
    align-items : center;
    margin: 20px;
  }
</style>
