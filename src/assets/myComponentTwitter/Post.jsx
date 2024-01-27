export default function Post(props) {

  return (
    <>
      <div style={{ paddingTop: '5px' }}>
        <textarea type="text" className='inputPost' style={props.style} value={props.value} />
        </div>
    </>
  )
}

