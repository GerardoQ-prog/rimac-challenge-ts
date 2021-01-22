

const url = 'https://randomuser.me/api'

const options = {
    headers:{
        'Content-Type':'application/json'
    }
}

export const getUser = async() => {
    try{
        return await fetch(url, {
            method:'GET'
        }).then(response => response.json())
        
    }catch(err){
        console.log(err);
    }
}