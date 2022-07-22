function randomDay() {
  return Math.floor(Math.random() * 26 + 1);
}

function randomMonth() {
  return Math.floor(Math.random() * 12 + 1);
}

function randomYear() {
  return Math.floor(Math.random() * (2000 - 1930 + 1) + 1930);
}

function randomHouseNumber() {
  return Math.floor(Math.random() * (500 - 2 + 1) + 2);
}

function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var data = {
  firstname: 'Max',
  lastname: 'Pecu',
  day: randomDay(),
  month: randomMonth(),
  year: randomYear(),
  postcode: 80636,
  cityname: 'München',
  street: 'Erika-Mann-Str.',
  hausnummer: randomHouseNumber(),
};

function fillField(field, value) {
  if (field) {
    field.dispatchEvent(new Event('focusin', { bubbles: true }));
    field.value = value;
    field.dispatchEvent(new Event('change', { bubbles: true }));
    field.dispatchEvent(new Event('focusout', { bubbles: true }));
  }
}

function fillForm() {
  document.querySelector("[data-id='button-male']").dispatchEvent(new Event('click', { bubbles: true }));

  fillField(document.querySelector('input[data-id="text-field-firstname"]'), data.firstname);
  fillField(document.querySelector('input[data-id="text-field-lastname"]'), data.lastname);
  fillField(document.querySelector('input[data-id="text-field-day"]'), data.day);
  fillField(document.querySelector('input[data-id="text-field-month"]'), data.month);
  fillField(document.querySelector('input[data-id="text-field-year"]'), data.year);
  fillField(document.querySelector('input[data-id="text-field-postcode"]'), data.postcode);
  fillField(document.querySelector('input[data-id="text-field-cityname"]'), data.cityname);
  fillField(document.querySelector('input[data-id="text-field-street"]'), data.street);
  fillField(document.querySelector('input[data-id="text-field-hausnummer"]'), data.hausnummer);
}

fillForm();
