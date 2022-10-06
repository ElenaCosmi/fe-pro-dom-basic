export const paintCards = () => {
  document.querySelectorAll(`li:nth-child(even)`)
    .forEach(li => li.style.backgroundColor = `red`)
};

export const findElement = () => {
  let li = document.querySelector(`li`);
  while (!li.classList.contains(`likedItem`)) {
    li = li.nextElementSibling;
  }
  li.style.backgroundColor = `blue`;
};