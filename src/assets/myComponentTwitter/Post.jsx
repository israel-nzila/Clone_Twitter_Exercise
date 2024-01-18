export default function Post(props) {

  return (
    <>
      <div style={{ paddingTop: '5px' }}><input type="text" className='inputPost' style={props.style} value={props.value} /></div>
    </>
  )
}

