import React, { Component } from "react"

class MenuKontak extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kontak: "081312345678",
            alamat: "JL. Swadaya IV, Pd, Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860"
        }
    }
    render() {
        return (
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami : {this.state.kontak}</h4>
                </center>
            </div>
        )
    }
}

export default MenuKontak