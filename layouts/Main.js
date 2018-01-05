import Header from '../components/Header';
import Meta from '../components/Meta';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid black'
}

export default (props) => (
  <div style={layoutStyle}>
    <Meta />
    <Header />
    {props.children}
  </div>
)
