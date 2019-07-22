<template>
  <div class="app-container">
    <div class="dashboard-text">
      <el-table :data="tableData"
        border
        style="width: 100%">
        <el-table-column prop="date"
          label="openId"
          width="180">
        </el-table-column>
        <el-table-column label="Token"
          prop="date">
        </el-table-column>
        <el-table-column label="用户头像"
          prop="date">
        </el-table-column>
        <el-table-column label="性别">
          <template slot-scope="scope">
          </template>
        </el-table-column>
        <el-table-column label="用户昵称"
          prop="date">
        </el-table-column>
        <el-table-column label="创建时间"
          prop="date">
        </el-table-column>
        <el-table-column label="更新时间"
          prop="date">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserManage',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
