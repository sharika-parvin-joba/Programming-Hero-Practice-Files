//category btn


const loadCategory=()=>{
 fetch('https://openapi.programming-hero.com/api/peddy/categories')
 .then(res=>res.json())
 .then(data=>displayCategory(data.categories))
}

const displayCategory=(data)=>{
    console.log(data);
    const categoryContainer=document.getElementById('category-btn');
    data.forEach((item)=>{
        const buttonContainer=document.createElement('div');
        buttonContainer.innerHTML=`
        <button onclick="loadCategoryPets(${item.id})" class="border-1 border-gray-300 rounded-md px-4 py-2">${item.category}</button> 
        `;

        categoryContainer.append(buttonContainer);
    })

}

//load category pets by click btn

const loadCategoryPets=(categoryName)=>{
    //alert(id)
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    .then(res=>res.json())
    .then(data=>displayVideos(data.data))
}

//load vdo

const loadVideos=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res=>res.json())
    .then(data=>displayVideos(data.pets))
}

//display vdos

const displayVideos=(videos)=>{
    console.log(videos)
    const videoContainer=document.getElementById('videos')
    videos.forEach((vdo)=>{
        const card= document.createElement('div');
        card.innerHTML=`
      <div class="border-1 border-gray-300 rounded-md">
        <div class="card border-1 border-gray-200 m-4">
  <figure>
    <img
      src=${vdo.image}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${vdo.pet_name}</h2>
    <p class="flex items-center"><img src="https://img.icons8.com/?size=100&id=G9aQlVzIT6H5&format=png&color=000000" class="w-8 px-2">Breed : ${vdo.breed}</p>
    <p class="flex items-center"><img src="https://img.icons8.com/?size=100&id=23&format=png&color=000000" class="w-7 px-2">Birth : ${vdo.date_of_birth}</p>
     <p class="flex items-center"><img src="https://img.icons8.com/?size=100&id=1665&format=png&color=000000" class="w-7 px-2">Gender : ${vdo.gender}</p>
    <p class="flex items-center"><img src="https://img.icons8.com/?size=100&id=121&format=png&color=000000" class="w-7 px-2">Price : ${vdo.price}</p>
    <div class="card-actions justify-end">
      <button class="btn px-2 py-1 text-sm btn-primary">Details</button>
    </div>
  </div>
</div>
      </div>
`
videoContainer.append(card)
    })
    

}

loadCategory()
loadVideos()