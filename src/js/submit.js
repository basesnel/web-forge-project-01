(() => {
  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    e.currentTarget.reset();
  });
})();

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
