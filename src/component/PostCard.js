import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

function PostCard({el}) {
    const isdark=useSelector(state=>state.reducer.isDark)
  return (
    <Card style={{ width: '18rem' }} data-bs-theme={isdark?"light":"dark"}bg={isdark?"light":"dark"}>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostCard;