const loadData = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayInitialTree(data.plants);
    });
};

const displayInitialTree = (datas) => {
  const chooseContainer = document.getElementById("card-container");
  chooseContainer.innerHTML = "";
  if (datas.length > 0) {
    datas.forEach((data) => {
      chooseContainer.innerHTML += `
            <div class="bg-white p-5 rounded-xl flex flex-col h-full ">
              <img class="w-full h-48" src="${data.image}" alt="" />
              <h2 class="text-[#18181B] font-semibold text-sm space-y-5">${data.name}</h2>
              <p class="text-[#1F2937] text-xs flex-1">
                ${data.description}
              </p>
              <div class="flex justify-between items-center">
                <span class="btn rounded-3xl bg-[#DCFCE7] text-[#15803D] font-medium my-2 "
                  >${data.category}</span
                >
                <span>৳${data.price}</span>
              </div>

              <button class="btn bg-[#15803D] text-white rounded-4xl w-full mt-auto">
                Add to Cart
              </button>
            </div>

        
        `;
    });
  }
  else{
    chooseContainer.innerHTML += `<h2>No Data Found!!!</h2>`

  }
};

loadData();
