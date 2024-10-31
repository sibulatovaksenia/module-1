import { createRouter, createWebHistory } from "vue-router";
import PartCatalog from "../views/PartCatalog.vue";
import AddPart from "../views/AddPart.vue";
import SearchParts from "../views/SearchParts.vue";

const routes = [
  { path: "/catalog", name: "PartCatalog", component: PartCatalog },
  { path: "/add-part", name: "AddPart", component: AddPart },
  { path: "/search", name: "SearchParts", component: SearchParts },
  { path: "/", redirect: "/catalog" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
