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
import Fun from "../public/Fun Fact.svg"
import Ceritaku from "../public/Ceritaku.svg"
import Tips from "../public/Tips.svg"
import Faustina from "../public/Faustina.svg"
import Ratih from "../public/Ratih.svg"
import Nurul from "../public/Nurul.svg"
import SHS from "../public/SHS.svg"
import Point from "../public/point.svg"
import EM1 from "../public/EM1.svg"
import EM2 from "../public/EM2.svg"
import EM3 from "../public/EM3.svg"
import Arrow from "../public/DownArrow.svg"
import Logo from "../public/Logo 2.svg"
import Kontak from "../public/Kontak.svg"
import Alamat from "../public/Alamat.svg"
import Facebook from "../public/Facebook.svg"
import Linkedin from "../public/Linkedin.svg"
import Instagram from "../public/Instagram.svg"
import Youtube from "../public/Youtube.svg"

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
                        <p style={{ fontSize: "11.5px", color: "#212121", fontWeight: "bold", textAlign: "center", transform: "translate(0%, 70%)" }}>
                            Konsultasi Sekarang
                        </p>
                        </div>
                </div>
                <div style={{ marginTop: "140px", textAlign: "center" , marginBottom:"20px" }}>
                    <p style={{ color: "#313030", fontSize:"30px"}}>
                        Cerita Studev</p>
                    <p style={{ fontSize: "13px", wordBreak: "break-word", marginTop: "5px", color: "#747474" , paddingTop:"5px"}}>
                        Inspirasi buat kamu yang bercita-cita kuliah ke luar negeri</p>
                </div>
                <div style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "20px" , marginTop:"40px"}}>
                    <Image src={Fun} alt="Fun" />
                    <Image src={Ceritaku} alt="Ceritaku" />
                    <Image src={Tips} alt="Tips" />
                </div>
                <div style={{ display: "flex", marginTop: "150px", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ flex: "1" }}>
                        <p style={{ color: "#E2626B", fontSize: "12px", fontWeight: "550", marginBottom: "20px" , marginLeft:"170px" }}>
                            - MEET OUR TUTORS
                        </p>
                        <p style={{fontSize: "28px", color: "#313030", fontWeight: "500", letterSpacing: "0%", wordBreak: "break-word", lineHeight: "1.3" , marginLeft:"170px"}}>
                            Mereka adalah lulusan<br />
                            terbaik dari kampus<br />
                            luar negeri peraih<br />
                            berbagai macam jalur<br />
                            beasiswa.
                        </p>
                    </div>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 2fr)", gap: "25px", marginRight:"170px"}}>
                        <Image src={Faustina} alt="Faustina" />
                        <Image src={Ratih} alt="Ratih" />
                        <Image src={Nurul} alt="Nurul" />
                    </div>
                </div>
            </div>
            <div style={{display: "flex", marginLeft:"200px", marginTop:"200px"}}>
                <Image src={SHS} alt="SHS" />
                <div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", wordBreak: "break-word", marginLeft:"50px", fontSize:"17px", color:"#555454", marginTop:"-60px"}}>
                    <Image src={Point} alt="point" style={{ marginBottom: "30px" }}/>
                    "The overall experience throughout my scholarship <br/>
                    journey with Studev was wholesome. Kak Anis has<br/>
                    given me so much valuable insight as well as great <br/>
                    academic and career advice. I am grateful for this <br/>
                    opportunity and the knowledge I have gained. Thank <br/>
                    you Kak Anis and Studev for your guidance and <br/>
                    support!"
                    <div style={{fontWeight:"750", fontSize:"12px", color:"#313030", marginTop:"10px", marginBottom:"10px"}}>
                        Dewi Nareswari
                    </div>
                    <div style={{fontSize:"11px", color:"#747474"}}>
                        Lolos LPDP 2022
                    </div>
                </div>
            </div>
            <div style={{marginTop: "200px", textAlign: "center" , marginBottom:"20px"}}>
                <p style={{color: "#313030", fontSize:"30px"}}>
                    Belajar Bersama Komunitas
                </p>
                <p style={{ fontSize: "13px", marginTop: "5px", color: "#747474" , paddingTop:"5px"}}>
                    Kamu juga bisa sharing dan belajar bersama komunitas Studev Talk. Ikuti eventnya tiap minggu!
                </p>
                <div style={{display:"flex", marginTop:"40px", gap:"10px", justifyContent:"center"}}>
                    <Image src={EM1} alt="Event Minggu 1"/>
                    <Image src={EM2} alt="Event Minggu 2"/>
                    <Image src={EM3} alt="Event Minggu 3"/>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "200px"}}>
                <div style={{marginLeft:"160px" ,width: "50%"}}>
                    <p style={{fontSize:"12px", color: "#E2626B", marginBottom:"8px"}}>
                        FAQ
                    </p>
                    <p style={{fontSize:"30px", marginBottom:"8px"}}>
                        Masih ingin bertanya?
                    </p>
                    <p style={{wordBreak: "break-word", fontSize:"13px", marginBottom:"15px"}}>
                        Jika ingin berbincang dengan Student Officer kami, kamu bisa menghubungi via<br/>
                        email ataupun nomor WhatsApp. Kami siap mewujudkan keinginanmu untuk<br/>
                        kuliah ke luar negeri.
                    </p>
                    <div style={{justifyContent: "right", alignItems: "right", width: "120px", height: "40px", backgroundColor: "#E2626B", borderRadius: "25px", marginTop:"20px"}}>
                        <p style={{fontSize: "11.5px", color: "white", fontWeight: "bold", textAlign: "center", transform: "translate(0%, 70%)"}}>
                            Hubungi Kami
                        </p>
                    </div>
                </div>
                <div style={{width: "55%"}}>
                    <div style={{display:"flex", alignItems: "center", width: "460px", height: "50px", backgroundColor: "white", borderRadius: "10px", marginTop:"20px", border: "1px solid #CCCCCC" }}>
                        <div style={{marginLeft:"20px", display:"flex", gap:"5px", fontWeight:"550", fontSize:"13.5px"}}>
                            <Image src={Arrow} alt="Down Arrow" /> Apakah bisa dibantu memilih programnya?
                        </div>
                    </div>
                    <div style={{display:"flex", alignItems: "center", width: "460px", height: "50px", backgroundColor: "white", borderRadius: "10px", marginTop:"20px", border: "1px solid #CCCCCC" }}>
                        <div style={{marginLeft:"20px", display:"flex", gap:"5px", fontWeight:"550", fontSize:"13.5px"}}>
                            <Image src={Arrow} alt="Down Arrow" /> Apa perbedaan private dan group class?
                        </div>
                    </div>
                    <div style={{display:"flex", alignItems: "center", width: "460px", height: "50px", backgroundColor: "white", borderRadius: "10px", marginTop:"20px", border: "1px solid #CCCCCC" }}>
                        <div style={{marginLeft:"20px", display:"flex", gap:"5px", fontWeight:"550", fontSize:"13.5px"}}>
                            <Image src={Arrow} alt="Down Arrow" /> Bagaimana dengan jadwal kelas?
                        </div>
                    </div>
                    <div style={{display:"flex", alignItems: "center", width: "460px", height: "50px", backgroundColor: "white", borderRadius: "10px", marginTop:"20px", border: "1px solid #CCCCCC" }}>
                        <div style={{marginLeft:"20px", display:"flex", gap:"5px", fontWeight:"550", fontSize:"13.5px"}}>
                            <Image src={Arrow} alt="Down Arrow" /> Apakah pembayaran dapat dilakukan dengan cicilan?
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#FFF3F3", marginTop: "90px", padding: "40px" }}>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-start" }}>
                    <div style={{ maxWidth: "500px", textAlign: "start", marginLeft:"80px" }}>
                        <Image src={Logo} alt="Logo Studev" style={{ marginBottom: "10px" }} />
                        <p style={{ fontSize: "12.5px", color: "#60697B", lineHeight:"1.7" , wordBreak: "break-word" }}>
                            Raih impianmu kuliah ke luar negeri lebih cepat! Belajar<br />
                            IELTS, TOEFL, dan git add .
                            dapatkan akses langsung dari<br />
                            mahasiswa serta kampus luar negeri pilihanmu.
                        </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "start", maxWidth: "500px" }}>
                        <Image src={Kontak} alt="Kontak" style={{ marginRight: "14px", marginLeft:"120px" }} />
                        <div>
                            <p style={{ fontSize: "14px", color:"#313030" , fontWeight: "700", marginBottom: "8px" }}>
                                Kontak
                            </p>
                            <div style={{ fontSize: "12.5px", lineHeight:"1.7" ,fontWeight: "500", color: "#60697B" }}>
                                <p>+628112835080 (CS 1)</p>
                                <p>+6281287780739 (CS 2)</p>
                                <p>+628112644277 (CS 3)</p>
                                <p>halo@studev.co.id</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "start", maxWidth: "500px", marginRight:"90px" }}>
                        <Image src={Alamat} alt="Alamat" style={{ marginRight: "14px" }} />
                        <div>
                            <p style={{ fontSize: "14px", color:"#313030" ,fontWeight: "700", marginBottom: "8px" }}>
                                Alamat
                            </p>
                            <div style={{ fontSize: "12.5px", fontWeight: "500", lineHeight:"1.7" , color: "#60697B" }}>
                                <p style={{ wordBreak: "break-word" }}>
                                    Jl. Prof. Herman Yohanes No. 1212<br />
                                    Terban, Gondokusuman, Yogyakarta<br />
                                    Daerah Istimewa Yogyakarta 55223
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "120px", marginTop: "90px", borderTop: "1px solid #D6D6D6", width: "81%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginTop: "27px" }}>
                        <p style={{ fontSize: "12.5px", color: "#60697B" }}>
                            © 2020 PT Sinar Edukasi Nusantara. Hak cipta dilindungi.
                        </p>
                        <div style={{ display: "flex", gap: "12px" }}>
                            <Image src={Facebook} alt="Facebook" />
                            <Image src={Linkedin} alt="Linkedin" />
                            <Image src={Instagram} alt="Instagram" />
                            <Image src={Youtube} alt="Youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;