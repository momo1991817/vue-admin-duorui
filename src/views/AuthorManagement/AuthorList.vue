<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item>
        <el-button>新增</el-button>
      </el-form-item>
    </el-form>
    <div class="dashboard-text">
      <el-table :data="tableData"
        border
        style="width: 100%">
        <el-table-column prop="date"
          label="ID">
        </el-table-column>
        <el-table-column prop="date"
          label="作者名称">
        </el-table-column>
        <el-table-column prop="date"
          label="用户ID">
        </el-table-column>
        <el-table-column prop="date"
          label="后台用户ID">
        </el-table-column>
        <el-table-column prop="date"
          label="创建时间">
        </el-table-column>
         <el-table-column prop="date"
          label="更新时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text"
              size="small">删除</el-button>
            <el-button type="text"
              size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block"
      style="float:right;margin-top:30px;">
      <el-pagination layout="total,prev, pager, next"
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
      dataForm: {
        key: ''
      },
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
