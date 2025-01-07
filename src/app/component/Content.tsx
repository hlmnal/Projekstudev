import React from "react";
import Image from "next/image";
import Mainimange from "../public/MainImage.svg"
import Gis from "../public/gis.svg"
import Ppi from "../public/ppibelanda.svg"
import Ppiuk from "../public/ppiuk.svg"
import Rsk from "../public/rsk.svg"
import Idp from '../public/idp.svg'
import Niec from "../public/niec.svg"
import Tumbuh from "../public/tumbuh.svg"
import Ugm from "../public/ugm.svg"
import Uny from "../public/uny.svg"
import Undip from "../public/undip.svg"
import Upnv from "../public/upnvy.svg"
import Uins from "../public/uins.svg"
import Reuni from "../public/Reuni.svg"
import Search from "../public/Search.svg"
import Language from "../public/iconlanguage.svg"
import Scholarship from "../public/iconscholarship.svg"
import Test from "../public/icontest.svg"
import IELTSC from "../public/IELTSC.svg"
import TOEFLC from "../public/TOEFLC.svg"
import ENGC from "../public/ENGC.svg"

const Content = () => {
    return (
        <div className="mx-auto">
            <div>
                <Image src={Mainimange} alt="MainImage"/>
            </div>
            <div className="mt-20 mb-20 pl-24 pr-19 ml-20 flex items-start">
                <div className="text-container flex grid gap-5">
                    <p className={'text-first ${geistSans.variable} -mt-1'}>
                        OUR PARTNERS
                    </p>
                    <p className={'text-second ${geistSans.variable} -mt-2'}>
                        We ❤ Partners
                    </p>
                    <p className={'text-third ${geistSans.variable} break-words -mt-2'}>
                        Studev sudah banyak bekerja sama <br />
                        dengan berbagai instansi swasta  <br />
                        dan pendidikan.
                    </p>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginLeft: "120px",  gap:"85px"}}>
                    <Image src={Gis} alt="gis" />
                    <Image src={Ppi} alt="ppi" />
                    <Image src={Ppiuk} alt="ppiuk" />
                    <Image src={Rsk} alt="rsk" />
                    <Image src={Idp} alt="idp" />
                    <Image src={Niec} alt="niec" />
                    <Image src={Tumbuh} alt="tumbuh" />
                    <Image src={Ugm} alt="ugm" />
                    <Image src={Uny} alt="uny" />
                    <Image src={Undip} alt="undip" />
                    <Image src={Upnv} alt="upnv" />
                    <Image src={Uins} alt="uins" />
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", gap:"65px"}}>
                <Image src={Reuni} alt="reuni" />
                    <div className="flex flex-col gap-4">
                        <p className={'text-kln ${geistSans.variable} break-words'}>
                            Kami memberikan solusi <br /> 
                            untuk kamu yang ingin kuliah <br /> 
                            ke luar negeri.
                        </p>
                        <p className={'text-kln2 ${geistSans.variable} break-words mt-1'}>
                            Studev akan mempertemukanmu dengan para alumni kampus top dunia dari <br /> 
                            Penerima Beasiswa Bergengsi yang siap berbagi ilmu denganmu. Kuliah S1, S2, atau <br /> 
                            S3 di luar negeri gratis bukan hal yang mustahil.
                        </p>
                        <div style={{ display: "flex", alignItems: "start" , marginTop:"40px" }}>
                            <Image src={Search} alt="Search" style={{marginBottom:"5px" , marginRight: "10px" }} />
                            <div>
                                <p style={{ fontWeight: "bold" , marginLeft: "7px" , color:"#313030" }}>
                                    Persiapan Studi</p>
                                <p style={{ fontSize: "12px" , wordBreak: "break-word" , marginTop:"5px" , marginLeft: "7px" , color:"#747474" } }>
                                    Membantumu mencari <br/>
                                    beasiswa sesuai dengan <br/>
                                    negara dan jenjang</p>
                            </div>
                            <Image src={Scholarship} alt="Scholarship" style={{ marginRight: "10px" , marginLeft: "72.3px" }} />
                            <div>
                                <p style={{ fontWeight: "bold" , marginLeft: "7px" , color:"#313030"}}>
                                    Bimbingan Beasiswa</p>
                                <p style={{ fontSize: "12px" , wordBreak: "break-word" , marginTop:"5px" , marginLeft: "7px" , color:"#747474"} }>
                                    Membimbingmu menyiapkan <br/>
                                    persyaratan dokumen hingga <br/>
                                    interview</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "start" }}>
                            <Image src={Test} alt="Test" style={{marginLeft:"-1px" , marginRight: "10px" }} />
                            <div>
                                <p style={{ fontWeight: "bold" , marginLeft: "7px" , color:"#313030"}}>
                                    Persiapan Tes</p>
                                <p style={{ fontSize: "12px" , wordBreak: "break-word" , marginTop:"5px" , marginLeft: "7px" , color:"#747474"} }>
                                    Maksimalkan persiapan tes <br/>
                                    IELTS, dan TOEFL mu</p>
                            </div>
                            <Image src={Language} alt="Language" style={{ marginRight: "10px" , marginLeft: "57px" }} />
                            <div>
                                <p style={{ fontWeight: "bold" , marginLeft: "7px" , color:"#313030"}}>
                                    Belajar Bahasa Inggris</p>
                                <p style={{ fontSize: "12px" , wordBreak: "break-word" , marginTop:"5px" , marginLeft: "7px" , color:"#747474"} }>
                                Melatih kemampuanmu <br/>
                                berbahasa Inggris hingga <br/>
                                siap interview </p>
                            </div>
                        </div>
                </div>
            </div>
            <div style={{ marginTop: "30px" }}>
                <p style={{ color: "#E2626B", fontSize: "12px", fontWeight: "700", textAlign: "center", marginBottom: "10px" }}>OUR PROGRAMS</p>
                <p style={{ color: "#2E2D2D", fontSize: "30px", fontWeight: "500", textAlign: "center", wordBreak: "break-word", marginBottom: "20px" }}>
                    Berbagai program yang dapat <br /> membantumu kuliah di luar negeri lebih <br /> cepat dan mudah.
                </p>
                <div style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "20px" }}>
                    <Image src={IELTSC} alt="IELTSC" />
                    <Image src={TOEFLC} alt="TOEFLC" />
                    <Image src={ENGC} alt="ENGC" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "850px", height: "150px", backgroundColor: "#E2626B", alignContent: "center", borderRadius: "5px", margin: "0 auto", position: "relative", marginTop: "200px", gap: "200px" }}>
                    <p style={{ color: "white", fontSize: "24px", wordBreak: "break-word" }}>Kamu bisa konsultasi gratis sebelum <br /> memilih program.</p>
                        <div style={{ justifyContent: "right", alignItems: "right", width: "150px", height: "40px", backgroundColor: "white", borderRadius: "25px" }}>
                    <p style={{ fontSize: "11.5px", color: "#212121", fontWeight: "bold", textAlign: "center", transform: "translate(0%, 70%)" }}>Konsultasi Sekarang</p>
                        </div>
                </div>
                <div style={{ marginTop: "140px", textAlign: "center" }}>
                    <p style={{ color: "#313030", fontSize:"30px"}}>
                        Cerita Studev</p>
                    <p style={{ fontSize: "13px", wordBreak: "break-word", marginTop: "5px", color: "#747474" , paddingTop:"5px"}}>
                        Inspirasi buat kamu yang bercita-cita kuliah ke luar negeri</p>
                </div>
            </div>
        </div>
    );
};

export default Content;