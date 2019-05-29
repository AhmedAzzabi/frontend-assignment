import Vue from "vue";
import Router from "vue-router";
import CompanyData from "./pages/CompanyData.vue";
import CompanyView from "./pages/CompanyView.vue";
import CompanyTable from "./pages/CompanyTable.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/404.vue";


Vue.use(Router);

const base = "/";

export default new Router({
    mode: "history",
    base,

    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/company-data",
            name: "Company Data",
            component: CompanyData
        },
        {
            path: "/company-table",
            name: "Company Table",
            component: CompanyTable
        },
        {
            path: "/company-view",
            name: "Company View",
            component: CompanyView
        },

        {
            path: "*",
            name: "404*",
            component: NotFound
        }
    ]
});