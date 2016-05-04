import '../styles/speakers.styl';

import React from 'react';
import SpeakerList from './speakers/speakerList';
import Paralax from './paralax/paralax';

import monday from '../data/monday.json';
import thursday from '../data/thursday.json';
import friday from '../data/friday.json';
import saturday from '../data/saturday.json';
class Speakers extends React.Component {
  constructor() {
    super();
    let thu = thursday.schedule;
    let fri = friday.schedule;
    let sat = saturday.schedule;
    this.state = {
      list: this.createList(monday.schedule.concat(thu, fri, sat))
    }
  }
  createList(list) {
    let newList = [];
    list.forEach(l => {
      if (l.img) {
        if(l.img.constructor === Array) {
          l.img.forEach(i => {
            newList.push(i);
          })
        } else {
          newList.push(l)
        }
      }
    })
    return this.shuffle(newList);
  }
  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
  render() {
    return (
      <div className="speakers">
        <Paralax/>
        <div className="container">
          <SpeakerList list={this.state.list}/>
        </div>
      </div>
    );
  }
}

Speakers.defaultProps = {
};

export default Speakers;
