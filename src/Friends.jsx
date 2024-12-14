import React, {useEffect,useState} from 'react'
import FriendCard from './FriendCard'

const Friends = () => {
  const [users, setUsers] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const getData = async() => {
    const response = await fetch("https://my-json-server.typicode.com/SanginJeong/pbl-project/data");
    const data = await response.json();
    console.log(data);
    
    const sortedList = data?.sort((a,b)=>b.frequency - a.frequency);
    console.log(sortedList);
    
    if(isShow){
      setUsers(sortedList);
      return
    }
    if(!isShow){
      const filterdList = sortedList.slice(0,5);
      setUsers(filterdList);
      return
    }
  }

  useEffect(() => {
    getData();
  }, [isShow]);


  return (
    <>
      <div className='friends-area'>
        {users?.map((user)=>(
            <FriendCard user={user}/>
          ))
        }
      </div>
      <div className='more'>
        <button className='more-btn' onClick={()=>{setIsShow(!isShow)}}>{isShow ? "접기" : "펼치기"}</button>
      </div>
    </>
  )
}

export default Friends