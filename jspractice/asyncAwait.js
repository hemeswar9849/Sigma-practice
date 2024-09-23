const getWeatherData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('☀️');
    }, 2000);
  });
};

getWeatherData()
  .then(resolved => {
    console.log(resolved);
  });

const aFunction = async () => {
  const getData =  await getWeatherData();
  console.log(getData);
};

aFunction();
