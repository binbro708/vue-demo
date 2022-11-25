<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">刪除 資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>是否刪除 資料 (刪除後將無法恢復)</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from "@/mixins/modalMixin"; // mixins 方法:重複使用程式碼統一管理
export default {
  props: {
    item: {},
  },
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    delProduct() {
      console.log("delProduct-res");
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.item.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
      });
      this.hideModal();
      this.$emit("del-modal");
    },
  },
  mixins: [modalMixin],
};
</script>
