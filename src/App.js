import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteItem, getData} from "./actions";

function App() {
  const dispather = useDispatch();
  const database = useSelector(state => state.database);
  const load = useSelector(state => state.loading)

  useEffect(()=>{
    dispather(getData())
  },[])

  function handleDelete(id){
    dispather(deleteItem(id))
  }

  return (
    <div className="app">
      <h1>
        Фотокарточки
      </h1>
      <div className="wrapper">
        {load ?
            <div className='loading-block'>
                <div className='title'>
                    Идет загрузка
                </div>
                <div className="spinner"></div>
            </div> :
            database.map((data)=>{
              return (
                  <div className='card' key={data.id}>
                    <div className='img'>
                      <img src={data.url} alt=""/>
                        <button onClick={()=>{
                            handleDelete(data.id)
                        }}>
                            &#10006;
                        </button>
                    </div>
                    <div className='title'>{data.title}</div>
                  </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
