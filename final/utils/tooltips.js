function setTooltip(chart_type) {
  const tooltip = d3.tip().attr('class', 'd3-tip').offset([-10, 0])

  switch (chart_type) {
    case 'line': {
      // write something if you want.
      return tooltip
    }

    case 'bar': {
      // write something if you want.
      return tooltip
    }

    case 'multi_bar': {
      // write something if you want.
      return tooltip
    }

    case 'pie': {
      tooltip.html(
        d => {
          // weird!! It won't shows properly when I pass chinese characters.
          // So I used the ugly written way as below
          switch(d.data.category){
            case 1:
              return "<div class='date'>15~19歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 2:
              return "<div class='date'>20~24歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 3:
              return "<div class='date'>25~29歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 4:
              return "<div class='date'>30~34歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 5:
              return "<div class='date'>35~39歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 6:
              return "<div class='date'>40~44歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 7:
              return "<div class='date'>45~49歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 8:
              return "<div class='date'>50歲以上</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
            case 9:
              return "<div class='date'>未滿15歲</div>"+"<div>新生兒數量: <span>"+d.data.clicks+"</span></div>"
          }
          
        }
      )
      return tooltip
    }
  }
}
