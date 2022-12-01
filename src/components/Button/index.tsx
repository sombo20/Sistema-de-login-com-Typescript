interface BTNINFO{
  text:string,
  onclick:()=>void,
  type:string
}

export default function Button({
  text,
  onclick,
  type="button"
}):BTNINFO{
  return(
    <button
      type={type}
      onClick={onclick}
     >{text}</button>
  )
}
