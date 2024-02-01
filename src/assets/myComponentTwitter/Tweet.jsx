import UserName from "./UserName"
import Like from "./Like"
import { FaRegHeart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { BiRepost } from "react-icons/bi";
// import StateRepost from "./StateRepost";
import { useState } from "react";



export default function Tweet({ tweet }) {

    const [state, setState] = useState(false)
    const [nombre, setNombre] = useState(0)
    const [repost, setRepost] = useState(false)
    const [repostnomber, setRepostnomber] = useState(0)

   function clickRepost(){
    setRepost(!repost)
    setRepostnomber(repostnomber + 1)


   }


  


   const RepostIcons = repost ? BiRepost : BiRepost


   
   
    function handleClick() {

        setState(!state)
        setNombre(nombre + 1)

    }

    const LikeIcons = state ? IoHeart : FaRegHeart



    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: '-48px', marginTop: '1px', marginRight: '10px', paddingLeft: '45px', width: '555px' }}>

                <div style={{ marginLeft: '5px', marginTop: '10px', width: '60%' }}>
                    <UserName name={tweet.name} date={tweet.date} style={{ display: "flex", gap: '6px', flexDirection: 'row' }} />
                </div>

                <div style={{ marginLeft: '8px', width: '98%' }}><p>{tweet.text}</p></div>
                <img src={tweet.src} alt="" style={{ width: '98%' }} />
                <div style={{ display: 'flex', gap: '60px', height: '25px', marginTop: '10px', }}>
                    <div style={{ display: 'flex', flexDirection: 'row', fontSize: '15px', gap: '15px' }}>
                        <Like src="project's pictures/Reply.svg"></Like>
                        <span>243</span>
                    </div>
                    <div onClick={clickRepost} style={{ display: 'flex', flexDirection: 'row', fontSize: '15px', gap: '15px' }}>
                 
                    {/* <RepostIcons /> */}
                    <RepostIcons color={repost ? "#00ba7c" : ""} size={"25px"}/>
                        <span>{repostnomber}</span>
                    </div>
                    <div onClick={handleClick}  style={{ display: 'flex', flexDirection: 'row', fontSize: '15px', gap: '15px' }}>
                        <LikeIcons color={state ? 'white' : ''}/>
                        <span> {nombre} </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', fontSize: '15px', gap: '15px' }}>
                        <Like src="project's pictures/Share.svg"></Like>
                        <span>2k</span>
                    </div>
                </div>
            </div>
        </>
    )
}