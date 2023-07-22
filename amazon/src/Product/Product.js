import Product from "../ProductComponent";
import { useState, useEffect } from "react";
import ReactCardSlider from "react-card-slider-component";

import "../Product/Product.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// bkchodi imports
// import '@coreui/coreui/dist/css/coreui.min.css'
import Review from "../../src/assets/ProductImg/uplo.jpg";
import { CImage, CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react";
// import 'bootstrap/dist/css/bootstrap.min.css'
function BodyProducts() {
  const slides = [
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hFwEGKyZL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91oNY+gNzPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51QF8woKr5S._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61hpiteUo7L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/810jp1zceeL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/919fhn80zxL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61VJTCzq9oL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/617tvTiZLGL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61VJTCzq9oL._AC_SY200_.jpg",
  ];

  const slides2 = [
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Z1F2ddHWL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41MYXIeKVNL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/616xSQTPH+L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71ae+xsLMOL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51WVDV5mn9S._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51uLKcX6q3L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71fF-s5p7SL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51I8b9kYVuL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51YtTiDikPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/718398O4TVL._AC_SY200_.jpg",
  ];

  useEffect(() => {
    function_show();
  }, []);

  const [data, setdata] = useState([]);

  async function function_show() {
    const res = await fetch("/product", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    res
      .json()
      .then((ele) => {
        console.log(ele);
        setdata(ele);
        //   dt = ele
      })
      .catch((e) => {
        console.log("error");
      });
  }
  return (
    <div
      style={{
        height: "min-content",
        backgroundColor: "rgba(192,192,192,0.04)",
        // backdropFilter:"blur(20px)",
        // maskImage:
        //   "linear-gradient( to top,rgb(126, 42, 42), rgba(221, 126, 126, 0))",
        position: "relative",
        top: "-5rem",
        // border:"2px solid red"
      }}
    >
      <div
        className="row1"
        style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-evenly" }}
      >
        <Product
          text="Ikigai: The Japanese secret to a long and happy life
by Héctor García and Francesc Miralles  | 27 September 2017"
          cost="220"
          imgurl="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg"
          rating={3}
        />
        <Product
          text="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set
by Dale Carnegie, Napoleon Hill, et al. | 1 August 2019"
          cost="121.67"
          imgurl="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
        />
      
      </div>
      <div
        className="row2"
        style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-evenly" }}
      >
        <Product
          text="MI Cordless Beard Trimmer 1C, with 20 length settings, 60"
          cost="20"
          imgurl="https://m.media-amazon.com/images/I/51cOhvN5ZDL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
          text="Redmi Earbuds 3 Pro, Blue, High Definition Wireless Audio with Qualcomm chipset, Dual Drivers, Up to 30 Hours Battery Life, IPX4 Splash & Sweat Proof"
          cost="120"
          imgurl="https://m.media-amazon.com/images/I/31KhPsVZWlL._AC_UY327_FMwebp_QL65_.jpg"
          rating={5}
        />
        <Product
          text="boAt Bassheads 225 in Ear Wired Earphones with Mic(Black)"
          cost={220}
          imgurl="https://m.media-amazon.com/images/I/61iSV4o+X-L._AC_UY327_FMwebp_QL65_.jpg"
          rating={3}
        />{" "}
      </div>
      <div
        className="row3"
        style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-evenly" }}
      >
        <Product
          text="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)"
          cost="8970"
          imgurl="https://m.media-amazon.com/images/I/71deZZ0oDMS._AC_UY327_FMwebp_QL65_.jpg"
          rating={5}
        />{" "}
           <Product
          text="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set
by Dale Carnegie, Napoleon Hill, et al. | 1 August 2019"
          cost="121.67"
          imgurl="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
          text="OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          cost="18996.67"
          imgurl="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71poFSdDs5S._SX679_.jpg"
          rating={4}
        />
        <Product
          text="pTron Bullet Pro 36W PD Quick Charger, 3 Port Fast Car Charger Adapter - Compatible with All Smartphones & Tablets (Black)"
          cost="675.75"
          imgurl="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61aBH+cXL2L._SX522_.jpg"
          rating={5}
        />
        <Product
          text="boAt Bassheads 225 in Ear Wired Earphones with Mic(Black)"
          cost={220}
          imgurl="https://m.media-amazon.com/images/I/61iSV4o+X-L._AC_UY327_FMwebp_QL65_.jpg"
          rating={3}
        />
      </div>
      <div
        className="row1"
        style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-evenly" }}
      >
        <Product
          text="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set
by Dale Carnegie, Napoleon Hill, et al. | 1 August 2019"
          cost="121.67"
          imgurl="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
          text="Ikigai: The Japanese secret to a long and happy life
by Héctor García and Francesc Miralles  | 27 September 2017"
          cost="220"
          imgurl="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg"
          rating={3}
        />
        {/* <ReactCardSlider slides={slides}/> */}

        <br />
        {/* <FU dataa={data} /> */}
      </div>
      <div style={{ backgroundColor:"rgb(241,249,249)",padding:"1rem"}}>
      <h2 style={{paddingLeft:"2rem"}}>Best Sellers in Grocery & Gourmet Foods</h2>
      <div
        className="target"
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflowX: "scroll",
          overflowY: "hidden",
          width: "95vw",
          
        }}
      >
        <CImage
          className="item"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hFwEGKyZL._AC_SY200_.jpg"
          width={200}
          height={200}
        />
        <CImage className="item" src={slides[1]} width={200} height={200} />
        <CImage className="item" src={slides[2]} width={200} height={200} />
        <CImage className="item" src={slides[3]} width={200} height={200} />
        <CImage className="item" src={slides[4]} width={200} height={200} />
        <CImage className="item" src={slides[5]} width={200} height={200} />
        <CImage className="item" src={slides[6]} width={200} height={200} />
        <CImage className="item" src={slides[7]} width={200} height={200} />
        <CImage className="item" src={slides[8]} width={200} height={200} />
        <CImage className="item" src={slides[3]} width={200} height={200} />
        <CImage className="item" src={slides[2]} width={200} height={200} />
        <CImage className="item" src={slides[0]} width={200} height={200} />
      </div>
</div>

<div style={{ backgroundColor:"rgb(241,249,249)",padding:"1rem",marginTop:"3em",marginBottom:"3em"}}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "90vw",

          margin: "auto",

          marginBottom: "2rem",
          marginTop: "2rem",
          justifyContent: "space-around",
          backgroundColor:"rgb(241,249,249)"
        }}
      >
        <CCard style={{ width: "18rem" }}>
          {/* <CCardImage  orientation="top" src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg" /> */}
          <h2>Up to 60% off | Professional tools & more</h2>
          <CImage
            className="item2"
            src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg"
            width="100%"
            height={250}
          />
          <a href="https://www.amazon.in/b?ie=UTF8&node=5866078031&pf_rd_r=E6HWWQ25MBNWCAPHVYEC&pf_rd_p=acac2139-defa-48c3-a73d-58f6b68317f7&pd_rd_r=8448686f-b987-49dc-b62b-b43245be28c9&pd_rd_w=vHJuY&pd_rd_wg=8hZuj&ref_=pd_gw_unk">
            <h4 style={{ marginTop: "1rem" }}>See More</h4>
          </a>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          <h2>Discover your home with Furnitures Upto 80% off</h2>
          <CImage
            className="item2"
            src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg"
            width="100%"
            height={250}
          />

          <a href=" https://www.amazon.in/discover/rooms/?pf_rd_r=E6HWWQ25MBNWCAPHVYEC&pf_rd_p=bc896621-8cc6-4250-933a-7176d1bbf591&pd_rd_r=8448686f-b987-49dc-b62b-b43245be28c9&pd_rd_w=38bIh&pd_rd_wg=8hZuj&ref_=pd_gw_unk">
            <h4 style={{ marginTop: "1rem" }}>See More</h4>
          </a>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          {/* <CCardImage  orientation="top" src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg" /> */}
          <h2>Save up to 10% with repeat deliveries</h2>
          <CImage
            className="item2"
            src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg"
            width="100%"
            height={250}
          />
          <a href="https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=5728645031&ref_=SNS_BT_GW_QH_S10_2204&pf_rd_p=7acdc049-2175-45db-b42d-802280deb931&pd_rd_wg=8hZuj&pf_rd_r=E6HWWQ25MBNWCAPHVYEC&content-id=amzn1.sym.7acdc049-2175-45db-b42d-802280deb931&pd_rd_w=saP8q&pd_rd_r=8448686f-b987-49dc-b62b-b43245be28c9">
            <h4 style={{ marginTop: "1rem" }}>Subscribe and save</h4>
          </a>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          <h2>Frequently repurchased in Grocery</h2>

          <CImage className="item2" src={Review} width="100%" height={250} />
          <a href="/">
            <h4 style={{ marginTop: "1rem" }}>See More</h4>
          </a>
        </CCard>
      </div>
      </div>

