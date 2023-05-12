//const { event } = require("jquery");

//orbit
const block = document.querySelectorAll('.main-block__block3 label')
const main = block[2]

block.forEach(function (e, index) {


  e.addEventListener('click', () => {

    //console.log(l.length)
    if (e !== main) {
      e.animate({
        "paddingTop": "5px"
      }, 400)
      e.animate({
        "opacity": "0.5"
      }, 550)
      main.animate({
        "paddingTop": "5px"
      }, 400)

      main.animate({
        "opacity": "0.5"
      }, 550)
    }
  });
})
const rs = document.querySelectorAll('.block_block input[type="radio"]');
// const b1 = document.querySelector('#b1');
// const b2 = document.querySelector('#b2');
// const b3 = document.querySelector('#b3');
// const b4 = document.querySelector('#b4');
// const b5 = document.querySelector('#b5');
const labels = document.querySelectorAll('label input[type="radio"]');

labels.forEach((label) => {
  label.parentElement.addEventListener('click', (event) => {
    if (event.target !== label) {

      const b3Text = document.querySelector('#b3 .radio-button__label').textContent;
      const labelText = event.currentTarget.querySelector('.radio-button__label').textContent;
      document.querySelector('#b3 .radio-button__label').textContent = labelText;
      event.currentTarget.querySelector('.radio-button__label').textContent = b3Text;

    }
  });
});
//tabs_years_info
const menuLinkss = document.querySelectorAll('.block2_tabs .mh1');
const menuLink = document.querySelector('.menu-link')
// Loop through each link and add an event listener to toggle the active block
menuLinkss.forEach(link => {
  link.addEventListener('click', (event) => {

    event.preventDefault();
    // Get the ID of the block to show    
    const blockId = link.getAttribute('data-block-id');

    // Hide all the blocks
    const menuBlocks = document.querySelectorAll('.block2Tabs_blocks .block2_block1');
    menuBlocks.forEach(block => block.classList.remove('active'));

    // Show the block with the matching ID
    const blockToShow = document.querySelector(`#${blockId}`);
    blockToShow.classList.add('active');

    menuLinkss.forEach(link => link.classList.remove('active'));

    // Add the "active" class to the clicked link
    link.classList.add('active');
  });

});

//snippet
const snip = document.querySelector(".img_snip")
const blockSnip = document.querySelector(".block2-snip")
const imgSnip = document.querySelector(".img_snip")
if (snip) {
  snip.addEventListener('click', () => {
    blockSnip.classList.toggle('active')
    imgSnip.classList.toggle('active')
  })
}


//slider
// Получаем видимую часть слайда
// let viewport = document.getElementById("viewport").offsetWidth;
// // Получаем кнопку вперёд
// let btnNext = document.getElementById("next");
// // Получаем кнопку назад
// let btnPrev = document.getElementById("prev");
// // Получаем элемент со всеми слайдами
// let slider = document.querySelector("div.slider");
// // Получаем элементы показа слайда
// let viewSliders = document.querySelectorAll(".viewSlide");
// // Объявляем переменную номера слайда
// let viewSlide = 0;

// // Назначаем цвет индикатор слайда зелёный
// viewSliders[0].style.backgroundColor = "#FF1A1A";

// // Обработка клика на кнопку вперёд
// btnNext.addEventListener("click", function () {
//   // Делаем индикатор слайда красный
//   viewSliders[viewSlide].style.backgroundColor = "#858585";
//   // Условие, если номер слайда меньше четырёх
//   if (viewSlide < 4) { // Если верно то
//     // Увеличиваем номер слайда на один
//     viewSlide++;
//   } else { // Иначе
//     // Номер слайда равен нулю
//     viewSlide = 0;
//   }
//   // Закрашиваем индикатор слайда в зелёный
//   viewSliders[viewSlide].style.backgroundColor = "#FF1A1A";
//   // Меняем позицию всего слайда
//   slider.style.left = -viewSlide * viewport + "px";
// });

