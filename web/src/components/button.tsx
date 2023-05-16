interface ButtonProps {
  title: string
}

export default function Button(props: ButtonProps) {
  return (
    <button className="text-clip bg-black text-red-500">{props.title}</button>
  )
}
