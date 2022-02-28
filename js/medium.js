
$(document).ready(function(){
//----------------------Método posts para crear ---------------------------------
  let btnSendPost = document.querySelector('#sendPost')

  //----------------------Función para crear posts con el método post ---------------------------------
  btnSendPost.addEventListener('click', () => {
    //console.log('click')
    let title = document.querySelector('#title').value
    let imgPerfil = document.querySelector('#imgPerfil').value
    let author = document.querySelector('#autor').value
    let fecha = new Date()
    let dateCreated = `${fecha.getDate()}/${fecha.getMonth() +1}/${fecha.getFullYear()}`
    let readingTime = document.querySelector('#readingTime').value
    let formFile = document.querySelector('#formFile').value
    let abstract = document.querySelector('#abstract').value
    let category = document.querySelector("#inputGroupSelect01").value;
    let postContent = document.querySelector('#postContent').value
    //console.log(title, imgPerfil, author, dateCreated, readingTime, formFile, abstract, category, postContent)
    if(
        title !== '' &&
        imgPerfil !== '' &&
        author !== '' &&  
        dateCreated !== '' &&
        readingTime !== '' &&
        formFile !== '' &&
        abstract !== '' &&
        category !== '' &&
        postContent !== ''
    ){
        let objNewPost = {
          title: title,
          imgPerfil: imgPerfil,
          author: author,
          dateCreated: dateCreated,
          readingTime: readingTime,
          formFile: formFile,
          abstract: abstract,
          postContent: postContent,
          category: category,
        }
        //console.log(objNewPost)

        fetch('http://localhost:8080/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objNewPost)
        })
        .then(response => {
          location.reload()
        })
        .catch(error => {
          console.error('GET POSTS ERROR: ', error)
        })
    } else {
        alert('Algunos datos estan vacios')
    }

  })
    
  


//----------------------Método Get con Fetch traer todos los posts---------------------------------
fetch('http://localhost:8080/posts', {
  method: 'GET',
})
  .then(response => response.json())

  .then(json => {
    const posts = json.posts.reverse()
   
    let cardPost = ''

    posts.forEach(post => {

      cardPost += `
      <div class="row g-0">
        <div class="col-12 col-md-12 d-flex">
          <div class="card-body">
            <div class="col-7 d-flex justify-content-start">
              <img src="${post.imgPerfil}" class= "user_img card-img-top rounded-circle border 0" alt="">
              <h4 class="textOne">${post.author}</h4>
            </div>
              <h5 class="card-title"><a href="interiorPost.html?idpost=${post.post}" class="text-decoration-none fs-3 link-dark" >${post.title}</a></h5>
                <a href="http://127.0.0.1:5503/interiorPost.html"></a>
                <p class="card-text d-none d-md-block colorAbs">${post.abstract}</p>
              <div class="d-flex ">
                  <p class="card-text"><small class="text-muted">${post.readingTime} ${'min read'} ${post.dateCreated}</small></p>
                    <div class="col d-flex  justify-content-end">
                      <svg width="10" height="10" viewBox="0 0 25 25" fill="none" class="oz"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                      <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path></svg>
                      
                      <a href='editPost.html?idpost=${post._id}'><i class="fas fa-pencil-alt" aria-hidden="true"></i></a>
                    </div>
                </div>
          </div>
            <div class="col-5 col-md-3 d-flex justify-content-center">
              <img src="${post.formFile}" class="img-fluid rounded-start img-card-E" alt="..." witdh="100%">
            </div>
        </div>
      </div>
      `
    });
    document.querySelector('#listPost').innerHTML = cardPost
  })

  .catch(error => {
    console.error('GET POSTS ERROR: ', error)
  })
      
})
