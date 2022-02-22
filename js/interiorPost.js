$(()=>{
    let idPost = location.search.slice(8)
    $.ajax({
        method:'GET',
        url: `https://medium-7cfcc-default-rtdb.firebaseio.com/${idPost}.json`
    }).done((resp)=>{
        console.log(resp)
        let temp1 = ''
        let imgPerfil = resp.imgPerfil                
        temp1 += `
        <div>
        <img src="${imgPerfil}" class="rounded-circle me-3" alt="..."><span class="authorPost me-3"></span><span class="datePost me-3"></span><span class="timePost"></span>
        </div>
        `
        let temp = ''
        let formFile = resp.formFile                
        temp += `
        <div>
        <img src="${formFile}" class="card-image rounded mx-auto d-block" alt="..." width="100%" height="270rem">
        </div>
        `
        $('#avatarPost').html(temp1)
        $('#imagePost').html(temp)
        $('.titlePost').text(resp.title)
        $('.authorPost').text(resp.author)
        $('.timePost').text(resp.readingTime + " min. read")
        $('.datePost').text(resp.dateCreated)
        $('.textPost').text(resp.postContent)
    })

})