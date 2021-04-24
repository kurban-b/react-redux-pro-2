export function getData () {
    return function (dispather) {
        dispather({
            type: 'START-LOADING'
        })
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/photos/?_limit=50')
                .then(responce => responce.json())
                .then((json)=>{
                    dispather({
                        type: 'getUsers',
                        payload: json
                    })
                })
        },2000) //таймоут добавил чтоб видеть прелоадер - для демонстрации

    }
}

export function deleteItem (id) {
    return function (dispather) {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
            method: 'DELETE'})
            .then((responce) => responce.json())
            .then(() => {
                dispather({
                    type: 'DELETE',
                    payload: id
            })
        })
    }
}