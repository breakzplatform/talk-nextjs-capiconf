import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>Sobre a TibiaConf</a>
    </Link>
    <style jsx>
    {`
      a {
        margin-right: .5em;
        color: tomato;
      }
    `}
    </style>
  </div>
)

export default Header