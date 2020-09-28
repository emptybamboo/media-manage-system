<template>
  <div class="block flex-simple padding-little">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "PagePagination",
  methods : {
    //页码大小变动回调
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //当前页码变化回调
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data(){
    return {
      currentPage : 1,//当前页码
    }
  }
}
</script>

<style scoped>

</style>
