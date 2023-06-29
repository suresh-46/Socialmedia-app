// import React, { useEffect, useRef, useState } from 'react'
// import './Chat.css'
// import Home from '../../img/home.png'
// import Noti from '../../img/noti.png'
// import Comment from '../../img/comment.png'
// import LogoSearch from './../../components/LogoSearch/LogoSearch';
// import { useSelector } from 'react-redux';
// import { userChats } from '../../api/ChatRequests.js';
// import Conversation from '../../components/Conversation/Conversation';
// import { Link } from 'react-router-dom';
// import { UilSetting } from '@iconscout/react-unicons';
// import ChatBox from '../../components/ChatBox/ChatBox'
// import {io} from 'socket.io-client'


// const Chat = () => {
//     const {user} = useSelector((state)=>state.authReducer.authData);
//     const [chats, setChats] = useState([])
//     const [currentChat, setCurrentChat] = useState(null)
//     const socket = useRef()
//     const [onlineUsers, setOnlineUsers] = ([])
//     const [sendMessage, setSendMessage] = useState(null)
//     const [receiveMessage, setReceiveMessage] = useState(null)
    
// // send message to socket server
//     useEffect(() => {
//       if(sendMessage !== null){
//         socket.current.emit('send-message', sendMessage)
//       }
//     }, [sendMessage])



//     useEffect(()=> {
//         socket.current = io('http://localhost:8800');
//         socket.current.emit("new-user-add", user._id)
//         socket.current.on('get-users', (users)=> {
//             setOnlineUsers(users);
//         })
//     }, [user])

// // receive message from socket server
//     useEffect(()=> {
//         socket.current.on("receive-message", (data) => {
//          setReceiveMessage(data)
//         })
//      }, [])

//     useEffect(()=>{
//         const getChats = async()=> {
//             try {
//                 const {data} = await userChats(user._id)
//                 setChats(data)
//                 console.log(data)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getChats()
//     },[user])

//     const checkOnlineStatus = (chat) => {
//         const chatMember = chat.members.find((member)=>member !== user._id)
//         const online = onlineUsers.find((user)=>user.userId === chatMember)
//         return online? true : false
//     }

//   return (
//     <div className="Chat">
//         {/* Left Side */}
//         <div className="Left-side-chat">
//             <LogoSearch />
//             <div className="Chat-container">
                
//             <h2>Chats</h2>
//             <div className="Chat-list">
//                {chats.map((chat)=> (
//                 <div onClick={()=> setCurrentChat(chat)}>
//                     <Conversation data = {chat} currentUser = {user._id} online={checkOnlineStatus(chat)}/>
//                 </div>
//                ))}
//             </div>
//             </div>
//         </div>
//         {/* Right side */}
//         <div className="Right-side-chat">
//           <div style={{width:'70rem', alignSelf:'flex-end'}}>
//             <div className="navIcons">
//                 <Link to = "../home">
//                     <img src={Home} alt="" />
//                 </Link>
//                 <UilSetting/>
//                 <img src={Noti} alt="" />
//                 <Link to = "../Chat">
//                     <img src={Comment} alt="" />
//                 </Link>
//             </div>

//             {/* chat body */}
//             <ChatBox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage}
//             receiveMessage={receiveMessage}/>
//           </div>  
//         </div>
//     </div> 
//   )
// }

// export default Chat
 



import React, { useRef, useState } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from '../../components/Conversation/Conversation'
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../../components/NavIcons/NavIcons";
import "./Chat.css";
import { useEffect } from "react";
import { userChats } from "../../api/ChatRequests";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

const Chat = () => {
  const dispatch = useDispatch();
  const socket = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);


  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUser={user._id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;