// // Обработка клика на кнопку назад
// btnPrev.addEventListener("click", function () {
//   // Делаем индикатор слайда красный
//   viewSliders[viewSlide].style.backgroundColor = "#858585";
//   // Условие, если номер слайда больше нуля
//   if (viewSlide > 0) { // Если верно то
//     // Уменьшаем номер слайда
//     viewSlide--;
//   } else { // Иначе
//     // Номер слайда равен четырём
//     viewSlide = 4;
//   }
//   // Закрашиваем индикатор слайда в зелёный
//   viewSliders[viewSlide].style.backgroundColor = "#FF1A1A";
//   // Меняем позицию всего слайда
//   slider.style.left = -viewSlide * viewport + "px";
// });




//const { event } = require("jquery");
//dropdown
const dButtons = document.querySelectorAll('.dropdown-trigger button');

// Loop through dropdown buttons and add event listeners
dButtons.forEach(button => {
  button.addEventListener('click', () => {

    // Get dropdown menu and toggle 'is-active' class
    const dropdownMenu = button.parentElement.nextElementSibling;
    dropdownMenu.classList.toggle('is-active');
    // Toggle 'is-active' class and rotate arrow icon
    button.parentElement.classList.toggle('is-active');
    const arrowIcon = button.querySelector('svg');
    arrowIcon.classList.toggle('rotate-180');
  });
});
const dButtons1 = document.querySelectorAll('.dropdown-trigger1 button');
dButtons1.forEach(button => {
  button.addEventListener('click', (event) => {
    console.log('go')
    // Get dropdown menu and toggle 'is-active' class
    const dropdownMenu = button.parentElement.nextElementSibling;
    dropdownMenu.classList.toggle('active');
    // Toggle 'is-active' class and rotate arrow icon
    button.parentElement.classList.toggle('active');
    const arrowIcon = button.querySelector('svg');
    arrowIcon.classList.toggle('rotate-180');
  });
});

// Get all dropdown items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Loop through dropdown items and add event listeners
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get selected option and set button text
    const selectedOption = item.textContent;
    const dropdownButton = item.closest('.dropdown').querySelector('.user');
    dropdownButton.textContent = selectedOption;
    // Hide dropdown menu
    const dropdownMenu = item.closest('.dropdown-menu');
    dropdownMenu.classList.remove('is-active');
    const arrowIcon = document.querySelector('.dropdown-trigger svg');

    arrowIcon.classList.remove('rotate-180');

  });
});

// Add event listener to close dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.querySelector('.dropdown-menu').classList.remove('is-active');
      dropdown.querySelector('.dropdown-trigger').classList.remove('is-active');
      const arrowIcon = dropdown.querySelector('.dropdown-trigger svg');
      if (arrowIcon.parentElement.classList.contains('is-active')) {
        arrowIcon.classList.add('rotate-180');
      } else {
        arrowIcon.classList.remove('rotate-180');
      }
    }
  });
});
const radioButtons = document.querySelectorAll('.radio-button input[type="radio"]');


// $(".block_block").click(function () { // задаем функцию при нажатиии на элемент с классом start
//   $("span").animate({
//    transform: "translateY(40px)",
//     transform: "rotate(90deg)"
//   }, 1000);
// });



radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    radioButtons.forEach(rb => {
      const label = rb.closest('.radio-button').querySelector('.radio-button__label');
      const custom = rb.closest('.radio-button').querySelector('.radio-button__custom');

      // if (rb.checked) {
      //   label.style.fontSize = '18px';
      //   custom.style.borderColor = '#f00';
      //   custom.style.background = '#f00';
      // } else {
      //   label.style.fontSize = '16px';
      //   custom.style.borderColor = '#444';
      //   custom.style.backgroundColor = 'transparent';
      // }
    });
  });
});




// const d = document.querySelectorAll('.main-block2 .block2-cont1')

// d.forEach(a => {
//   a.addEventListener('click', (e) => {
//     if (e.target === a) {
//       a.classList.add('.active');
//     }
//   })
// })

