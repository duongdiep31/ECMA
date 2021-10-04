import { list } from "postcss";
import { getAll, remove } from "../../api/productsapi";
import Clistprd from "../../component/admin/Clisprd";
import { reRender } from "../../utils";

const productManagerPage = {
    async render() {
        return /*html*/ `

         <div id = "listprd">

            ${ await Clistprd.render()}
        </div>
        
        `
    },
    async afterRender() {

        return `${ await Clistprd.afterRender()}`
    }
}
export default productManagerPage;