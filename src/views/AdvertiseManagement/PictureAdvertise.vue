<template>
  <div class="app-container">
    <el-button type="primary" @click="handleEdit">添加图片广告</el-button>
    <div class="table-box">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column prop="ID" label="ID"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="position" label="广告位置"></el-table-column>
        <el-table-column prop="count" label="点击量"></el-table-column>
        <el-table-column prop="picture" label="图片" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.picture">
          </template>
        </el-table-column>
        <el-table-column prop="pictureLink" label="图片链接"></el-table-column>
        <el-table-column prop="creatTime" label="更新时间"></el-table-column>
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
    <!--    编辑广告弹框-->
    <el-dialog
      title="广告图片编辑"
      :visible.sync="dialogFormVisible"
      @close="cancelForm('form')"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入广告名称"></el-input>
        </el-form-item>
        <el-form-item label="广告图片位置" :label-width="formLabelWidth" prop="value">
          <el-select v-model="form.value">
            <el-option
              v-for="item in form.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图片链接" :label-width="formLabelWidth" prop="imageLink">
          <el-input v-model="form.imageLink" autocomplete="off" placeholder="http://www.baidu.com"></el-input>
        </el-form-item>
        <el-form-item label="上传图片" :label-width="formLabelWidth" prop="fileList">
          <el-upload
            class="upload-demo"
            :action="$uploadHttp"
            :on-progress="handleProgress"
            :on-remove="handleRemove"
            :file-list="form.fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传一张图片，且不超过500kb</div>
          </el-upload>
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
          name: '',
          imageLink: '',
          fileList: [],
          options: [{
            value: '0',
            label: '底部栏'
          }, {
            value: '1',
            label: '推荐'
          }],
          value: '0',
        },
        formLabelWidth: '120px',
        rules: {
          value: [
            {required: true, message: '请选择广告图片位置'}
          ],
          name: [
            {required: true, message: '请输入广告名称'}
          ],
          imageLink: [
            {required: true, message: '请输入图片链接'}
          ],
          fileList: [
            {required: true, message: '请上传图片', trigger: 'change'}
          ]
        },
        tableData: [
          {
            ID: '1',
            name: '一部成年人短片刷爆全网：我可能慢慢的毁了我自己！',
            position: '底部栏',
            count: '0',
            picture: 'https://articleimage.oss-cn-beijing.aliyuncs.com/image/advertisement/3eae18b5-bd37-497e-a1f6-19854c86df37.jpg',
            pictureLink: 'https://articleimage.oss-cn-beijing.aliyuncs.com/image/advertisement/3eae18b5-bd37-497e-a1f6-19854c86df37.jpg',
            creatTime: '2019-06-21 04:15',
          },
          {
            ID: '2',
            name: '一部成年人短片刷爆全网：我可能慢慢的毁了我自己！',
            position: '推荐',
            count: '2',
            picture: 'https://articleimage.oss-cn-beijing.aliyuncs.com/image/advertisement/3eae18b5-bd37-497e-a1f6-19854c86df37.jpg',
            pictureLink: 'https://articleimage.oss-cn-beijing.aliyuncs.com/image/advertisement/3eae18b5-bd37-497e-a1f6-19854c86df37.jpg',
            creatTime: '2019-06-21 04:15',
          }
        ]
      }
    },
    computed: {},
    methods: {
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        if (row !== undefined) {
          this.form = {
            ID: row.ID,
            name: row.name,
            imageLink: row.pictureLink,
            fileList: [{url: row.pictureLink}],
            options: [{
              value: '0',
              label: '底部栏'
            }, {
              value: '1',
              label: '推荐'
            }],
            value: row.position,
          };
        } else {
          this.form.position = ''
        }
      },
      handleDelete(index, row) {
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
        this.form.fileList = [];
      },
      handleRemove(file, fileList) {
        this.form.fileList = fileList;
      },
      handleProgress(event, file, fileList) {
        // 只能上传一张图片，替换已上传的文件
        this.form.fileList = fileList.slice(fileList.length - 1, fileList.length);
        // 上传图片后，移除该表单项的校验结果
        this.$refs['form'].clearValidate('fileList');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-box {
    margin: 22px 0 0 0;

    img {
      width: 80px;
      height: 60px;
    }
  }
</style>
