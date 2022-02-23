//////////Obtener un posts con jq GET
const idPost = location.search.slice(8)
console.log(idPost)

$(document).ready(function(){
//----------------------Traer el post que seleccioné con el id--------------------------
    fetch(`http://localhost:8080/posts/${idPost}`, {
    method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
        const posts = json.posts

        document.querySelector('#title').value = posts.title,
        document.querySelector('#imgPerfil').value = posts.imgPerfil,
        document.querySelector('#autor').value = posts.author,
        document.querySelector('#readingTime').value = posts.readingTime,
        document.querySelector('#formFile').value = posts.formFile,
        document.querySelector('#abstract').value = posts.abstract,
        document.querySelector("#inputGroupSelect01").value = posts.category,
        document.querySelector('#postContent').value = posts.postContent
    })
    .catch(error => {
        console.error('GET POSTS ERROR: ', error)
      })
//----------------------Actualizar el post----------------------------------
const updateUserFetch =  (objPost, idPost) => {
    fetch(`http://localhost:8080/posts/${idPost}`, {
        method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objPost)
    })
    .then(response => {
        console.log(response)
        // do something
        $('#alert__response').css('display','block')
        location.pathname='/index.html'
    })
    .catch(error => {
        console.error('GET POSTS ERROR: ', error)
      })
}
//----------------------Función para el método Patch--------------------------
    let updatePost = document.querySelector('#updatePost')
    updatePost.addEventListener('click', () => {
        console.log(idPost)
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
        let postToUpdate = {
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
        updateUserFetch(postToUpdate, idPost )
        } else {
            alert('Algunos datos estan vacios')
        }
    })
//----------------------Método Delete---------------------------------
    const deletePost = (idPost) => {
        fetch(`http://localhost:8080/posts/${idPost}`, {
            method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(objPost)
        })
        .then(response => {
            console.log(response)
            // do something
            $('#alert__response').css('display','block')
            location.pathname='/index.html'
        })
        .catch(error => {
            console.error('GET POSTS ERROR: ', error)
          })
}
    let btnDeletePost = document.querySelector('#deletePost')
    btnDeletePost.addEventListener('click', () => {
        console.log('eliminando post')
        deletePost(idPost)
        console.log('post eliminado')

    })

})
