const loadData=()=>{
    const chooseContainer=document.getElementById("card-container")
    chooseContainer.innerHTML=""
    const url=`https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
    })

            //     <div class="bg-white p-5 rounded-xl ">
            //   <img src="./assets/about.png" alt="" />
            //   <h2 class="text-[#18181B] font-semibold text-sm ">Mango Tree</h2>
            //   <p class="text-[#1F2937] text-xs">
            //     A fast-growing tropical tree that produces delicious, juicy
            //     mangoes during summer. Its dense green
            //   </p>
            //   <div class="flex justify-between items-center">
            //     <span class="btn rounded-3xl bg-[#DCFCE7] text-[#15803D] font-medium"
            //       >Fruit Tree</span
            //     >
            //     <span>৳500</span>
            //   </div>

            //   <button class="btn bg-[#15803D] text-white rounded-4xl w-full mt-4">
            //     Add to Cart
            //   </button>
            // </div>
}




loadData()