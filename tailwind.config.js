/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/*.html', './public/build/*.css', './public/build/*.js'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
