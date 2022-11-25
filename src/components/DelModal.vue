<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">刪除品項</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          確認刪除:{{ item.title }} <br />!!警告:此動作無法復原
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
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: {
    item: {},
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    delProduct() {
      console.log("a");
      console.log(this.item.id);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.item.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        this.hideModal();
        this.$emit("del-modal");
      });
    },
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