const windowPathname = window.location.pathname;
if (window.location.pathname === '/') {
  // Если текущий путь соответствует '/old-page.html', перенаправляем пользователя на '/new-page.html'
  window.location.replace('/index.html');
}
//появление блока-инпута
const searchButton = document.querySelector('.buttonForHeader.search');
const searchBlock = document.querySelector('.block_search');
const links = document.querySelector('.header-container-block__links ')
const l = document.querySelector('.langsButton')
const s = document.querySelector('.search')
const glasses = document.querySelector('.glasses')
const exitS = document.querySelector('.exitFromSearch')
const action = document.querySelector('.header-container-block__action')
searchButton.addEventListener('click', () => {
  searchBlock.classList.toggle('active');
  glasses.classList.toggle('active');
  buts.forEach(but => {
    but.classList.toggle('active');
  })
  exitS.classList.toggle('active')
  s.classList.toggle('active');
  links.classList.toggle('active');
  action.style.justifyContent = 'flex-end';
});
exitS.addEventListener('click', () => {
  action.style.justifyContent = 'flex-start';
  searchBlock.classList.toggle('active');
  glasses.classList.toggle('active');
  buts.forEach(but => {
    but.classList.toggle('active');
  })
  exitS.classList.toggle('active')
  s.classList.toggle('active');
  links.classList.toggle('active');
});
//модальное окно для меню
const openModalButton = document.querySelectorAll('.open-modal');
const closeModalButton = document.querySelectorAll('.close-modal');
const modal = document.querySelectorAll('.container-modalMenu');

openModalButton.forEach(but => {
  but.addEventListener('click', () => {
    modal.forEach(m => {
      m.style.display = 'flex';
      closeModalButton.forEach(c => {
        c.addEventListener('click', () => {
          m.style.display = 'none';
        });
      })
    })
  });
})
//модальное окно для обратной связи
const openModalButton1 = document.querySelectorAll('.open-modal1');
const closeModalButton2 = document.querySelectorAll('.close-modal');
const modal2 = document.querySelectorAll('.container-modalMenu2');
const modal3 = document.querySelectorAll('.container-modalMenu3');

openModalButton1.forEach(but => {
  but.addEventListener('click', () => {
    modal2.forEach(m => {
      m.style.display = 'flex';
      closeModalButton2.forEach(c => {
        c.addEventListener('click', () => {
          m.style.display = 'none';
        });
      })
    })
    modal3.forEach(m => {
      m.style.display = 'flex';
      closeModalButton2.forEach(c => {
        c.addEventListener('click', () => {
          m.style.display = 'none';
        });
      })
    })
  });
})


const buts = document.querySelectorAll('.langsButton');
const langs = document.querySelectorAll('.langs');
buts.forEach(but => {
  //const langs = but.nextElementSibling;
  but.addEventListener('click', () => {
    langs.forEach(lang => {
      lang.classList.toggle('active')
      document.addEventListener('click', function (e) {
        if (!but.contains(e.target) && !lang.contains(e.target)) {
          lang.classList.remove('active');
        }
      });
    })
  })

})


var scrollDiv = document.createElement("div");
scrollDiv.style.width = "100px";
scrollDiv.style.height = "100px";
scrollDiv.style.overflow = "scroll";
scrollDiv.style.position = "absolute";
scrollDiv.style.top = "-9999px";
document.body.appendChild(scrollDiv);

// Получаем ширину скролла
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

// Удаляем элемент-контейнер
document.body.removeChild(scrollDiv);


const hM = document.querySelector('.modal-content')
//hM.style.paddingLeft = scrollbarWidth + "px";


function handleFileUpload(input) {
  const fileName = input.files[0].name;
  const spanElement = input.parentElement.querySelectorAll('.js-value1');
  spanElement.forEach(s => {
    s.textContent = fileName;
    const label = input.nextElementSibling;
   
      label.style.display = "none";
    
  })

}

