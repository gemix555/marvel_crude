import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import AddPost from "@/views/AddPost.vue";
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";

import router from "@/router/index.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App", () => {
  it("отрисовывает дочерний компонент с помощью роутинга 'add-post'", async () => {
    const wrapper = mount(App, {
      localVue,
      router,
    });

    router.push("/add-post");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(AddPost).exists());
  });
  it("отрисовывает дочерний компонент с помощью роутинга '/'", async () => {
    const wrapper = mount(App, {
      localVue,
      router,
    });

    router.push("/");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Home).exists());
  });
  it("Имя героя", () => {
    const title = "DadPool";
    const wrapper = shallowMount(Post);

    expect(wrapper.find("h3").text()).toBe(title);
  });
});
