const { hash } = window.location;

const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('#message-show h1').textContent = fromBinary(message);
}

document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const inputElement = document.querySelector('#message');
    const encrypted = btoa(toBinary(inputElement.value));

    const link = document.querySelector('#link');
    link.value = `${window.location}#${encrypted}`;
    link.select();
});

function toBinary(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++) {
        codeUnits[i] = string.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
}

function fromBinary(binary) {
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
}
