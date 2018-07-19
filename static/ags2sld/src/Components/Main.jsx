import React, { Component } from "react";
import { getCRSFToken } from "../helpers/helpers";
import { doGet, doPost } from "../utils/utils";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapUrl:
        "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/FireStations/MapServer/"
    };
  }

  handleClick(event) {
    event.preventDefault();
    console.log({ mapUrl: this.state.mapUrl });

    const data = JSON.stringify({
      mapUrl: this.state.mapUrl
    });

    const url = "http://localhost:8000/ags2sld/getsld";

    let res = doPost(url, data).then(result => {
      console.log(result);
    });
  }

  handleClick_GetMap(event) {
    console.log({ mapUrl: this.state.mapUrl });

    let url =
      "http://localhost:8000/ags2sld/getmap/?" + "mapUrl=" + this.state.mapUrl;

    let res = doGet(url).then(result => {
      console.log(result);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="input-group input-group-lg">
          <form className="myform">
            <div className="form-group">
              <input
                id="mapUrl"
                type="text"
                className="form-control"
                placeholder="Enter Map Url"
                value={this.state.mapUrl}
                onChange={e => {
                  this.setState({ mapUrl: e.target.value });
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={event => {
                this.handleClick(event);
              }}
            >
              Get SLD
            </button>
            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={event => {
                this.handleClick_GetMap(event);
              }}
            >
              Get Map
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
