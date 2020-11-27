import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ data }) => {
  return (
    <>
      <div>
        <Card title={data.title}>
          <CardImg top width="100%" src={data.image} />
          <CardBody>
            <CardTitle tag="h5">{data.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {data.offer && `${data.offers}% Offer`}
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    offer: PropTypes.bool.isRequired || null,
    offers: PropTypes.number.isRequired || null,
  }).isRequired,
};

export default ProductCard;
