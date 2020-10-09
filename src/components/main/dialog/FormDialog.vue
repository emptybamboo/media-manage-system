<template>
  <el-dialog :title="formTitle" :visible.sync="dialogFormVisible" @close="close" width="25%">
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="ensure">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "FormDialog",
  data() {
    return {
      dialogTableVisible : false,
      dialogFormVisible : false,
    };
  },
  props : {
    dialogStatus : {
      type : Object,
      default : {},
    },
    formTitle : {
      type : String,
      default : "无标题",
    }
  },
  watch : {
    "dialogStatus.show" : {
      handler(newVal,oldVal){
        if(typeof newVal==="boolean"){
          console.log("弹出层子组件监听到数据变动");
          console.log(newVal);
          this.dialogFormVisible = newVal;
        }
      },
      immediate: true,
      //deep: true
    },
    "formTitle" : {
      handler(newVal,oldVal){
        if(typeof newVal==="string"){
          console.log("弹出层子组件监听到标题数据变动");
          console.log(newVal);
          this.formTitle = newVal;
        }
      },
      immediate: true,
      //deep: true
    }
  },
  methods : {
    cancel(){
      this.$emit("close-dialog");
    },
    ensure(){
      this.$emit("commit-dialog");
    },
    close(){
      this.$emit("close-dialog");
    },
  }
}
</script>

<style scoped>

</style>
