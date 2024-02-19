


export default function Heading({children,as,ifCenter}) {

const Tag = as || "h2"

  return (
    <Tag className={`text-primary font-bold text-2xl mt-8 mb-4 ${ifCenter ? "text-center" : ""}`}>{children}</Tag>
  )
}
