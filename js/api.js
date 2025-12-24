const getData = (onSuccess, onFail) => {
  fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to fetch data');
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail('Не удалось загрузить данные. Попробуйте обновить страницу');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://29.javascript.htmlacademy.pro/kekstagram/',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз.');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз.');
    });
};

export { getData, sendData };
