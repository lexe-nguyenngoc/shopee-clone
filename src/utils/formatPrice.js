const formatPrice = (price) => {
  return price.toLocaleString('en-US', {
    currency: 'USD',
  });
};

export default formatPrice;
