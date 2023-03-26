import React, { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";
import FormMakanan from "../form/FormMakanan";

const listmakanan = [
    {
        NamaMakanan : "Nasi Padang",
        Harga : "20.000",
    },
    {
        NamaMakanan : "Sate",
        Harga : "20.000",
    },
    {
        NamaMakanan : "Soto",
        Harga : "10.000",
    },
    {
        NamaMakanan : "Nasi Uduk",
        Harga : "10.000",
    },
    {
        NamaMakanan : "Nasi Kuning",
        Harga : "15.000",
    },
    {
        NamaMakanan : "Ayam Geprek",
        Harga : "15.000",
    },
    {
        NamaMakanan : "Pecel",
        Harga : "10.000",
    },
    {
        NamaMakanan : "Bakso",
        Harga : "10.000",
    },
]

class MenuMakanan extends Component {

    render() {
        return (
            <div>
                <h3>Daftar Makanan</h3>
                <table>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index) => {
                                return(
                                    <td key={index}>
                                        <img src={data.img} alt="Prooduct Makanan" width="150" height="100"/>
                                        <center>
                                            <p>{data.NamaMakanan}</p>
                                            <p>Harga : Rp . {data.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
                <h4>List Makanan</h4>
                {listmakanan.map((jal, index) => {
                    return(
                        <div key={index}>
                            <p>
                                {jal.NamaMakanan} | Harga Rp. {jal.Harga}
                            </p>
                        </div>
                    )
                })}
                <FormMakanan />
            </div>
        )
    }
}


export default MenuMakanan;