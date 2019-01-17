import React from 'react';
import {getAllMeals} from '../../api/shabbat';

class Feed extends React.Component {
  state = {
    meals: []
  }

  componentDidMount() {
    getAllMeals().then(resp => {
      this.setState({meals: resp});
    })
  };

  render() {
    shownMeals = this.state.meals[0].title;

    return (
      <div>
        <p>
        Title?: {shownMeals}
        Hey here is a list of MEALS
        one meal
        another meals
        yet another meal
        </p>
      </div>
    )
  }
}

export default Feed;
