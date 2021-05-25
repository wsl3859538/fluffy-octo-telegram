<template>
  <div class="editor">
    <!-- :customModules="customModulesForEditor" -->
    <!-- :editorOptions="editorSettings" -->
    <vue-editor
      v-model="editorContent"
      :editorToolbar="customToolbar"
      id="container"
      useCustomImageHandler
      @image-added="handleImageAdded"
      @blur="onEditorBlur"
      > </vue-editor
    >
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },

  props: ["defaultText"],

  data() {
    return {
      editorContent: "",
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"],
      ],
    };
  },

  mounted() {
    console.log("defaultText", this.defaultText);
    this.editorContent = this.defaultText;
    this.$emit("update:rich-text", this.editorContent);
  },

  methods: {
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData();
      formData.append("file", file);

      console.log("formData", formData);

      this.$http({
        url: this.$http.adornUrl("/app/upload"),
        method: "post",
        data: formData,
      }).then(({ data }) => {
        if (data && data.code === 200) {
          Editor.insertEmbed(cursorLocation, "image", data.url);
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 失去光标之后
    onEditorBlur() {
      this.$emit("update:rich-text", this.editorContent);
    },
  },
};
</script>

<style>
#editor1,
#editor2 {
  height: 350px;
}
</style>