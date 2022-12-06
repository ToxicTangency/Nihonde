const dateFormat = date => {
  date = new Date(date);
  let dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let postDate = date.toLocaleDateString('ru-RU', dateOptions);
  return postDate;
};

export default dateFormat;
