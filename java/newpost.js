/*
$(()=>{
    console.log('ya')
    
        const createUserJquery = (objPost) =>{
            $.ajax({
                method:'POST',
                url:'https://medium-java-default-rtdb.firebaseio.com/posts/.json',
                data: JSON.stringify(objPost)
            }).done((resp)=>{       
                $('#title').val('')
                $('#abstrac').val('')
                $('#author').val('')
                $('#date').val('')
                $('#timetoread').val('')
                $('#resume').val('')
                $('#post__id').text(resp.name)
                $('#alert__response').removeClass('d-none')
            })
        }
    
        const createUserJqueryPost = (objPost) =>{
            $.post('https://medium-java-default-rtdb.firebaseio.com/posts/.json',JSON.stringify(objPost), (resp)=> {
    
                $('#title').val('')
                $('#abstrac').val('')
                $('#author').val('')
                $('#date').val('')
                $('#timetoread').val('')
                $('#resume').val('')
                $('#post__id').text(resp.name)
                $('#alert__response').removeClass('d-none') 
            })
        }
    
            $('#send__post').click(()=>{
                let title = document.querySelector('#title').value
                let abstrac = document.querySelector('#abstrac').value
                let author = document.querySelector('#author').value
                let date = document.querySelector('#date').value
                let timetoread = document.querySelector('#timetoread').value
                let resume = document.querySelector('#resume').value
                if(
                    title !== '' &&
                    abstrac !== '' &&
                    author !== '' &&
                    date !== '' &&  
                    timetoread !== '' &&
                    resume !== ''
                ){
    
                    let objNewPost = {
                        title: title,
                        abstrac: abstrac,
                        author: author,
                        date: date,
                        timetoread: timetoread,
                        resume: resume
                    }
                
                    // createUser(objNewPost)
                    //createUserFetch(objNewPost)
                    //createUserJquery(objNewPost)
                    createUserJqueryPost(objNewPost)
    
                } else {
                    alert('Algunos datos estan vacios')
                }
            })
    
    
    })
    */
