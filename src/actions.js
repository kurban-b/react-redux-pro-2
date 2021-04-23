export function getData () {
    return function (dispather) {
        dispather({
            type: 'START-LOADING'
        })
        fetch('https://reqres.in/api/users/')
            .then(responce => responce.json())
            .then((json)=>{
                dispather({
                    type: 'getUsers',
                    payload: json
                })
            })
    }
}

export function deleteUser (id) {
    return function (dispather) {
        fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
        }).then(() => {
            dispather({
                type: 'DELETE',
                payload: id
            })
        })
    }
}