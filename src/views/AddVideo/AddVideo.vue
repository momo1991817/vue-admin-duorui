<template>
  <div class="app-container">
    <el-form :model="addVideoForm" :rules="rules" ref="addVideoForm" label-width="100px" class="add-video-form">
      <el-form-item label="视频标题" prop="title">
        <el-input v-model="addVideoForm.title"></el-input>
      </el-form-item>
      <el-form-item label="是否发布" prop="isPubilc">
        <el-select v-model="addVideoForm.isPubilc">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签" prop="videoLabel">
        <el-input v-model="addVideoForm.videoLabel"></el-input>
      </el-form-item>
      <el-form-item label="视频封面" prop="videoImg">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="addVideoForm.fileList"
          list-type="picture"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
<!--          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
      </el-form-item>
      <el-form-item label="上传视频" prop="uploadVideo">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="addVideoForm.videoFileList">
          <el-button size="small" type="primary">点击上传</el-button>
<!--          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addVideoForm')">提交</el-button>
        <!--          <el-button @click="resetForm('addArticleForm')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      name: "AddVideo",
      data() {
        return {
          addVideoForm: {
            title: '',
            isPubilc: '是',
            videoLabel: '',
            videoImg: '',
            fileList:[],
            videoFileList:[],
            uploadVideo:''
          },
          rules: {
            title: [
              { required: true, message: '请输入视频标题', trigger: 'blur' }
            ],
            isPubilc: [
              { required: true, trigger: 'change' }
            ],
            videoLabel: [
              { required: true, message: '请输入标签', trigger: 'blur' }
            ],
            videoImg: [
              { required: true }
            ],
            uploadVideo: [
              { required: true }
            ]
          }
        };
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
