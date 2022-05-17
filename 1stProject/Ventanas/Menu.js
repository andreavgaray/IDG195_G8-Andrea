import React from 'react';
export default class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }
    componentDidMount() {
        this._loadInitionState().done();
    
      }
}
_IraPerfil = () => {
    this.props.navigation.navigate('Perfil');
  }