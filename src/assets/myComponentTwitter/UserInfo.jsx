import UserName from "./UserName"
import Button from "./Button"
import UserBio from "./UserBio"
import ProfilPicture from "./ProfilPicture"
// import React, { useState } from 'react';



export default function UserInfo() {

    // function onclickButton() {
    //     const [clicked, setClicked] = useState(false);
    
    //     const handleClick = () => {
    //         setClicked(!clicked);
    //     }

        // return (
        //     <button className={clicked ? 'clicked' : ''} onClick={handleClick}>
        //       Cliquer pour changer la couleur de la bordure
        //     </button>
        //   );
        // }
    // };

        return (
            <>

                <div style={{ color: 'white', border: 'solid 0.1px #333639', width: '565px' }}>
                    <ProfilPicture src="project's pictures/Profile-Photo.png" style={{ width: '130px', position: 'relative', marginTop: '-70px', marginLeft: '20px' }} />
                    <Button style={{ width: '150px', height: '40px', background: 'black', borderRadius: 50, border: 'solid 0.1px hsl(240, 8%, 83%)', color: 'white', position: 'relative', marginLeft: '250px', marginTop: '10px' }}>Edit profile</Button>
                    <UserName name='CNN' style={{ marginLeft: '10px' }} />
                    <UserBio bio='lorem ipsum This will render a read-only field. If the field should be mutable use' localisation='lushi' link='www.cnn.com' calendar='À rejoint twitter en juin 2012' following='95 ' followers='12,3k ' ></UserBio>

                    <div style={{ display: 'flex', justifyContent: 'space-between', height: '60px' }}>
                        <Button style={{ fontSize: '18px', color: 'white', border: 'none', background: 'none' }}  >Posts</Button>
                        <Button style={{ fontSize: '18px', color: 'white', border: 'none', background: 'none' }}>Réponses</Button>
                        <Button style={{ fontSize: '18px', color: 'white', border: 'none', background: 'none' }}>Tweets manquants</Button>
                        <Button style={{ fontSize: '18px', color: 'white', border: 'none', background: 'none' }}>Médias</Button>
                        <Button style={{ fontSize: '18px', color: 'white', border: 'none', background: 'none' }}>J'aime</Button>
                    </div>

                </div>
            </>
        )
    }