const remoteURL = "http://localhost:5002"

export default Object.create(null, {
   get: {
      value: function (id) {
         return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
      }
   },
   getAll: {
      value: function () {
         return fetch(`${remoteURL}/users`).then(e => e.json())
      }
   },
   postUser: {
      value: function (newUser) {
         return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
         }).then(e => e.json())
      }
   },
   update: {
      value: function (user, id) {
         return fetch(`${remoteURL}/users/${id}`, {
            method: "Put",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         }).then(e => e.json())
      }
   }
})
