<template>
  <div class="app-container">
    <el-button type="primary" @click="handleEdit">新增</el-button>
    <div class="table-box">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column prop="ID" label="ID"></el-table-column>
        <el-table-column prop="position" label="广告位置"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
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
    <!--    编辑广告位置弹框-->
    <el-dialog
      title="广告编辑"
      :visible.sync="dialogFormVisible"
      @close="cancelForm('form')"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="广告位置" :label-width="formLabelWidth" prop="position">
          <el-input v-model="form.position" autocomplete="off" placeholder="请输入广告位置"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelForm('form')">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'UserManage',
    data() {
      return {
        currentPage: 1,
        dialogFormVisible: false,
        form: {
          position: ''
        },
        rules: {
          position: [
            {required: true, message: '请输入广告位置'}
          ]
        },
        formLabelWidth: '120px',
        tableData: [
          {
            ID: '1',
            position: '底部栏',
            createTime: '2019-02-21 11:31',
            updateTime: '2019-02-21 11:31'
          },
          {
            ID: '2',
            position: '推荐',
            createTime: '2019-02-21 11:31',
            updateTime: '2019-02-21 11:31'
          }
        ]
      }
    },
    computed: {},
    methods: {
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        if (row !== undefined) {
          this.form.position = row.position;
        } else {
          this.form.position = ''
        }
        console.log(row)
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid)
            this.dialogFormVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].clearValidate();
        this.$refs[formName].resetFields();
        this.dialogFormVisible = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-box {
    margin: 22px 0 0 0;
  }
</style>
