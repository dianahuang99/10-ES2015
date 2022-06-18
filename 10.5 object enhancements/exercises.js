function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

var instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      //why do we need the [] around verb but not around sayHi or sayBye
      return noise;
    },
  };
}
