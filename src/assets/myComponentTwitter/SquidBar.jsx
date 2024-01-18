import Squid from "./Squid";



export default function SquidBar() {

    const element = {

        littleSquid: 'Trending in Turkey',
        squidTitle: '#SQUID',
        secondLittleSquid: '2,066 Tweets'

    }

    return (

        <>
            <div style={{ background: '#0F1419', width: '450px', height: '670px', position: 'relative', marginLeft: '70rem', borderRadius: '20px', marginTop: '15px' }}>

                <div style={{ paddingLeft: '20px', paddingTop: '4px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '35px' }}>
                        <h2>Trends for you</h2>
                        <img src="project's pictures/Settings.svg" alt="" />
                    </div>

                    <br />
                    <Squid p={element.littleSquid} h2={element.squidTitle} p2={element.secondLittleSquid} />
                    <br />
                    <Squid p={element.littleSquid} h2={element.squidTitle} p2={element.secondLittleSquid} />
                    <br />
                    <Squid p={element.littleSquid} h2={element.squidTitle} p2={element.secondLittleSquid} />
                    <br />
                    <Squid p={element.littleSquid} h2={element.squidTitle} p2={element.secondLittleSquid} />
                    <br />
                    <h3 style={{ color: "#1d84cb" }}>Show more </h3>
                </div>
            </div>
        </>
    )
}