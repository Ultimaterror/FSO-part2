import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import { useEffect } from "react";
import personService from "./services/persons";
import Notifications from "./components/Notifications";

let initialNotif = {
  message: null,
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [searchFilter, setSearchFilter] = useState("");
  const [notif, setNotif] = useState(initialNotif);

  useEffect(() => {
    personService.getAll().then((res) => setPersons(res.data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    let foundPerson = persons.find((person) => person.name === newPerson.name);

    if (foundPerson) {
      if (confirm("Change number ?")) {
        personService
          .update(foundPerson.id, newPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== foundPerson.id ? person : response.data
              )
            );
            setNotif({ message: `Modified ${newPerson.name}`, success: true });
            setTimeout(() => {
              setNotif(initialNotif);
            }, 3000);
          })
          .catch((err) => {
            console.log(err);
            setNotif({ message: `Error Updating ${err.data.error}`, success: false });
            setTimeout(() => {
              setNotif(initialNotif);
            }, 3000);
          });
      }
    } else {
      personService
        .create(newPerson)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewPerson({ name: "", number: "" });
          setNotif({ message: `Added ${newPerson.name}`, success: true });
          setTimeout(() => {
            setNotif(initialNotif);
          }, 3000);
        })
        .catch((err) => {
          setNotif({ message: `Error Creating ${err.data.error}`, success: false });
          setTimeout(() => {
            setNotif(initialNotif);
          }, 3000);
        });
    }
  }

  function handleDelete(id) {
    if (confirm("Delete ?")) {
      personService
        .deleteOne(id)
        .then(() => {
          setPersons((curr) => curr.filter((item) => item.id !== id))
          setNotif({ message: `Delete Successful`, success: true });
          setTimeout(() => {
            setNotif(initialNotif);
          }, 3000);
        })
        .catch(() => {
          setNotif({ message: `Error Deleting`, success: false });
          setTimeout(() => {
            setNotif(initialNotif);
          }, 3000);
        });
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notifications notif={notif} />
      <Filter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <PersonForm
        handleSubmit={handleSubmit}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
      />
      <Persons
        persons={persons.filter((person) =>
          person.name.toLowerCase().includes(searchFilter.toLowerCase())
        )}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
