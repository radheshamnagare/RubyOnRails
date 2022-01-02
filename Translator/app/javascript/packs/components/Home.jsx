import React from "react";
import { Component } from "react";
import axios from "axios";
import Speechsyn from "./Speechsys";
import "bootstrap/dist/css/bootstrap.min.css"



class Home extends Component {


  constructor(props) {
    super(props)

    this.state = {
      source_lang: "",
      target_lang: "",
      source_text: "",
      target_text: "",
      options: []
    }

  }

  reset_text() {
    alert("want to reset")
    this.setState({
      source_text: " ",
      target_text: " "
    })
  }

  fill_source_text = (event) => {
    this.setState({
      source_text: event.target.value
    })
  }

  fill_target_text = (event) => {
    this.setState({
      target_text: event.target.value
    })
  }

  sourcelang = (event) => {

    this.setState({
      source_lang: event.target.value
    })
  }

  targetlang = (event) => {

    this.setState({
      target_lang: event.target.value
    })
  }

  translatetext = (event) => {
    if (this.state.sourcelang == "" || this.state.target_lang == "") {
      alert("please select source and target language")
    }
    else {


      let data = {
        q: this.state.source_text,
        source: this.state.source_lang,
        target: this.state.target_lang
      }
      axios.post(`https://libretranslate.de/translate`, data)
        .then((response) => {

          this.setState({ target_text: response.data.translatedText })
        })



    }

  }
  componentDidMount() {
    axios.get('https://libretranslate.de/languages', { headers: { 'accept': 'application/json' } })
      .then(res => { this.setState({ options: res.data }) }).
      catch(err => alert(err))
  }
  render() {


    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <label className="form-label">Choose Source Language :</label>
            <select className="form-select" onChange={this.sourcelang}>
              <option value="--select--">--select--</option>
              {
                this.state.options.map(lang => {
                  return (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  )
                })
              }
            </select>
            <br />
            <textarea className="form-control" rows="10" value={this.state.source_text} onChange={this.fill_source_text} />
            <Speechsyn texts={this.state.source_text} />
          </div>
          <div className="col">
            <div className="col">
              <label className="form-label">Choose Destination Language :</label>
              <select className="form-select" onChange={this.targetlang}>
                <option value="--select--">--select--</option>
                {
                  this.state.options.map(lang => {
                    return (
                      <option key={lang.code} value={lang.code}>{lang.name}</option>
                    )
                  })
                }
              </select>
              <br />
              <textarea className="form-control" rows="10" value={this.state.target_text} onChange={this.fill_target_text} />
              <Speechsyn texts={this.state.target_text} />
            </div>
          </div>
        </div>
        <br />
        <div className="d-grid gap-2 col-3 mx-auto">
          <button type="button" className="btn btn-success" onClick={() => this.translatetext()}>Translate</button>

          <button type="button" onClick={() => this.reset_text()} className="btn btn-secondary ">Clear Text</button>
        </div>

      </div>
    )
  }
}

export default Home

