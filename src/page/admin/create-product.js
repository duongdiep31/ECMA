import { getAll } from "../../api/categoryapi";
import { add } from "../../api/productsapi";
import Clistprd from "../../component/admin/Clisprd";
import { $, reRender } from "../../utils";

const creatproduct = {
    async render() {
        const { data } = await getAll();
        const resultcate = data.map(cate => {
            return /*html*/ ` <option value="${cate.id}">${cate.name}</option>`
        })
        console.log(resultcate);
        return /*html*/ `<form class ="w-3/4 m-auto" id="addprd">

        <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">price</label>
          <input type="text" class="form-control" name="price" id="price">
        </div>
        <div class="mb-3">
          <label for="cate" class="form-label">Categories</label>
                 <select id = "cate" name ="cate">
                    ${resultcate}
                 </select>

          
        </div>
        <div class="mb-3 form-check">
        <label for="image" class="form-label">image</label>

          <input type="text" class="form-check-input" name = "image" id="image">
        </div>
        <button type="submit" id = "btn" class="btn btn-primary">Submit</button>
      </form>`
    },
    afterRender() {
        const btns = document.querySelector("#addprd");
        console.log(btns);
        btns.addEventListener('submit', async(e) => {
            e.preventDefault();
            const data = {
                name: $("#name").value,
                price: $("#price").value,
                cate: $("#cate").value,
                image: $("#image").value
            }
            console.log(data);
            await add(data)
            reRender(Clistprd, '#listprd');
            window.location.hash = '/list';


        })


    }

}
export default creatproduct