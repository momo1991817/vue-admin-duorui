<template>
    <div class="app-container">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="文章栏目" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="推荐"></el-radio>
            <el-radio label="健身"></el-radio>
            <el-radio label="情感"></el-radio>
            <el-radio label="生活"></el-radio>
            <el-radio label="育儿"></el-radio>
            <el-radio label="健康"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发布状态" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="下架" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="封面样式" prop="region">
          <el-select v-model="ruleForm.region">
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
            :file-list="fileList"
            list-type="picture"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="文章内容" prop="content" style="">
          <UEditor :value="ueditor.value"
                   :config="ueditor.config"
                   ref="ue"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
<!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
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
          ruleForm: {
            name: '',
            region: '大图模式',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            articleImg: '',
            content: '',
          },
          fileList:[],
          dat: {
            content: ''
          },
          ueditor: {
            value: '编辑器默认文字',

            config: {

            }
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
              { required: true, trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ],
            articleImg: [
              { required: true }
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
