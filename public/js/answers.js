const answersTable = document.querySelector('#answer-table');

answersTable.addEventListener('click', (evt) => {
  console.log(evt.target.textContent);
  // alert(`${evt.target.textContent}`);
renderTableQuestion()

});