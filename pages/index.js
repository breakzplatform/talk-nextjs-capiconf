import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const RoomLink = props => (
  <li>
    <Link as={`/room/${props.id}`} href={`/rooms?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>TibiaConf</h1>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mé, boa gentis num é. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
    <h2>Salas</h2>
    <ul>
      <RoomLink id="auditorio" title="Auditório" />
      <RoomLink id="foo" title="Foo" />
      <RoomLink id="bar" title="Bar" />
    </ul>
    <h2>Extras</h2>
    <ul>
      <li><a href="https://twitter.com/breakzplatform">Twitter</a></li>
      <li><a href="https://bit.ly/capiconf-feedback">Feedback Capiconf</a></li>
    </ul>
    <h2>Pessoas</h2>
    {props.persons.map((person, i) => (
      <div>
        <img src={person.picture.large} />
        <h2>{person.name.first}</h2>
        <p>{person.email}</p>
      </div>
    ))}
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://randomuser.me/api/?results=5');
  const data = await res.json();

  return {
    persons: data.results
  }
}

export default Index