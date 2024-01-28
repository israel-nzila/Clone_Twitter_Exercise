import ProfilPicture from "../myComponentTwitter/ProfilPicture"
import Tweet from "../myComponentTwitter/Tweet"
import PostZone from "../myComponentTwitter/PostZone"

const tweet = {
    name: 'CNN',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont like.',
    likes: '22',
    comments: '345',
    date: '  7m',
    src: "project's pictures/Img.png",
}


export default function HomePage() {

    return (

        <>
            <div style={{ }}>

                <PostZone />

                <div style={{ color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
                    <div style={{ display: 'flex', }}>
                        <ProfilPicture src="project's pictures/Profile-Photo(2).png" style={{width: '60px', height: '60px', marginTop: '5px'}} />
                        <Tweet tweet={tweet} />
                    </div>
                </div>

                <div style={{ color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
                    <div style={{ display: 'flex', }}>
                        <ProfilPicture src="project's pictures/Profile-Photo(2).png" style={{width: '60px', height: '60px', marginTop: '5px'}} />
                        <Tweet tweet={tweet} />
                    </div>
                </div>

            </div>

        </>
    )

};