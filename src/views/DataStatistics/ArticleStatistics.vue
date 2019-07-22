<template>
    <div class="app-container">
      <UEditor @ready="editorReady" ref="ue" :value="defaultMSG" :ueditorConfig="config" style="width:100%;"/>
    </div>
</template>

<script>
import UEditor from "../../components/UEditor/UEditor";
export default {
  name: 'ArticleStatistics',
  data() {
    return {
      defaultMSG: null,
      form: {
        content: ''
      },
      config: {
        initialFrameHeight: 500
      }
    };
  },
  created() {
    this.getInfo();
  },
  components: {UEditor},
  methods: {
    getInfo() {
      this.defaultMSG = this.form.content;
    },

    editorReady(instance) {
      instance.setContent(this.form.content);
      instance.addListener('contentChange', () => {
        this.form.content = instance.getContent();
      });
    },

  }
}
</script>

<style scoped>

</style>
