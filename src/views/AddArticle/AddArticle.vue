<template>
    <div class="app-container">
      <el-form :model="addArticleForm" :rules="rules" ref="addArticleForm" label-width="100px" class="addArticleForm">
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="addArticleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章栏目" prop="column">
          <el-radio-group v-model="addArticleForm.column">
            <el-radio label="推荐"></el-radio>
            <el-radio label="健身"></el-radio>
            <el-radio label="情感"></el-radio>
            <el-radio label="生活"></el-radio>
            <el-radio label="育儿"></el-radio>
            <el-radio label="健康"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发布状态" prop="status">
          <el-checkbox-group v-model="addArticleForm.status">
            <el-checkbox label="下架" name="status"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="封面样式" prop="images">
          <el-select v-model="addArticleForm.images">
            <el-option label="大图模式" value="0"></el-option>
            <el-option label="三图模式" value="1"></el-option>
            <el-option label="无图模式" value="2"></el-option>
            <el-option label="左图右文模式" value="3"></el-option>
            <el-option label="左文右图模式" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章封面" prop="articleImg">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="addArticleForm.fileList"
            list-type="picture"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
<!--            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
          </el-upload>
        </el-form-item>
        <el-form-item label="文章内容" prop="content" style="">
          <UEditor :value="ueditor.value"
                   :config="ueditor.config"
                   ref="ue"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('addArticleForm')">提交</el-button>
<!--          <el-button @click="resetForm('addArticleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import UEditor from "../../components/UEditor/UEditor";
    export default {
      name: "AddArticle",
      components: {UEditor},
      data() {
        return {
          addArticleForm: {
            title: '',
            images: '大图模式',
            status: [],
            column: '',
            articleImg: '',
            content: '',
            fileList:[]
          },
          dat: {
            content: ''
          },
          ueditor: {
            value: '编辑器默认文字',

            config: {

            }
          },
          rules: {
            title: [
              { required: true, message: '请输入活动名称', trigger: 'blur' }
              // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            column: [
              { required: true, trigger: 'change' }
            ],
            images: [
              { required: true, trigger: 'change' }
            ],
            status: [
              { required: true, trigger: 'change' }
            ],
            articleImg: [
              // { required: true }
            ],
            content: [
              { required:true }
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
        returnContent() {
          this.dat.content = this.$refs.ue.getUEContent()
        },
        submitForm(formName) {
          this.addArticleForm.content = this.$refs.ue.getUEContent();
          this.$refs[formName].validate((valid) => {
            console.log(this.addArticleForm)
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
