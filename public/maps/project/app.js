let opt=document.getElementById('state');
 let list=[
    //'https://www.google.com/maps/d/embed?mid=1dFNmXdb7Es0MJmIW-OAm2BvGTPTVidE&ehbc=2E312F',

    
    '<iframe src="https://www.google.com/maps/d/embed?mid=1XH9rFpZheVpbpjEiMLlQOVeDB9Jps7w&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1Q6iu1d-Vcbb-z0DQm_URyqdGC8Jorgg&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1arDCCqiIOhwWJ2nYFcRnKK1Nci8fyn8&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1OzlwHi0u4S5tpK16ota03JnL9tzRlb8&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1CdPcjDFiP0LF2Wv8fefTSxo67T7xh0o&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1xIpTiRvKYd0ErnDNsgPnWzlGRnvwaTA&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1yd2JlLg32WkcyFowzVl0VQVcblbWgHc&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=17OTvG4e9nWg-rULhgCql5P7fQWAoLpc&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1q1aKkUdD2dBOg3wOj7PnDSi4et6VTT4&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1ga4VVCcQ3w3h5A63Psh2if7MMaW_KM0&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1Uf2hKgxXkJEtFIjTg375aPaivymZ3X8&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1LPpIFMmxAfCy9wECSJOMNfNX0nlN3jg&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1KmlYMx5ZsplonV9U7-3RiVqHNndiv5k&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1PCzu8Bn_luZQ6b-B92DqLNPK5EeUIOk&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1s9Ec9DsDeJPMyeeQ8umiUWnZccQEXXg&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1BFksoerqKpcGnocGBZavUO7P8IRWW7E&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1HFWxM_IA8IJkm8XKWn7fiXUQWIAiJnw&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1DlXGxv9UMN3Zp1qeaWNyHnQ5ujQ2km8&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1cGZZ6jvLni88nvLO9QRdh267o9dejH8&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1TlDsGYLj0nAaSjfxCZUXf4E7VALwZGo&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1wHVt_Rg1egrJZHy-KOSBuUWiaLVM8dQ&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1TcfE-khznkpnMqB9Wx7QlJnJERxG36M&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1ARaps3Vwe7XqL_GRpnvdGuBcZCNFjI8&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1FAUzFbIzx-p0gTAkoPtW8K9vV1H2bLs&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1SH9HMTgoWsyjAcEqNbEN2JGARsr4eLg&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1draumwcHUVwAF58H9zgyq5t_9IPbM70&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1aEAGkVOqhkcayEps6ccXMsLf-nnrq-c&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1ezsnJhzCliUMF38ACADwpos7tZD0I9M&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=11R5wE3aJx-TzEmyPNrgFr2xF26jGXYY&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1-_pUQaYHJ0hPRQaNSTA-e6F_eRBjM28&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=16ykDvwxcMAbXe6EIgtVkYs9FUgyt4yo&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1FVqHeuLyzr0OjkYv6nVWL4X3UbSdzZ8&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=18qNk6jr-7QdYw82bPr6bquIyn2CBVsA&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1q5-v_doKb0bK9uZ77JfR-H4WzUe4wbs&ehbc=2E312F" width="640" height="480"></iframe>',
    '<iframe src="https://www.google.com/maps/d/embed?mid=1GFmQexp9laY84QSEGPKolWjZFWRTDi0&ehbc=2E312F" width="640" height="480"></iframe>'
];
console.log(list.length);
opt.addEventListener('change', (e) => {
    let val = e.target.value;
    let selectedIndex = opt.selectedIndex;
    let selectedOption = opt.options[selectedIndex];
    let id = selectedOption.id;
    console.log(id);
    let link=list[id];
    console.log(link);
    let map=document.querySelector('p');
    map.innerHTML=link;
  })