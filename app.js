$(() => {
//onload
//
  //create count variable to count clicks in alternateClasses function
  let count = 0;
  //create win counter variables
  let xWinCounter = 0;
  let oWinCounter = 0;
  let tieWinCounter = 0;

  //make function to alternate x and o class on click
  const alternateClasses = (event) => {
    //make if statement so counter only goes up if the square text is empty
    if($(event.target).text()=== ''){
      count++
      if (count % 2 === 0) {
        $(event.target).text('O').addClass('o')
        checkForWin()
      } else {
        $(event.target).text('X').addClass('x')
        checkForWin()
      }
    } else {
      count += 0
    }//else counter remains the same
  }

  //create openModal function
  const openModal = () => {
    $('#modal').css('display','block')
  }
  //create else if statement that checks for all win scenarios and makes alert in case of win or tie
  const checkForWin = () => {
    if (($('#square-0').text()==='X')&&($('#square-1').text()==='X')&&($('#square-2').text()==='X')||
      ($('#square-3').text()==='X')&&($('#square-4').text()==='X')&&($('#square-5').text()==='X')||
      ($('#square-6').text()==='X')&&($('#square-7').text()==='X')&&($('#square-8').text()==='X')||
      ($('#square-0').text()==='X')&&($('#square-3').text()==='X')&&($('#square-6').text()==='X')||
      ($('#square-1').text()==='X')&&($('#square-4').text()==='X')&&($('#square-7').text()==='X')||
      ($('#square-2').text()==='X')&&($('#square-5').text()==='X')&&($('#square-8').text()==='X')||
      ($('#square-0').text()==='X')&&($('#square-4').text()==='X')&&($('#square-8').text()==='X')||
      ($('#square-2').text()==='X')&&($('#square-4').text()==='X')&&($('#square-6').text()==='X')){
        $('.square').off()
        openModal()
        $('#modal-text').text("X wins!")
        xWinCounter++
        $('#x-text').text(xWinCounter)
    }else if(($('#square-0').text()==='O')&&($('#square-1').text()==='O')&&($('#square-2').text()==='O')||
      ($('#square-3').text()==='O')&&($('#square-4').text()==='O')&&($('#square-5').text()==='O')||
      ($('#square-6').text()==='O')&&($('#square-7').text()==='O')&&($('#square-8').text()==='O')||
      ($('#square-0').text()==='O')&&($('#square-3').text()==='O')&&($('#square-6').text()==='O')||
      ($('#square-1').text()==='O')&&($('#square-4').text()==='O')&&($('#square-7').text()==='O')||
      ($('#square-2').text()==='O')&&($('#square-5').text()==='O')&&($('#square-8').text()==='O')||
      ($('#square-0').text()==='O')&&($('#square-4').text()==='O')&&($('#square-8').text()==='O')||
      ($('#square-2').text()==='O')&&($('#square-4').text()==='O')&&($('#square-6').text()==='O')){
        $('.square').off()
        openModal()
        $('#modal-text').text("O wins!")
        oWinCounter++
        $('#o-text').text(oWinCounter)
      }else if (($('#square-0').text()!=='')&&($('#square-1').text()!=='')&&($('#square-2').text()!=='')&&($('#square-3').text()!=='')&&($('#square-4').text()!=='')&&($('#square-5').text()!=='')&&($('#square-6').text()!=='')&&($('#square-7').text()!=='')&&($('#square-8').text()!=='')){
        $('.square').off()
        openModal()
        $('#modal-text').text("It's a tie!")
        tieWinCounter++
        $('#tie-text').text(tieWinCounter)
      }
    }

//create square divs using for loop, add class square and append them to the container div
  for (var i = 0; i < 9; i++) {
       const $square = $('<div>').addClass('square').attr('id','square-'+i)
      $('#container').append($square)
    }


  //create restart onclick function
  $('#restart-button').on('click',(event) => {
    //remove x or o from square class
    $('.square').text('').attr('class','square');
    //return modal display to none
    $('#modal').css('display','none');
    //reset count to zero
    count = 0;
    //call the square event handler
    $('.square').on('click',alternateClasses);
  })

  //create event handler for square divs that adds x or o class and text
  $('.square').on('click',alternateClasses);


//onload
})
