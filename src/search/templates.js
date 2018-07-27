export const getListItem = (description = '', link = '', author = '') => `
  <a href="${link}" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${author}</h5>
    </div>
    <p class="mb-1">${description}</p>
  </a>
`;
