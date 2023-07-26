function vaiLogin() {
    window.location = "/login.html";
}

function toggleRegistrationMode(mode) {
    const userDiv = document.querySelector('.user-info');
    const vendorDiv = document.querySelector('.vendor-info');
  
    if (mode === 'user') {
      userDiv.style.display = 'block'; // Exibe a div do consumidor
      vendorDiv.style.display = 'none'; // Oculta a div do vendedor
    } else if (mode === 'vendor') {
      userDiv.style.display = 'none'; // Oculta a div do consumidor
      vendorDiv.style.display = 'block'; // Exibe a div do vendedor
    }
  }
  
  function toggleRegistrationMode1(mode) {
    const user1Div = document.querySelector('.user-info1');
    const vendor1Div = document.querySelector('.vendor-info1');
  
    if (mode === 'user1') {
      user1Div.style.display = 'block'; // Exibe a div do consumidor
      vendor1Div.style.display = 'none'; // Oculta a div do vendedor
    } else if (mode === 'vendor1') {
      user1Div.style.display = 'none'; // Oculta a div do consumidor
      vendor1Div.style.display = 'block'; // Exibe a div do vendedor
    }
  }

  function toggleRegistrationMode2(mode) {
    const user1Div = document.querySelector('.user-info2');
    const vendor1Div = document.querySelector('.vendor-info2');
  
    if (mode === 'user2') {
      user1Div.style.display = 'block'; // Exibe a div do consumidor
      vendor1Div.style.display = 'none'; // Oculta a div do vendedor
    } else if (mode === 'vendor2') {
      user1Div.style.display = 'none'; // Oculta a div do consumidor
      vendor1Div.style.display = 'block'; // Exibe a div do vendedor
    }
  }

  function toggleRegistrationMode3(mode) {
    const user1Div = document.querySelector('.user-info3');
    const vendor1Div = document.querySelector('.vendor-info3');
  
    if (mode === 'user3') {
      user1Div.style.display = 'block'; // Exibe a div do consumidor
      vendor1Div.style.display = 'none'; // Oculta a div do vendedor
    } else if (mode === 'vendor3') {
      user1Div.style.display = 'none'; // Oculta a div do consumidor
      vendor1Div.style.display = 'block'; // Exibe a div do vendedor
    }
  }


  