const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');

const slugify = val => {
    return val.toString().toLowerCase().trim()
        .replace(/&/g,'-and-') // replaces hyphen with -and-
        .replace(/[\s\W-]+/g,'-') //replaces spaces and none word chars and dashes with a single dash
};

titleInput.addEventListener('keyup', () => {
    slugInput.setAttribute('value', slugify(titleInput.value));
});