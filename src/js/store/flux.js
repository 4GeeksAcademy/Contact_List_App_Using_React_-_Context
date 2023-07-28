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
				{
					name: "Mike Anamendolla",
					adress: "5842 Hillcrest Rd",
					phone: "(870) 288-4149",
					email: "mike.ana@example.com"
				}
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

				//reset the global store
				
				
			},
			create: (newContact) => {
				//get the store
				const store = getStore();
				const contact = store.users.concat(newContact);

				//reset the global store
				setStore({ users: contact });

			},
			update: () => {
				//get the store
				const store = getStore();


				//reset the global store
				//setStore({ users: contact });
			},
			delete: (index) => {
				//get the store
				const store = getStore();

				const contact = store.users.filter((c, i) => {
					return index !== i
				});

				//reset the global store
				setStore({ users: contact });
			}
		}
	};
};

export default getState;
