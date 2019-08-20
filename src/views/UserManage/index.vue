<template>
  <div class="app-container">
    <div>
      <el-form :inline="true"
        :model="dataForm">
        <el-form-item label="用户名称">
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
          label="用户ID"
          align="center"
          prop="id">
        </el-table-column>

        <el-table-column
          label="用户名称"
          align="center"
          prop="nickName">
        </el-table-column>

        <el-table-column
          label="性别"
          align="center"
          prop="sex">
        </el-table-column>


        <el-table-column
          label="头像"
          align="center"
          width="180"
          prop="headImgUrl">
          <template slot-scope="scope">
            <el-popover
              placement="right"
              title=""
              trigger="hover">
              <img style="width: 200px;height: 200px" :src="scope.row.headImgUrl"/>
              <img slot="reference" :src="scope.row.headImgUrl" :alt="scope.row.headImgUrl"
                   style="max-height: 50px;max-width: 130px">
            </el-popover>
          </template>
        </el-table-column>


        <el-table-column
          :show-overflow-tooltip="true"
          label="Token"
          align="center"
          prop="token">
        </el-table-column>

        <el-table-column
          label="创建时间"
          align="center"
          prop="createTime">
        </el-table-column>

        <el-table-column
          label="修改时间"
          align="center"
          prop="updateTime">
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
      this.$http.get('user',{
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
      if(row.typeId === 1){
        return '收藏';
      }else if(row.typeId === 2){
        return '关注';
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
    line-height: 46px;
  }
}
</style>
