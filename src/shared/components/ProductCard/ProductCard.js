import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ data }) => {
  return (
    <>
      <div>
        <Card>
          <CardImg top width="100%" src={data.image} title={data.title} />
          <CardBody>
            <CardTitle tag="h5" title={data.title}>
              {data.title}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {data.offer && `${data.offers}% Offer`}
            </CardSubtitle>
            {!data.offer && data.description ? (
              <CardSubtitle
                tag="p"
                className="mb-2 card-description"
                title={data.description}
              >
                {`${data.description}`}
              </CardSubtitle>
            ) : null}
            {!data.offer && data.price ? (
              <CardSubtitle
                tag="h6"
                className="mb-2 mg-top-10"
                title={data.title}
              >
                {`${data.price} ₹`}
              </CardSubtitle>
            ) : null}
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
    offer: PropTypes.bool,
    offers: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
