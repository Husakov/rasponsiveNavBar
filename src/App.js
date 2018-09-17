import React, { Component } from 'react';
import Navs from './components/navs/nav';






class App extends Component {
    state = {
        contentWidth: undefined
    }


    handleResize = () => this.setState({
        contentWidth: window.innerWidth
    });

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
  render() {
      console.log(this.state.contentWidth);
      return (
                 <div>
                 {this.state.contentWidth>1365 && <Navs value={8}/>}
                 {(this.state.contentWidth>1220)&&(this.state.contentWidth<1365) ? <Navs value={7} /> : ""}
                 {(this.state.contentWidth>1070)&&(this.state.contentWidth<1220) ? <Navs value={6} /> : ""}
                 {(this.state.contentWidth>910)&&(this.state.contentWidth<1070) ? <Navs value={5} /> : ""}
                 {(this.state.contentWidth>740)&&(this.state.contentWidth<910) ? <Navs value={4} /> : ""}
                 {(this.state.contentWidth>590)&&(this.state.contentWidth<740) ? <Navs value={3} /> : ""}
                 {(this.state.contentWidth>440)&&(this.state.contentWidth<590) ? <Navs value={2} /> : ""}
                 {(this.state.contentWidth>290)&&(this.state.contentWidth<440) ? <Navs value={1} /> : ""}
                 {(this.state.contentWidth<290) ? <Navs value={0} /> : ""}

          </div>


      );
  }
}

export default App;
