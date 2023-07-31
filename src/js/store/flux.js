const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			users: [
			] 
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			//function to get all the initial contacts from the API
			getInicialContacts: () => {
				//get the store
				const store = getStore();

				fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => {
					setStore({ users: response });
					})
				.catch(error => console.error(error));
				
			},

			//function to add a new contact
			addContact: (newContact) => {
				//get the store
				const store = getStore();
				const contact = store.users.concat(newContact);
			
				//a fetch to update the contact with the new contact
				fetch('https://jsonplaceholder.typicode.com/users', {
					method: 'POST',
					body: JSON.stringify(contact),
					headers:{
						'Content-Type': 'application/json'
					}
				})
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => console.log('Success:', response))
				.catch(error => console.error(error));

				//reset the global store
				setStore({ users: contact });
				
			},

			//function that allows to update contacts
			update: (index, newContact) => {
				const store = getStore();
			console.log(index, newContact)
				const contact = store.users.map((c, i) => {
					if (index == i) {
						c = newContact
					}
					return c
				});

			console.log("test", contact)
				setStore({ users: contact });
			},

			//function that allows to delete an item with to determined index
			delete: (index) => {
				//get the store
				const store = getStore();

				const contact = store.users.filter((c, i) => {
					return index !== i
				});
				console.log(index)

				fetch(`https://jsonplaceholder.typicode.com/users/${index}`, {
					method: 'DELETE',
					headers:{
						'Content-Type': 'application/json'
					}
				})
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => console.log('Success:', response))
				.catch(error => console.error(error));

				//reset the global store
				setStore({ users: contact });
			}
		}
	};
};

export default getState;
