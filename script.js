const info = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

var links = document.querySelectorAll('.links li');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach( element => {
        element.classList.remove('active')
      })
      e.target.parentElement.classList.add('active');
      localStorage.setItem('active-option', e.target.innerHTML.toLowerCase());
    });
  });

  var activeLocal = localStorage.getItem('active-option');

  var htmlLinkDaily = document.querySelector('.links li.daily');
  var htmlDaily = document.querySelector('.links li.daily a');

  var htmlLinkWeekly = document.querySelector('.links li.weekly');
  var htmlWeekly = document.querySelector('.links li.weekly a');

  var htmlLinkMonthly = document.querySelector('.links li.monthly');
  var htmlMonthly = document.querySelector('.links li.monthly a');



  if(activeLocal == htmlLinkDaily.dataset.option) {
    htmlDaily.parentElement.classList.add('active')
  } else if (activeLocal == htmlLinkWeekly.dataset.option) {
    htmlWeekly.parentElement.classList.add('active')
  } else if (activeLocal == htmlLinkMonthly.dataset.option) {
    htmlMonthly.parentElement.classList.add('active')
  }






function dailyData(time){
  for(let i=0; i < info.length; i++) {
    if(info[i].title == 'Work') {
      document.querySelector('.current-work').innerHTML = `${info[i].timeframes.daily.current}hrs`;
      document.querySelector('.previous-work').innerHTML = `${time} - ${info[i].timeframes.daily.previous}hrs`;
    } else if (info[i].title == 'Play') {
      document.querySelector('.current-play').innerHTML = `${info[i].timeframes.daily.current}hrs`;
      document.querySelector('.previous-play').innerHTML = `${time} - ${info[i].timeframes.daily.previous}hrs`;
    } else if (info[i].title == 'Study') {
      document.querySelector('.current-study').innerHTML = `${info[i].timeframes.daily.current}hrs`;
      document.querySelector('.previous-study').innerHTML = `${time} - ${info[i].timeframes.daily.previous}hrs`;
    } else if (info[i].title == 'Exercise') {
      document.querySelector('.current-exercise').innerHTML = `${info[i].timeframes.daily.current}hrs`;
      document.querySelector('.previous-exercise').innerHTML = `${time} - ${info[i].timeframes.daily.previous}hrs`;
    } else if (info[i].title == 'Social') {
      document.querySelector('.current-social').innerHTML = `${info[i].timeframes.daily.current}hrs`;
      document.querySelector('.previous-social').innerHTML = `${time} - ${info[i].timeframes.daily.previous}hrs`;
    } else if (info[i].title == 'Self Care') {
      document.querySelector('.current-selfCare').innerHTML = `${info[i].timeframes.daily.current}hrs`;
      document.querySelector('.previous-selfCare').innerHTML = `${time} - ${info[i].timeframes.daily.previous}hrs`;
    }
  } 
}
function weeklyData(time){
  for(let i=0; i < info.length; i++) {
    if(info[i].title == 'Work') {
      document.querySelector('.current-work').innerHTML = `${info[i].timeframes.weekly.current}hrs`;
      document.querySelector('.previous-work').innerHTML = `${time} - ${info[i].timeframes.weekly.previous}hrs`;
    } else if (info[i].title == 'Play') {
      document.querySelector('.current-play').innerHTML = `${info[i].timeframes.weekly.current}hrs`;
      document.querySelector('.previous-play').innerHTML = `${time} - ${info[i].timeframes.weekly.previous}hrs`;
    } else if (info[i].title == 'Study') {
      document.querySelector('.current-study').innerHTML = `${info[i].timeframes.weekly.current}hrs`;
      document.querySelector('.previous-study').innerHTML = `${time} - ${info[i].timeframes.weekly.previous}hrs`;
    } else if (info[i].title == 'Exercise') {
      document.querySelector('.current-exercise').innerHTML = `${info[i].timeframes.weekly.current}hrs`;
      document.querySelector('.previous-exercise').innerHTML = `${time} - ${info[i].timeframes.weekly.previous}hrs`;
    } else if (info[i].title == 'Social') {
      document.querySelector('.current-social').innerHTML = `${info[i].timeframes.weekly.current}hrs`;
      document.querySelector('.previous-social').innerHTML = `${time} - ${info[i].timeframes.weekly.previous}hrs`;
    } else if (info[i].title == 'Self Care') {
      document.querySelector('.current-selfCare').innerHTML = `${info[i].timeframes.weekly.current}hrs`;
      document.querySelector('.previous-selfCare').innerHTML = `${time} - ${info[i].timeframes.weekly.previous}hrs`;
    }
  } 
}
function monthlyData(time){
  for(let i=0; i < info.length; i++) {
    if(info[i].title == 'Work') {
      document.querySelector('.current-work').innerHTML = `${info[i].timeframes.monthly.current}hrs`;
      document.querySelector('.previous-work').innerHTML = `${time} - ${info[i].timeframes.monthly.previous}hrs`;
    } else if (info[i].title == 'Play') {
      document.querySelector('.current-play').innerHTML = `${info[i].timeframes.monthly.current}hrs`;
      document.querySelector('.previous-play').innerHTML = `${time} - ${info[i].timeframes.monthly.previous}hrs`;
    } else if (info[i].title == 'Study') {
      document.querySelector('.current-study').innerHTML = `${info[i].timeframes.monthly.current}hrs`;
      document.querySelector('.previous-study').innerHTML = `${time} - ${info[i].timeframes.monthly.previous}hrs`;
    } else if (info[i].title == 'Exercise') {
      document.querySelector('.current-exercise').innerHTML = `${info[i].timeframes.monthly.current}hrs`;
      document.querySelector('.previous-exercise').innerHTML = `${time} - ${info[i].timeframes.monthly.previous}hrs`;
    } else if (info[i].title == 'Social') {
      document.querySelector('.current-social').innerHTML = `${info[i].timeframes.monthly.current}hrs`;
      document.querySelector('.previous-social').innerHTML = `${time} - ${info[i].timeframes.monthly.previous}hrs`;
    } else if (info[i].title == 'Self Care') {
      document.querySelector('.current-selfCare').innerHTML = `${info[i].timeframes.monthly.current}hrs`;
      document.querySelector('.previous-selfCare').innerHTML = `${time} - ${info[i].timeframes.monthly.previous}hrs`;
    }
  } 
}




if(localStorage.getItem('options') === 'daily') {
  dailyData('Yesterday');
} else if (localStorage.getItem('options') === 'weekly') {
  weeklyData('Last Week');
} else if (localStorage.getItem('options') === 'monthly') {
  monthlyData('Last Month');
}

document.querySelector('.daily a').onclick = () => {
  localStorage.setItem('options', 'daily');
  dailyData('Yesterday');
}
document.querySelector('.weekly a').onclick = () => {
  localStorage.setItem('options', 'weekly')
  weeklyData('Last week');
}
document.querySelector('.monthly a').onclick = () => {
  localStorage.setItem('options', 'monthly')
  monthlyData('Last Month')
}