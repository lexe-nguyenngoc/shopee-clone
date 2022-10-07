export const price = (value) =>
  value
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'VND',
    })
    .replace(/,/g, '.');
