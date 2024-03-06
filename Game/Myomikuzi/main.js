'use strict';

{
    const btn = document.getElementById('btn');
    const result =document.getElementById('result');

    btn.addEventListener('click', () => {
        const results = ['大吉','中吉','吉','小吉','凶' ];
        const n = Math.floor(Math.random() * results.length);

        result.textContent = results[n];

        
    });
}