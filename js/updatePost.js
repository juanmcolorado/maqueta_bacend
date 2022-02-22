//////////Obtener un posts con jq GET

$(document).ready(function(){
    const idPost = location.search.slice(8)
//----------------------Traer el post que seleccioné con el id--------------------------
    $.ajax({
        method: 'GET',
        url: `https://medium-7cfcc-default-rtdb.firebaseio.com/${idPost}.json`
    }).done((data) => {
        document.querySelector('#title').value = data.title,
        document.querySelector('#imgPerfil').value = data.imgPerfil,
        document.querySelector('#autor').value = data.author,
        document.querySelector('#readingTime').value = data.readingTime,
        document.querySelector('#formFile').value = data.formFile,
        document.querySelector('#abstract').value = data.abstract,
        document.querySelector("#inputGroupSelect01").value = data.category,
        document.querySelector('#postContent').value = data.postContent
    }
    ).fail((err) => {
        console.log(err)
    })
//----------------------Actualizar el post----------------------------------
    const updateUserFetch =  (objPost, idPost) => {
        $.ajax({
            method:'PATCH', 
            url:`https://medium-7cfcc-default-rtdb.firebaseio.com/${idPost}.json`,
            data: JSON.stringify(
                objPost
            )
        }).done(function(response){
            console.log(response)
            // do something
            $('#alert__response').css('display','block')
            location.pathname='/index.html'
        }) .fail( function (err) {
            console.log(err)
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
        $.ajax({
            method:'DELETE',
            url: `https://medium-7cfcc-default-rtdb.firebaseio.com/${idPost}.json`
        }).done(function(response){
            console.log(response)
            // do something
            location.pathname='/index.html'
        }) .fail( function (err) {
            console.log(err)
        })
    }

    let btnDeletePost = document.querySelector('#deletePost')
    btnDeletePost.addEventListener('click', () => {
        console.log('eliminando post')
        deletePost(idPost)
        console.log('post eliminado')

    })

})
