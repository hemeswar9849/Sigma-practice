const fetchTheData = () => {
  return new Promise((resolve, reject) => {
    const ipAddress =  fetch('http://api.ipstack.com/134.201.250.155?access_key=763bde4da697e637f6d283d64951ae5d');
    console.log(ipAddress)
    ipAddress
    .then(data => {
      resolve(data.json());
    })
    .catch(error =>{
      reject(error);
    })
  });
};

fetchTheData().then(resolved => {
  console.log(resolved.country_name);
})
.catch(error => {
  console.log(error);
});
