import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getColors, getNames } from '../../helpers/getOperations';

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart( { categories, sumAmount, type } ) {
    
    if(sumAmount === undefined) return 'cargando'

    const bg_colors = getColors(type)
    
    const names_labels = getNames(type)



  const data = {

    labels: names_labels,    

    datasets: [
      {
        data: categories,
  
        backgroundColor: bg_colors,

        borderWidth: 1,

      },

    ],

  };

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 250).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "middle";
         var text = `$${sumAmount}`,
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 1.8;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    },
  };



  return <Doughnut data={data} plugins={plugins} config={config}/>;


}