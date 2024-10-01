const main = async (callback) => {
  await fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      callback(data.message);
    })
    .catch(error => {
      console.log(error);
    });
};

const createAImage = (data) => {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  body.appendChild(img);
};

const source = (data) => {
  const img = document.querySelector('img');
  img.src = data;
}

const createAButton = () => {
  const body = document.querySelector('body');
  const aButton = document.createElement('button');
  aButton.innerText = 'click me';
  aButton.setAttribute('onclick', 'main(source)');
  body.appendChild(aButton);
};

createAImage()
createAButton();
// main(createAImage);