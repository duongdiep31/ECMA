import Navigo from "navigo";
import { $ } from "./utils";
import header from "./component/header";
import homepage from "./page/home";
import footer from "./component/footer";
import product from "./page/product";
import productdetails from "./page/product-details";
import categorydetails from "./page/category-details";
import productManagerPage from "./page/admin/list";
import creatproduct from "./page/admin/create-product";
import changeProduct from "./page/admin/change-product";
import register from "./page/register";
import login from "./page/login";
const router = new Navigo("/", { hash: true, linksSelector: "a" });
const render = async(page, afterRender) => {

    $('header').innerHTML = header.render(), header.afterRender;

    $('#container').innerHTML = await page;

    $('#footer').innerHTML = footer.render();
    if (afterRender) {
        await afterRender();
    }
}



const renderadmin = async(page, afterRender) => {

    $('#container').innerHTML = await page;

    if (afterRender) {
        await afterRender();
    }
}



const routes = () => {
    router
        .on("/", () => render(homepage.render(), homepage.afterRender))
        .on("/products", () => render(product.render(), product.afterRender))
        .on("/products/:id", ({ data }) => {
            render(productdetails.render(data), productdetails.afterRender)
        })
        .on("/category/:id", ({ data }) => {
            const id = data.id;
            render(categorydetails.render(id), categorydetails.afterRender)
        })
        .on("/register", () => render(register.render(), register.afterRender))
        .on("/login", () => render(login.render(), login.afterRender))
        //admin
        .on("/list", () => renderadmin(productManagerPage.render(), productManagerPage.afterRender))
        .on("createprd", () => renderadmin(creatproduct.render(), creatproduct.afterRender))
        .on("/changePrd/:id", ({ data }) => {
            const id = data.id;
            renderadmin(changeProduct.render(id), changeProduct.afterRender)
        })
        .notFound(() => {
            console.log("Not Found Page");
        })
        .resolve();
}
export default routes