<template>
  <div class="block" id="complete-pagination">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizeArr"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "CompletePagination",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit("change-page-size",val);//传递到父组件的方法中
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("change-current-page",val);//传递到父组件的方法中
    }
  },
  data() {
    return {
      currentPage: 1,
      total : 1,
      pageSize : 10,
      pageSizeArr : [],
    };
  },
  props : {
    paginationData : {
      type : Object,
      default : {},
    }
  },
  watch : {
    "paginationData.totalNum" : {
      handler(newVal,oldVal){
        if(typeof newVal==="number"){
          this.total = newVal;
        }
      },
      immediate: true,
    },
    "paginationData.pageSize" : {
      handler(newVal,oldVal){
        if(typeof newVal==="number"){
          this.pageSize = newVal;
        }
      },
      immediate: true,
    },
    "paginationData.pageSizeArr" : {
      handler(newVal,oldVal){
        if(newVal){
          this.pageSizeArr = newVal;
        }
      },
      immediate: true,
    },
    "paginationData.currentPage" : {
      handler(newVal,oldVal){
        if(typeof newVal==="number"){
          this.currentPage = newVal;
        }
      },
      immediate: true,
    },
  }
}
</script>

<style scoped>

</style>
