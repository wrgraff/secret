const { hash } = window.location;

const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('#message-show h1').textContent = message;
}

document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const inputElement = document.querySelector('#message');
    const encrypted = btoa(inputElement.value);

    const link = document.querySelector('#link');
    link.value = `${window.location}#${encrypted}`;
    link.select();
});
