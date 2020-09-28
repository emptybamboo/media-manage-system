<template>
  <div id="data-dialog">
    <!--<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->

    <el-dialog title="收货地址" :visible="dialogFormVisible" @close="close('ruleForm')">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="commitData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "DataDialog",
  data() {
    return {
      dialogTableVisible: false,//表格弹窗开关
      // dialogFormVisible: false,//表单弹窗开关
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '80px'
    };
  },
  computed : {
    dialogFormVisible(){
        return this.changeDialog.show;
    }
  },
  props : {
    changeDialog:{
      type : Object,
      default : {},
    },
    editData:{
      type : Object,
      default : {},
    }
  },
  methods : {
    commitData(){
      //console.log("props传递的editData.data");
      //console.log(this.editData.data);
      //这里进行异步操作
      this.$emit('commit-dialog');
    },
    closeDialog(){
      this.$emit('close-dialog');
    },
    close(formName){
      this.$emit('close-dialog');
    }
  }
}
</script>

<style scoped>

</style>
