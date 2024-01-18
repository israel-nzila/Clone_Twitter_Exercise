export default function Squid(props) {

    return (
        <>
            <div style={{ color: '#6E767D', display: 'flex', justifyContent: 'space-between', paddingRight: '30px', marginBottom: '-30px' }}>
                <p >{props.p}</p>
                <span>...</span>
            </div>

            <div style={{marginBottom: '-15px'}}>
                <h2>{props.h2}</h2>
            </div>
            <p style={{ color: '#6E767D' }}>{props.p2}</p>

        </>
    )
}