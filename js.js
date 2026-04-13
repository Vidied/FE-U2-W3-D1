const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
const locationInput = document.getElementById("location");

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age)
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

const users = [];

const form = document.getElementById("form-umani");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newUser = new User(
    firstNameInput.value,
    lastNameInput.value,
    ageInput.value,
    locationInput.value,
  );
  users.push(newUser);
  console.log("creato", newUser);

  if (users.length >= 2) {
    const ultimo = users[users.length - 1];
    const penultimo = users[users.length - 2];
    const risultato = ultimo.compareAge(penultimo);
    console.log(risultato);
  }

  form.reset();
});

// FORM ANIMALI

class pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherpet) {
    return this.ownerName.toLowerCase() === otherpet.ownerName.toLowerCase();
  }
}

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const pets = [];
const petList = document.getElementById("per-list");

const petForm = document.getElementById("form-pet");
petForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newpet = new pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value,
  );

  pets.push(newpet);

  console.log("creato", newpet);

  renderList();

  petForm.reset();
});
