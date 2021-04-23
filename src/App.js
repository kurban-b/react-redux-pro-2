import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getData} from "./actions";

function App() {
  const dispather = useDispatch();
  const users = useSelector(state => state.users);
  const load = useSelector(state => state.loading)

  useEffect(()=>{
    dispather(getData())
  },[])

  function handleDelete(id){
    dispather(deleteUser(id))
  }

  return (
    <div className="app">
      <h1>
        Users
      </h1>
      <div className="wrapper">
        {load ?
            <div className='loading-block'>
                <div className='title'>
                    Идет загрузка
                </div>
                <div className="spinner"></div>
            </div> :
            users.map((user)=>{
              return (
                  <div className='user' key={user.id}>
                    <div className='avatar'>
                      <img src={user.avatar} alt=""/>
                        <button onClick={()=>{
                            handleDelete(user.id)
                        }}>
                            &#10006;
                        </button>
                    </div>
                    <div className='name'>{user.first_name + ' ' + user.last_name}</div>
                    <div className='email'>{user.email}</div>
                  </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
