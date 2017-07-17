let neighborhood = $('.session #neighborhood');
let frequency = $('.session #frequency');
let day = $('.session #day');
let startDate = $('.session #startDate');
let time = $('.session #time');
let totalSessions = $('.session #totalSessions');
let cost = $('.session #cost');

frequency.append('<span class="value">2x week</span>');
cost.append('<span class="value">W240,000</span>');

$('input[name="sessionRadio"]').on('change', function(){
  $('label[for="biweekly"]').removeClass('selected');
  $('label[for="weekly"]').removeClass('selected');
  $('label[for="once"]').removeClass('selected');

  $(this).parent().addClass('selected');

  const selectedFreq = $(this).val(); 
  updateBilling(selectedFreq);
});

function updateBilling(selectedFreq) {
  let freqCount;
  let costCount;
  frequency.children().empty();
  cost.children().empty();

  if (selectedFreq === 'biweekly') {
    freqCount = '2x week';
    costCount = 'W240,000';
  } else if (selectedFreq === 'weekly') {
    freqCount = '1x week';
    costCount = 'W240,000';
  } else {
    freqCount = 'once';
    costCount = 'W60,000';
  }
  frequency.append('<span class="value">' + freqCount + '</span>');
  cost.append('<span class="value">' + costCount + '</span>');

}
