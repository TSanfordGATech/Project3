import React, { Component } from 'react'


export class Carousel extends Component {

    componentDidMount(){
        const M =window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {});
          });
        
    }

    render() {
        return (
            <div class="corousel">
                
                
  <div class="carousel carousel-slider center">
    <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2">button</a>
    </div>
    <div class="carousel-item red white-text" href="#one!">
      <h2>First Panel</h2>
      <p class="white-text">This is your first panel</p>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">This is your second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <h2>Third Panel</h2>
      <p class="white-text">This is your third panel</p>
    </div>
    <div class="carousel-item blue white-text" href="#four!">
      <h2>Fourth Panel</h2>
      <p class="white-text">This is your fourth panel</p>
    </div>
  </div>
        
  {/* <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://learning.linkedin.com/content/dam/me/learning/blog/2016/december/What-People-Want-to-Learn.jpg"/></a>
    <a class="carousel-item" href="#two!"><img src="https://th.bing.com/th/id/R422bea58a6e1804477fb9164249a8262?rik=nqi4HrG2IOw4nA&riu=http%3a%2f%2fwww.pearsoned.com%2fwp-content%2fuploads%2fOnlineLearningHistoricallyBlackColleges-1540x740-770x370.png&ehk=f15z5ngSudONRH6z5NimXoKcynHfs%2bNDvYO0Fe4Kpxw%3d&risl=&pid=ImgRaw"/></a>
    <a class="carousel-item" href="#three!"><img src="https://cdn.cerebralpalsynewstoday.com/wp-content/uploads/2016/03/shutterstock_229624522.jpg"/></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
  </div> */}
            </div>
        )
    }
}

export default Carousel
