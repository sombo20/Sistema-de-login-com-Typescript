interface btnInfo{
  Text:string,
  onclick:void,
  Type:string
}

export default function Button({
  Text,
  onclick,
  Type="button"
}):btnInfo{
  return(
    <button
      type={Type}
      onClick={onclick}
     >{Text}</button>
  )
}