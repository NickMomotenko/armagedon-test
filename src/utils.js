export const getDate = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day <= 9) {
    day = `0${day}`;
  }

  if (month <= 9) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
};

export const dateFormat = (date) => {
  let months = {
    Январь: "01",
    Февраль: "02",
    Март: "03",
    Апрель: "04",
    Май: "05",
    Июнь: "06",
    Июль: "07",
    Август: "08",
    Сентябрь: "09",
    Октябрь: "10",
    Ноябрь: "11",
    Декабрь: "12",
  };

  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);

  let entries = Object.entries(months);

  let monthText = "";

  entries.forEach((arr) => {
    if (arr[1] === month) {
      monthText = `${arr[0]}`;
    }
  });

  return `${day} ${monthText} ${year}`;
};

export const generateSizeForIcon = (size) => {
  const small = 85;
  const medium = 300;
  const large = 850;

  if (size < small) {
    return {
      size: `71px`,
    };
  } else if (size > small && size < medium) {
    return {
      size: `186px`,
      top: `-79px`,
    };
  } else if (size > medium && size < large) {
    return {
      size: `600px`,
      top: `-488px`,
    };
  }
  // return { width, height };
};
