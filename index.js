import html2canvas from 'html2canvas';
import Toastify from 'toastify-js';
import sanitizeHtml from 'sanitize-html';
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

const link = document.querySelector('link[rel="canonical"]')
    ? document.querySelector('link[rel="canonical"]')
    : document.createElement('link');
const pathname = typeof window !== 'undefined' ? window.location.href : '';
link.setAttribute('rel', 'canonical');
link.setAttribute('href', pathname);
document.head.appendChild(link);

var el = document.querySelector('#postData');
if (el) {
    el.addEventListener('submit', postData);
}

function postData(event) {
    event.preventDefault();
    let getQuotes = document.querySelector('#getquotes').value;
    let getAuthor = document.querySelector('#author').value;
    let getColor = document.querySelector('#getcolor').value;
    const getInput = sanitizeHtml(getQuotes) || 'Your Quotes';
    const authorInput = sanitizeHtml(getAuthor) || '';
    const quotesColor = getColor || '#E9D5FF';
    const random_id = Math.floor(1000 + Math.random() * 9000);
    const basename = 'quotes-image-' + random_id;
    const word = getInput;
    const author = authorInput;
    Toastify({
        text: 'Created',
        duration: 2000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: '#833471',
        },
    }).showToast();

    document.getElementById('notice').style.display = 'block';
    document.getElementById(
        'notice'
    ).innerHTML = `<div class="container mx-md"> 
            <div class="flex items-center justify-center">
            <div id="copy-wish">
            <div class="h-96 w-96 p-16 py-16" style="background-color: ${quotesColor}">
            <p style="white-space: pre-line;" class="mt-2 text-base font-bold text-center text-zinc-700">
            ${word}
            </p>
            <br />
            <p class="mt-2 text-sm font-bold text-center text-zinc-700">${author}</p>
          </div>
          </div>
          </div>
          </div>
          `;
    document.querySelector('#result').scrollIntoView({
        behavior: 'smooth',
    });
    if (word == 'Your Name') {
        console.log('Hello World');
    } else {
        html2canvas(document.getElementById('copy-wish'), {
            allowTaint: true,
            useCORS: true,
            logging: false,
        })
            .then(function (canvas) {
                let image = canvas.toDataURL('image/png');
                document.getElementById('result').innerHTML = `
            <div class="flex items-center justify-center">
            <p><img src=${image}><P>
            </div>
            <br>
            <div class="flex items-center justify-center">
            <a class="inline-block px-12 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase umami--click--download-image" href="${image}" download="${basename}">⬇ Download image</a>
            </div>`;
                document.getElementById('notice').style.display = 'none';
            })
            .catch(e => {
                console.log(e);
            });
    }
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/sw.js')
            .then(function (registration) {
                console.log(
                    'ServiceWorker registration successful with scope: ',
                    registration.scope
                );
            })
            .catch(function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
