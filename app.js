let product_form = document.getElementById('product_form')
let modalmsg = document.querySelector('.msg')
let productList = document.getElementById('productList')


let GetAllProducts = () =>{
    const data = ReadLsData('Product')

    // If Ls data not exist

    if (!data) {
       productList.innerHTML =` <tr>
        <td colspan = "7" class= "text-center"> Products Not Found! </td>
       </tr>` 
    }

    //if exist

    if(data){
        let list = ""
        // loop for showing data
        data.map((item, index) =>{

            list += `
            <tr>
                  <td>${index+1}</td>
                  <td><img style="width: 50px; height: 50px; border-radius: 50%;" src="${item.image}" alt=""></td>
                  <td>${item.name}</td>
                  <td>${item.price} BDT</td>
                  <td>${item.quantity} Kg</td>
                  <td>${item.price * item.quantity} BDT</td>
                  <td>
                    <a class="btn btn-info btn-sm shadow-sm" href=""><i class="fas fa-eye"></i></a>
                    <a class="btn btn-warning btn-sm shadow-sm" href=""><i class="fas fa-edit"></i></a>
                    <a class="btn btn-danger btn-sm shadow-sm" href=""><i class="fas fa-trash"></i></a>
                  </td>
                </tr>`
        });
        productList.innerHTML = list;
    }

    

}

GetAllProducts()

product_form.onsubmit = (e) => {
    e.preventDefault()

    // get form data from Form Data object

    let form_data = new FormData(e.target)
    let Product_data = Object.fromEntries(form_data.entries())
    let {name,image,quantity,price} = Object.fromEntries(form_data.entries())

    
    // Form Validation

    if (!name || !image || !quantity || !price) {
        modalmsg.innerHTML = alertFucntion('All fields are required!')
    } else {

       CreateLsData('Product', Product_data)
       GetAllProducts()
       modalmsg.innerHTML = alertFucntion('Your Product has been added.', 'success') 
       product_form.reset()
    }
    


}


