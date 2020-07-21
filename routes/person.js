const express = require("express");
const router = express.Router();
const Person = require("../models/Person");
const { check, validationResult } = require("express-validator");

router.get("/all", (req, res) => {
  //res.send("Persons get route");
  Person.find()
    .then((persons) => res.json(persons))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send("Server Error");
    });
});

router.post(
  "/",
  [
    check("firstname", "First Name is Required").not().isEmpty(),
    check("lastname", "Last Name is Required").not().isEmpty(),
  ],
  (req, res) => {
    //res.send("Persons get route");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname } = req.body;

    let person = new Person({
      firstname,
      lastname,
    });

    person
      .save()
      .then((per) => res.json(per))
      .catch((err) => {
        console.log(err.message);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  }
);

router.put("/:id", async (req, res) => {
  const { firstname, lastname } = req.body;
  let person = {};
  if (firstname) person.firstname = firstname;
  if (lastname) person.lastname = lastname;

  try {
    let personId = await Person.findById(req.params.id);
    if (!personId) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    let updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      { $set: person },
      { new: true }
    );
    res.json(updatedPerson);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", (req, res) => {
  Person.findById(req.params.id)
    .then(() => {
      Person.findByIdAndRemove(req.params.id)
        .then(() => res.json({ msg: "Successfully removed" }))
        .catch((err) => {
          console.log("Remove failed");
          res.status(400).json({ error: "Deletion Failed" });
        });
    })
    .catch((err) => res.json({ error: "Person not found" }));
});

module.exports = router;
