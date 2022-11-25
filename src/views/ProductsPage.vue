<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      新增產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td class="text-right">{{ product.origin_price }}</td>
        <td class="text-right">{{ product.price }}</td>
        <td>
          <span class="text-success" v-if="product.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, product)"
            >
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductsModal
    ref="ProductsModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductsModal>
</template>

<script>
import ProductsModal from "../components/ProductModal.vue";

export default {
  data() {
    // 定義產品跟分頁
    return { products: [], pagination: {}, tempProduct: {}, isNew: false };
  },
  components: {
    ProductsModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      console.log(isNew, item);
      // 如果是點擊新增產品，打開來就會是空的
      if (isNew) {
        this.tempProduct = {};
        // 如果不是點新增產品，那就剩下點編輯，那這個tempProduct就會是原本有的資料
      } else {
        this.tempProduct = { ...item };
      }
      // 原本isNew的false會被改成true
      this.isNew = isNew;
      // 把temProduct清空後才打開
      const productComponent = this.$refs.ProductsModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增就執行這邊的程式碼
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";
      // isNew=false 就是編輯的狀態
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      const productComponent = this.$refs.ProductsModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        console.log(res);
        productComponent.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
