const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// перебираем масив картинок и при помощи деструктаризации выводим ключи .
const list = images.map(({ url, alt })=> {
  return `<li> <img src ="${url}" alt="${alt}" width="300" height="200"> </li>`;
// возвращаем созданную li в которую вкладываем картинки с ключами из масива.
});
// находим класс галлерея и добавляем ему за один раз все картинки и разделяем масив построчно.
document
  .querySelector(".gallery")
  .insertAdjacentHTML("beforeend", list.join(""));