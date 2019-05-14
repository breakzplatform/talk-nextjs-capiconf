import Header from '../components/Header'

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <footer>Copyleft - Joselito</footer>
    <style jsx global>
    {`
      body {
        padding: 2em;
        margin: auto;
        max-width: 38em;
        background-color: #f4f4f4;
        color: #333;
        font-family: sans-serif;
      }
    `}
    </style>
  </div>
)

export default Layout