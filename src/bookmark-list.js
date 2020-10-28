import $ from 'jquery';
import store from './store';

function createHeadingSection() {
  return `
    <section class="heading">
      <h1>My Bookmarks</h1>
    </section>
  `;
}

function createNewAndFilterButtonsSection() {
  return `
    <section class="buttons">
      <div class="left-button">
        <button id="new">+ New</button>
      </div>

      <div class="right-button">
        <form id="rating-filter">
          <select name="" id="rating">
            <option value="">Filter By</option>
            <option value="five">*****</option>
            <option value="four">****</option>
            <option value="three">***</option>
            <option value="two">**</option>
            <option value="one">*</option>
          </select>
        </form>
      </div>
    </section>
  `;
}


function createLiElement(singleBookmark) {
  return `
    <li>
      <div class="li-title">
        <div class="left-li-block">
          <p>${singleBookmark.title}</p>
        </div>
        <div class="right-li-block">
          <p>${singleBookmark.rating} Stars</p>
        </div>
      </div>
    </li>
  `;
}

function createAllLiElements(allBookmarks) {
  const liArr = allBookmarks.map(bookmark => {
    return createLiElement(bookmark);
  });

  const liEl = liArr.join('');

  return `
    <section class="bookmark-display">
      <ul>
        ${liEl}
      </ul>
    </section>
  `;
}


function createHomePage() {
  const heading = createHeadingSection();
  const homeButtons = createNewAndFilterButtonsSection();
  const list = createAllLiElements(store.localBookmarks);

  return heading + homeButtons + list;
}



function renderMain() {
  let createdHome = createHomePage();
  $('body').html(createdHome);
}

export default {
  renderMain,
};