import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourites, removeHeart } from '../action/favourites';
import { useEffect, useState } from 'react';

export default function Job({ data }) {

  const favouritesList = useSelector(state => state.favourites);

  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const isAlreadyFavourite = favouritesList.some(favourite => favourite.company_name === data.company_name);

    setSelected(isAlreadyFavourite);
  }, [favouritesList, data.company_name]);

  const toggleFavourites = () => {
    if (selected) {
      dispatch(removeHeart(data))
    } else {
      dispatch(addFavourites(data))
    }
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Link onClick={toggleFavourites}>
          {selected ? (
            <i className="bi bi-heart-fill mx-2 text-danger"></i>
          ) : (
            <i className="bi bi-heart mx-2 text-danger"></i>
          )}
        </Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}
