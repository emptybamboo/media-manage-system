<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="loading"
      border
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(102, 153, 153, 0.2)"
      @selection-change="handleSelectionChange">
    <slot></slot>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "BasicTable",
  data() {
    return {
      tableData: [],
      loading: true,
    }
  },
  props : {
    tableDataArr : {
      type : Object,
      default : {},
    }
  },
  watch:{
    "tableDataArr.data" : {
      handler(newVal,oldVal){
        if(newVal){
          // setTimeout(()=>{
            console.log('我接收到了表格数据！');
            this.tableData = newVal;
            this.loading = false;
          // },2000);
        }
      },
      immediate: true,
    },
  },

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$emit("table-edit",index,row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
      this.$emit("table-delete",index,row);
    },
    handleSelectionChange(val) {
      console.log(this.multipleSelection);
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    }
  }
}
</script>

<style scoped>

</style>
