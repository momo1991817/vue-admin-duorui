<template>
  <div class="app-container">
    <div>
      <el-form :inline="true"
        :model="dataForm">
        <el-form-item label="轮播图ID">
          <el-input v-model="dataForm.key"
            placeholder="标题" 
            clearable></el-input>
        </el-form-item>
        <el-form-item label="日期">
        <div class="block">
          <el-date-picker v-model="dataForm.time"
            type="datetimerange"
            :picker-options="pickerOptions2"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
        </div>
      </el-form-item>
        <el-form-item>
        <el-button>查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dashboard-text">
      <el-table :data="tableData"
        border
        style="width: 100%">
        <el-table-column prop="date"
          label="ID">
        </el-table-column>
         <el-table-column prop="date"
          label="PV">
        </el-table-column>
        <el-table-column label="点击数量">
          <template slot-scope="scope">
          </template>
        </el-table-column>
         <el-table-column label="日期"
          prop="date">
        </el-table-column>
      </el-table>
    </div>
    <div class="block" style="float:right;margin-top:30px;">
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
      ],
        pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
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
