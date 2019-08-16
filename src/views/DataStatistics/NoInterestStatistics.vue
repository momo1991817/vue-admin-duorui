<template>
  <div class="app-container">
    <div>
      <el-form :inline="true"
        :model="dataForm">
        <el-form-item label="类型">
          <el-input v-model="dataForm.key"
            placeholder="标题"
            clearable></el-input>
        </el-form-item>
         <el-form-item label="类型ID">
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
                stripe
                style="width: 100%">
        <el-table-column
          label="数据类型"
          align="center"
          prop="type"
          :formatter="formatterType"
        >
        </el-table-column>

        <el-table-column
          label="类型ID"
          align="center"
          prop="typeId">
        </el-table-column>

        <el-table-column
          label="不感兴趣数量"
          align="center"
          prop="number">
        </el-table-column>

        <el-table-column
          label="日期"
          align="center"
          prop="date">
        </el-table-column>
      </el-table>


    </div>
    <!--分页-->
    <div class="block" style="float:left;margin-top:30px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page=page
        :page-sizes="[10, 20, 30, 50, 100]"
        :page-size=pageSize
        layout="total, sizes, prev, pager, next, jumper"
        :total=dataTotal>
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
      tableData: [],
      page:1,
      pageSize:10,
      dataTotal:0,
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
    getData(){
      let _this = this;
      this.$http.get('statistics/getNoInterest',{
        params:{
          page:_this.page,
          pageSize:_this.pageSize
        }
      }).then(resp=>{
        _this.dataTotal = resp.data.totalCount;
        this.tableData = resp.data.data;
      })
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getData();
    },
    formatterType(row, column, cellValue){
      if(row.type === 1){
          return '文章';
      }else if(row.type === 2){
          return '视频';
      }else {
          return '未知';
      }
    },

    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  },created() {
    this.getData();
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
      line-height: 36px;
    }
  }
</style>
