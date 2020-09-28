<template>
  <div class="flex-column staff-table">
    <div class="flex-simple padding-little">
      <el-button size="mini" @click="changeDialog">新增</el-button>
      <el-button size="mini" @click="">删除</el-button>
    </div>
    <div  class="flex-simple">
      <muti-table
          @handle-edit = "showEditDialog"
          @handle-delete = "showDeleteDialog"
      ></muti-table>
    </div>
    <page-pagination></page-pagination>
    <data-dialog
        :change-dialog="dialogStatus"
        :edit-data="editData"
        @commit-dialog = "commitDialog"
        @close-dialog = "closeDialog"
    ></data-dialog>
  </div>

</template>

<script>
import DataDialog from "@/components/main/dialog/DataDialog";
import MutiTable from "@/components/main/table/MutiTable";
import PagePagination from "@/components/main/pagination/PagePagination";

export default {
  name: "staff",
  components : {
    DataDialog,
    MutiTable,
    PagePagination,
  },
  data(){
    return {
      dialogStatus : {
        show : false,//是否打开弹窗,true打开,false关闭
      },
      editData : {
        have : false,//是否携带编辑数据,默认false为否
        data : {//携带的数据对象

        },
        url : "",//携带异步接口url
      },
    }
  },
  methods : {
    changeDialog(){
      console.log("转换前"+this.dialogStatus.show);
      this.dialogStatus.show = true;
      console.log("转换后"+this.dialogStatus.show);
    },
    showEditDialog(index){
      this.dialogStatus.show = true;//显示弹窗
      this.editData.have = true;
      //把当前行数据索引代表的当前数据传递,因为可能有些不在表格中显示的数据也要传递比如id
      // this.editData.data = this.tableData[index];
      this.editData.url = "www.baidu.com";
      console.log(this.editData);
    },
    showDeleteDialog(index){
      console.log(index);
    },
    commitDialog(){
      this.dialogStatus.show = false;//显示弹窗
    },
    closeDialog(){
      this.dialogStatus.show = false;//显示弹窗
    }
  }
}
</script>

<style scoped>

</style>
