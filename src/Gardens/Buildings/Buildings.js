import React, { Component } from 'react'
import './Buildings.scss';

import history from '../../history';


import { connect } from 'react-redux';
import { fetchBuildings } from '../../actions/buildingsAction';

class Buildings extends Component {
  componentDidMount() {
    this.props.fetchBuildings();
  }

  render() {
    let polygons = [];
    let i = 0;
    for( let lot_name in this.props.buildings) {
      polygons.push( <polygon key={i++} onClick={this.showBuilding} data-lot={lot_name} points={this.props.buildings[lot_name].svg}></polygon> );
    }

    return (
      <div>
        <div className="buildings">
          <img src={this.props.buildings.img} alt="" className="buildings_bg_img"/>

          <svg viewBox="0 0 1920 1080">
            {polygons}
          </svg>
        </div>
      </div>
    )
  }

  showBuilding(e) {
    const lot = e.target.dataset.lot;
    history.push(`/gardens/buildings/building/${lot}`);
  }

}

const mapStateToProps = state => {
  return {
    buildings: {...state.buildings}
  }
}


export default connect(mapStateToProps, { fetchBuildings })(Buildings);