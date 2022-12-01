interface INPUTINFO{
  type:string,
  placeholder:string,
  value:string,
  onchange:()=>void,
}

export default function Input(
   {
     type,
     placeholder,
     value,
     onchange
   }
  ):INPUTINFO{
  return(
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onchange}
   />
  )
}
