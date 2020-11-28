export default {
  sort: (data, key, order) => {
    return order === 'asc'
      ? data.sort((a, b) => a[key] - b[key])
      : data.sort((a, b) => b[key] - a[key]);
  },
};