<div style={{ backgroundColor:"rgb(241,249,249)",padding:"1rem"}}>
      <h2 style={{ paddingLeft: "2rem" }}>
        Frequently repurchased in Beauty and Personal Care
      </h2>
      <div
        className="target"
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflowX: "scroll",
          overflowY: "hidden",
          width: "90vw",
          
        }}
      >
        <CImage
          className="item"
          rounded
          thumbnail
          src={slides2[1]}
          width={200}
          height={200}
        />
        <CImage className="item" src={slides2[2]} width={200} height={200} />
        <CImage className="item" src={slides2[3]} width={200} height={200} />
        <CImage className="item" src={slides2[4]} width={200} height={200} />
        <CImage className="item" src={slides2[5]} width={200} height={200} />
        <CImage className="item" src={slides2[6]} width={200} height={200} />
        <CImage className="item" src={slides2[7]} width={200} height={200} />
        <CImage className="item" src={slides2[8]} width={200} height={200} />
        <CImage className="item" src={slides2[9]} width={200} height={200} />
        <CImage className="item" src={slides2[2]} width={200} height={200} />
        <CImage className="item" src={slides2[0]} width={200} height={200} />
      </div>
      </div>


<div id="seller" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>


{/* <Container>
<Row  >
        <Row sm={6} xs={6} md={6} lg={6}> */}

        <FU dataa={data} />
        {/* </Row>
       
      </Row>
    </Container> */}
 </div>

    </div>
  );
}

function FU(prop) {
  const i = prop.dataa.map((ele) => {
    return (
      <Product
        text={ele.Title}
        cost={ele.Price}
        imgurl={ele.ImgUrl}
        rating={ele.Rating}
      />
    );
  });
  return i;
}

export default BodyProducts;
