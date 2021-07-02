///////////
/* PAGES */
///////////

/*
  each page is a piece of innerHTML in string form
  we "inject" each page by setting a target div's innerHTML to the stringified markup
*/

const HomePage = `
  <section>
    <h2>Home</h2>
    <img src="https://source.unsplash.com/random/300x300?nature,water" alt="unsplash-img"/>
    <p>welcome to the home page! :)</p>
  </section>
`;

// here we generate list elements by mapping over an array of strings
const myHobbies = ['Kayaking', 'Baking', 'Playing with my dog'];

const AboutPage = `
  <section>
    <h2>About</h2>
    <p>These are some of my hobbies:</p>
    <br/>
    <ul>
      ${myHobbies.map(hobby => `<li>${hobby}</li>`).join('')}
    </ul>
  </section>
`;

const ContactPage = `
  <section>
    <h2>Contact</h2>
    <form id='myForm'>
      <label for='Name'>Name</label>
      <input type='text' id='myName'></input>
      <label for='Message'>Message</label>
      <textarea id='myMessage'></textarea>
      <button type='button' id="mySubmitBtn">Log Form To Console</button>
    </form>
  </section>
`;

//////////////////
/* PAGE SWAPPER */
//////////////////

const assignActiveLink = linkId => {
	const activePage = document.getElementById('activePage');
	switch (linkId) {
		case 'home':
			activePage.innerHTML = HomePage;
			break;
		case 'about':
			activePage.innerHTML = AboutPage;
			break;
		case 'contact':
			activePage.innerHTML = ContactPage;
			break;
	}
};

///////////////////////////////////
/* DOM NODES AND EVENT LISTENERS */
///////////////////////////////////

const HOME = document.getElementById('home');
const ABOUT = document.getElementById('about');
const CONTACT = document.getElementById('contact');

// assign home page as first page our user encounters
document.getElementById('activePage').innerHTML = HomePage;

// again, we'll map over an array in order to cut down on repetition of our code
// and we'll assign the active link and swap our pages out based on the node that was clicked
[HOME, ABOUT, CONTACT].forEach(node =>
	node.addEventListener('click', () => assignActiveLink(node.id))
);

// this logging function simulates submitting a form
const logIt = () => {
	const name = document.getElementById('myName');
	const message = document.getElementById('myMessage');
	console.log({ name: name.value, message: message.value });
};

// this event listener captures the submit button click through a process called "bubbling"
// and fires the logging function
document.body.addEventListener('click', e => {
	if (e.target.matches('#mySubmitBtn')) {
		logIt();
	}
});
