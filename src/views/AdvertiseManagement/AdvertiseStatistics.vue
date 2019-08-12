<template>
  <div class="app-container">
    <div>
      <el-form :inline="true"
               :model="dataForm"
               ref="searchForm"
      >
        <el-form-item label="广告类型">
          <el-input v-model="dataForm.type"
                    placeholder="可选：7图片广告,8视频广告"
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="广告ID">
          <el-input v-model="dataForm.typeId"
                    placeholder="请先选择广告类型"
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="日期范围">
          <div class="block">
            <el-date-picker
              v-model="dataForm.time"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dashboard-text">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column prop="date"
                         label="广告类型">
        </el-table-column>
        <el-table-column label="广告ID"
                         prop="date">
        </el-table-column>
        <el-table-column label="广告浏览量"
                         prop="date">
        </el-table-column>
        <el-table-column label="广告点击量">
          <template slot-scope="scope">
          </template>
        </el-table-column>
        <el-table-column label="日期"
                         prop="date">
        </el-table-column>
      </el-table>
    </div>
    <div class="block" style="float:right;margin-top:30px;">
      <el-pagination layout="total, sizes, prev, pager, next, jumper"
                     @size-change="handleSizeChange"
                     background
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[10, 20, 30, 40]"
                     :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserManage',
    data() {
      return {
        currentPage: 1,
        dataForm: {
          type: '',
          typeId: '',
          time: ''
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
        ],
      }
    },
    computed: {},
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      handleSearch() {
        console.log(this.dataForm)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
