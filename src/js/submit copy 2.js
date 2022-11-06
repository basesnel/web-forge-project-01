function serializeForm(formNode) {
  const { elements } = formNode;

  const data = new FormData();

  Array.from(elements)
    .filter(item => !!item.name)
    .forEach(element => {
      const { name, type } = element;
      const value = type === 'checkbox' ? element.checked : element.value;

      data.append(name, value);
    });

  console.log(Array.from(data.entries()));
  return data;
}

// async function sendData(data) {
// return await fetch('/api/apply/', {
// method: 'POST',
// headers: { 'Content-Type': 'multipart/form-data' },
// body: data,
// });
// }

// function toggleLoader() {
// const loader = document.getElementById('loader');
// loader.classList.toggle('hidden');
// }

var form = document.querySelector('js-speaker-form');

async function handleFormSubmit(event) {
  // Просим форму не отправлять данные самостоятельно
  event.preventDefault();
  const data = serializeForm(event.target);

  // toggleLoader();
  // const response = await sendData(data);
  // toggleLoader();
}

const applicantForm = document.querySelector('.js-speaker-form');
applicantForm.addEventListener('submit', handleFormSubmit);

// // (() => {
// var form = document.querySelector('.js-speaker-form');
// var validateBtn = form.querySelector('.orderform__btn-submit');
// // var yourname = form.querySelector('.name-field');
// // var tel = form.querySelector('.tel-field');
// // var email = form.querySelector('.email-field');
// var fields = form.querySelectorAll('.orderform__input');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log('clicked on validate');

//   for (var i = 0; i < fields.length; i++) {
//     if (!fields[i].value) {
//       console.log('field is blank', fields[i]);
//     }
//   }
//   // console.log('name: ', yourname.value);
//   // console.log('tel: ', tel.value);
//   // console.log('email: ', email.value);
// });

// // let fields = document
// //   .querySelector('.js-speaker-form')
// //   .querySelectorAll('.orderform__input');

// // document.querySelector('.js-speaker-form').addEventListener('submit', e => {
// //   e.preventDefault();

// //   for (var i = 0; i < fields.length; i++) {
// //     if (!fields[i].value) {
// //       console.log('field is blank', fields[i]);
// //     }
// //   }

// //   new FormData(e.currentTarget).forEach((value, name) =>
// //     console.log(`${name}: ${value}`)
// //   );

// //   e.currentTarget.reset();
// // });
// // })();