const check = document.querySelectorAll('.conts')
check.forEach(conts => {
  const checkboxses = conts.querySelectorAll('.checkbox_conts .checkbox_cont1 input')
  //const
  checkboxses.forEach(c => {
    c.addEventListener('change', () => {
      const checked = c.checked;

      checkboxses.forEach((h) => {
        if (h != c) {
          h.checked = false;

          const label = h.parentElement.querySelector('.checkbox_body');
          const check = label.querySelector('.check');
          check.classList.remove('active');
        }
      });

      const label = c.parentElement.querySelector('.checkbox .checkbox_body');
      const check = label.querySelector('.check');

      if (checked) {
        check.classList.add('active');
      } else {
        check.classList.remove('active');
      }
    })

  })
})


const checkbox = document.querySelectorAll('.checkbox_cont')
checkbox.forEach(c => {
  c.addEventListener('click', (event) => {

    const v = c.querySelector('.checkbox_body .check')
    event.preventDefault();
    v.classList.toggle("active")

  })

})
document.addEventListener("DOMContentLoaded", function () {
  var phoneInput = document.getElementById("phone");
  var cardInput = document.getElementById("card");
  var emailInput = document.getElementById("email");
  var moneyInput = document.getElementById("money");

  if (phoneInput !== null) {
    Inputmask({
      "mask": "+7(999)-999-99-99"
    }).mask(phoneInput);
  }
  if (cardInput !== null) {
    Inputmask({
      "mask": "9999 9999 9999 9999"
    }).mask(cardInput);
  }
  if (emailInput !== null) {
    Inputmask({
      "alias": ""
    }).mask(emailInput);
  }
  if (moneyInput !== null) {
    Inputmask({
      "alias": "numeric"
    }).mask(moneyInput);
  }
});
///calendar
let calendar = new Vue({
  el: '#calendar',
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      isMounted: false,
      selectMonth: 1,
      selectYear: 2023,
      masks: {
        weekdays: 'WWWW',
        title: "MMMM"
      },
      attributes: [{
          key: 1,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 3),
        },
        {
          key: 2,
          customData: {
            title: 'Министерство жилищно-коммунального хозяйства и энергетики РС(Я)',
            time: "16:00",
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 3),
        },
        {
          key: 3,
          customData: {
            title: "Министерство сельского хозяйства РС(Я)",
            time: "17:00",
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 3),
        },
        {
          key: 4,
          customData: {
            title: '',
            time: "",
            class: '',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 6,
          customData: {
            title: '',
            time: "",
            class: 'bg-orange-500 text-white',
          },
          dates: {
            months: 5,
            ordinalWeekdays: {
              2: 1
            }
          },
        },
      ],
    };
  },
  methods: {
    nextMonth() {
      this.$refs.calendar.move(1)
      this.selectMonth = this.$refs.calendar.pages[0].month
    },
    prevMonth() {
      this.$refs.calendar.move(-1)
      this.selectMonth = this.$refs.calendar.pages[0].month
    },
    changeYear(year) {
      this.selectYear = year
      this.$refs.calendar.move({
        month: parseInt(this.selectMonth),
        year: parseInt(year)
      })
    },
    changeMonth(month) {
      this.selectMonth = month
      this.$refs.calendar.move({
        month: parseInt(month),
        year: parseInt(this.selectYear)
      })
    }
  },
  computed: {
    thisMonth: function () {
      if (this.isMounted) {
        return this.$refs.calendar.pages[0].monthLabel
      }
      return
    },
    thisYear: function () {
      if (this.isMounted) {
        return this.$refs.calendar.pages[0].yearLabel
      }
      return
    },
  },
  mounted() {
    this.isMounted = true
    this.selectMonth = this.$refs.calendar.pages[0].month
    this.selectYear = this.$refs.calendar.pages[0].year
    console.log(this.$refs.calendar)
  }
})
 const select = document.querySelector('select');
 select.onchange = () => {
   tabs.querySelector('.active').classList.remove('active');
   tabs.querySelectorAll('.tab')[select.a.selectedIndex].classList.add('active');
 }