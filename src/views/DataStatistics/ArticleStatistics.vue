<template>
    <div class="app-container">
      <UEditor :value="ueditor.value"
               :config="ueditor.config"
               ref="ue"/>
      <input type="button"
             value="显示编辑器内容（从控制台查看）"
             @click="returnContent">
    </div>
</template>

<script>
import UEditor from "../../components/UEditor/UEditor";
export default {
  name: 'ArticleStatistics',
  components: {UEditor},
  data() {
    return {
      dat: {
        content: ''
      },

      ueditor: {
        value: '编辑器默认文字',

        config: {}
      }
    }
  },

  methods: {
    returnContent() {
      this.dat.content = this.$refs.ue.getUEContent()

      console.log(this.dat.content)
    }
  }
}
</script>

<style scoped>

</style>
