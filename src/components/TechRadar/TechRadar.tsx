import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import radarVisualization from '../../utils/radar-0.8'
import data from './data.json';

const config = {
    colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  rings: [
    { name: "INNER",  color: "#5ba300" }, // ADOPT
    { name: "SECOND", color: "#009eb0" }, // TRIAL
    { name: "THIRD",  color: "#c7ba00" }, // ASSESS
    { name: "OUTER",  color: "#e09b96" } // HOLD
  ],
  print_layout: true,
};

const rings = [
  { radius: 130 },
  { radius: 220 },
  { radius: 310 },
  { radius: 400 }
];

function TechRadar(): JSX.Element {
  const backgroundRef = useRef();

  useEffect(() => {
    d3.select(backgroundRef.current).append('line').attr("x1", 0).attr("y1", -400)
    .attr("x2", 0).attr("y2", 400)
    .style("stroke", config.colors.grid)
    .style("stroke-width", 1);

    d3.select(backgroundRef.current).append('line').attr("x1", -400).attr("y1", 0)
    .attr("x2", 400).attr("y2", 0)
    .style("stroke", config.colors.grid)
    .style("stroke-width", 1);

    for (var i = 0; i < rings.length; i++) {
      d3.select(backgroundRef.current).append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', rings[i].radius)
        .style('fill', 'none')
        .style('stroke', config.colors.grid)
        .style('stroke-width', 1);

      if (config.print_layout) {
        d3.select(backgroundRef.current).append('text')
          .text(config.rings[i].name)
          .attr('y', -rings[i].radius + 62)
          .attr('text-anchor', 'middle')
          .style('fill', config.rings[i].color)
          .style('opacity', 0.35)
          .style('font-family', 'Arial, Helvetica')
          .style('font-size', '42px')
          .style('font-weight', 'bold')
          .style('pointer-events', 'none')
          .style('user-select', 'none');
      }
    }
    // 227
  }, [])
  // useEffect(() => {
  //   radarVisualization({
  //     svg_id: "radar",
  //     width: 1450,
  //     height: 1000,
  //     scale: 1.0,
  //     colors: {
  //       background: "#fff",
  //       grid: "#bbb",
  //       inactive: "#ddd"
  //     },
  //     title: "My Radar",
  //     quadrants: [
  //       { name: "Bottom Right" }, // Languages
  //       { name: "Bottom Left" }, // Infrastructure
  //       { name: "Top Left" }, // Datastores
  //       { name: "Top Right" } // Data Management
  //     ],
  //     rings: [
  //       { name: "INNER",  color: "#5ba300" }, // ADOPT
  //       { name: "SECOND", color: "#009eb0" }, // TRIAL
  //       { name: "THIRD",  color: "#c7ba00" }, // ASSESS
  //       { name: "OUTER",  color: "#e09b96" } // HOLD
  //     ],
  //     print_layout: true,
  //     links_in_new_tabs: true,
  //     entries: data.entries,
  //   });
  // })

  return (
    <svg>
      <g ref={backgroundRef} />
    </svg>
  );
}

export default TechRadar;
