<template>

  <div>
    <script :id="randomId" type="text/plain"></script>
  </div>

</template>

<script>
  export default {
    name: 'UEditor',
    data () {
      return {
        //每个编辑器生成不同的id,以防止冲突
        randomId: 'editor_' + (Math.random() * 100000000000000000),
      }
    },
    props: {
      value: '',

      config: {
        serverUrl: 'http://35.201.165.105:8000/controller.php'
      }
    },

    mounted() {
      const _this = this

      this.editor = window.UE.getEditor(this.randomId, this.config)

      this.editor.addListener('ready', function() {
        _this.editor.setContent(_this.value)
      })
    },

    methods: {
      getUEContent() {
        return this.editor.getContent()
      }
    },

    destroyed() {
      this.editor.destroy()
    }
  }
</script>

