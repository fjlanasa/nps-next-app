import Page from '../layouts/Main';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

const ParkLink = (props) => (
  <Link as={`/park/${props.id}`} href={`/park?id=${props.id}`}>
    <a>{props.name}</a>
  </Link>
)

const Index = (props) => (
  <Page>
    <h1>National Parks!</h1>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      { props.parks.slice(0,40).map((park) => (
        <div key={park.id} style={{width: '25%', marginBottom: 40}}>
          <ParkLink id={park.parkCode} name={park.name} />
          <div style={{ height: '100%' }} >
            <img src={park.thumbnail} style={{height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center'}} />
          </div>
        </div>
      )) }
    </div>
  </Page>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://my-nps-api.herokuapp.com/')
  const data = await res.json()

  console.log(`Park data fetched. Count: ${data.length}`)

  return {
    parks: data
  }
}

export default Index;
