console.log('added script')
//timing function
function getTimeString(time){
    const hour=parseInt(time/3600);
    let remainingSecond=time % 3600;
    const minute=parseInt(remainingSecond/60);
    remainingSecond=remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} seconds ago`
}


//fetch, load and show categories
const removeActiveClass=()=>{
const buttons=document.getElementsByClassName("category-btn");
for(let btn of buttons){
    btn.classList.remove('active')
}
}

//create load categories
const loadCaterogies=()=>{
    console.log('loadcategories')
//fetch the data
fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then(res=>res.json())
.then(data=>displayCategories(data.categories))
.catch((err)=>console.log('error'))
}

//load vdos
const loadVideos=(searchText="")=>{
   
//fetch the data
fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
.then(res=>res.json())
.then(data=>displayVideos(data.videos))
.catch((err)=>console.log('error'))
}

const loadCategoryVideos=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res=>res.json())
    .then(data=>{
        //shobaike active class remove koro
         removeActiveClass();
        //id er class k active koro
        const activeBtn=document.getElementById(`btn-${id}`)
        activeBtn.classList.add('active')
        displayVideos(data.category)
    })
    .catch((err)=>console.log('error'))
}

const loadDetails=async(videoId)=>{
    console.log(videoId)
const uri=`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
const res= await fetch(uri);
const data=await res.json();
displayDetails(data.video)
}
const displayDetails=(video)=>{
    console.log(video)
const detailConstainer= document.getElementById('modal-content');
detailConstainer.innerHTML=`
<img src=${video.thumbnail}>
<p>${video.description}</p>
`

//way-1
//document.getElementById('showModalData').click();
//way-2
document.getElementById('customModal').showModal();
}
// const cardDemo
//display vdos
const displayVideos=(videos)=>{
    const videoContainer=document.getElementById('videos');
    videoContainer.innerHTML="";
    if(videos.length==0){
        videoContainer.classList.remove('grid');
        videoContainer.innerHTML=`
        <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
        <img src="assets/Icon.png">
        <h2 class="text-center text-xl font-bold">NO CONTENT HERE IN THIS CATEGORY</h2>
        </div>
        `;
        return;
    }
    else{
        videoContainer.classList.add('grid');
    }
videos.forEach(video=>{
const card=document.createElement('div');
card.classList="card card-compact";
card.innerHTML=
`<figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      alt="Shoes"
      class="h-full w-full object-cover" />
      ${
        video.others.posted_date?.length==0?"": `<span class="absolute text-xs right-2 bottom-2 bg-black rounded p-1 text-white">
      ${getTimeString(video.others.posted_date)}</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div>
   <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
   </div>
   <div>
   <h2 class="font-bold">${video.title}</h2>
   <div class="flex items-center gap-2">
   <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified==true?`<img class="w-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000">`:""}
   </div>
   <p><button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button></p>
   </div>
  </div>
`;
videoContainer.append(card)
})
}
//create Display Category
const displayCategories=(categories)=>{
   // console.log(categories)
    const categoryContainer=document.getElementById('categories')
    //add data in html
     categories.forEach((item)=>{
        //console.log(item)
        //create a button
        const buttonContainer=document.createElement('div');
        buttonContainer.innerHTML=`
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
        ${item.category}
        </button>`
        // button.classList='btn';
        // button.innerText=item.category;
        
        //add button to category container
        categoryContainer.append(buttonContainer)

    })
}

document.getElementById('search-input').addEventListener("keyup",(e)=>{
    console.log(e.target.value)
})
loadCaterogies()
loadVideos()