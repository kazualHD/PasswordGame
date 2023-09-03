import axios from 'axios';

// URL для запроса данных
const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

axios.get(apiUrl)
  .then((response) => {
    const { data } = response;

    const Rate = data.Valute.USD;
    const RateValue = Rate.Value;

    console.log(JSON.stringify(RateValue.toFixed()));
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
