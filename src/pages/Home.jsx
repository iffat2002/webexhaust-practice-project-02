import React from "react";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import heroBull from "../assets/images/hero-bull.webp";
import bullOverlay from "../assets/images/hero-blue-overlay.svg";
import logoCompany from "../assets/icons/logo-amazon.svg";
import omMain from "../assets/images/our-mission-img.webp";
import omGreenBig from "../assets/images/om-green-big.png";
import omGreenSmall from "../assets/images/om-green-small.png";
import omBlueBig from "../assets/images/om-blue-big.webp";
import omBlueSmall from "../assets/images/om-blue-small.webp";
import omText from "../assets/images/om-text.png";
import bulb from "../assets/icons/bulb.svg";
import crown from "../assets/icons/crown.svg";
import male from "../assets/images/male.webp";
import load from "../assets/icons/load.svg";
import logoMeta from "../assets/images/logo-meta.png";
import logoSandbox from "../assets/images/logo-sandbox.svg";
import logoCompound from "../assets/images/logo-compound.svg";
import onlineMeeting from "../assets/images/online-meeting.webp";
import nico from "../assets/images/nico.webp";
import logoKephi from "../assets/images/logo-kephi.svg";
import eventImg from "../assets/images/event-img-1.webp";
import flag from "../assets/images/flag.svg";
import bullElevator from "../assets/images/bull-elevator-img.webp";
import nft from "../assets/images/NFT1.webp";
import Footer from "../components/Footer";
import journalImg from "../assets/images/journal-img-1.webp";
import journalImg3 from "../assets/images/journal-img-3.webp";
import store from "../assets/images/storefront-img.webp";

import limitedEdition from "../assets/images/limited-edition.svg";
import wave from "../assets/images/wave.svg";

const Home = () => {
  return (
    <div className="uptrend-agency">
      <main className="uptrend-content">
        <Header />
        <section className="hero-section">
          <div className="box">
            <div className="hero-content">
              <div></div>
              <div>
                <h1 className="first-line">LEADING MARKETING PARTNER</h1>
                <div className="heading">
                  <h1 className="first-line">BUILDING</h1>{" "}
                  <h1 className="greenbox-inner"> BRAND IMPACT</h1>
                </div>
              </div>
              <div className="hero-icon-side-box">
                <div style={{ height: "7.5rem" }}></div>
                <a href="/" label="whatsapp">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9998 23.8286C9.82026 23.8363 7.68222 23.2329 5.82835 22.0868L3.22264 22.7726C2.9512 22.844 2.66572 22.8427 2.39496 22.7687C2.12419 22.6948 1.87769 22.5508 1.68026 22.3513C1.48283 22.1518 1.34144 21.9038 1.27034 21.6322C1.19923 21.3607 1.20091 21.0752 1.27521 20.8046L1.96092 18.2674C1.32997 17.2601 0.858139 16.1614 0.562064 15.0103C0.230199 13.745 0.107437 12.434 0.198635 11.1291C0.360199 8.92179 1.13746 6.80397 2.44217 5.01616C3.74687 3.22836 5.52673 1.84222 7.57964 1.01513C9.63255 0.18805 11.8762 -0.0468281 14.0559 0.337169C16.2356 0.721167 18.264 1.70865 19.9106 3.18749C21.5573 4.66633 22.7563 6.57727 23.3715 8.7033C23.9867 10.8293 23.9934 13.0853 23.391 15.2149C22.7885 17.3446 21.6009 19.2627 19.9631 20.7513C18.3253 22.24 16.3028 23.2396 14.1255 23.6366C13.4242 23.7651 12.7127 23.8293 11.9998 23.8286ZM5.82835 20.3657C6.12632 20.3658 6.41837 20.4489 6.67178 20.6057C7.59563 21.1813 8.60806 21.6007 9.66835 21.8468C11.0188 22.158 12.4183 22.1929 13.7826 21.9497C15.5936 21.6261 17.2817 20.8141 18.6649 19.6013C20.0481 18.3885 21.0738 16.821 21.6314 15.0679C22.1889 13.3148 22.2571 11.4428 21.8286 9.65376C21.4 7.86477 20.4911 6.22678 19.1998 4.91656C17.8392 3.52853 16.1069 2.56256 14.211 2.13455C12.315 1.70653 10.3358 1.83466 8.51079 2.50355C6.68582 3.17244 5.0926 4.35369 3.92229 5.90556C2.75198 7.45743 2.05429 9.31402 1.91292 11.2526C1.74803 13.4213 2.28667 15.5855 3.44892 17.424C3.56721 17.6131 3.64531 17.8246 3.67834 18.0452C3.71137 18.2658 3.69863 18.4908 3.64092 18.7063L2.95521 21.0994L5.48549 20.4206C5.60402 20.3879 5.72602 20.3694 5.84892 20.3657H5.82835Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M8.67423 7.42629C8.86749 7.42763 9.0564 7.48374 9.21904 7.58812C9.38168 7.6925 9.51138 7.84087 9.59309 8.01601L10.1554 9.20915C10.2495 9.41143 10.2894 9.63466 10.2714 9.85701C10.2534 10.0794 10.178 10.2932 10.0525 10.4777C9.91489 10.6783 9.83784 10.9142 9.83054 11.1574C9.82325 11.4005 9.88602 11.6407 10.0114 11.8491C10.5747 12.8019 11.4174 13.5583 12.4251 14.016C12.6563 14.1108 12.9105 14.134 13.155 14.0827C13.3995 14.0313 13.623 13.9078 13.7965 13.728L13.8582 13.6663C14.046 13.4788 14.287 13.3539 14.5484 13.3085C14.8098 13.2631 15.0788 13.2994 15.3188 13.4126L16.0799 13.776C16.2356 13.8497 16.3748 13.9541 16.4892 14.0828C16.6037 14.2115 16.691 14.3619 16.7461 14.5251C16.8011 14.6883 16.8227 14.8609 16.8096 15.0326C16.7965 15.2043 16.7489 15.3716 16.6697 15.5246C16.2994 16.2103 15.4559 16.8274 13.5428 16.4366C10.1142 15.7509 7.79652 11.9246 7.49481 11.4034L7.43309 11.28C7.26852 10.8754 6.47995 8.72915 8.11881 7.57029C8.28363 7.46378 8.47842 7.41328 8.67423 7.42629Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a href="/" label="twitter">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8216 9.38742H11.6296H11.3691C8.77741 9.14258 6.30195 8.19413 4.2102 6.64457C3.33331 5.97868 2.53093 5.21999 1.81705 4.38171C1.74096 4.29616 1.68247 4.19647 1.6449 4.08831C1.60734 3.98016 1.59145 3.86567 1.59814 3.75137C1.61164 3.52054 1.71629 3.30453 1.88905 3.15085C2.06182 2.99718 2.28856 2.91843 2.51939 2.93193C2.75023 2.94544 2.96624 3.05008 3.11991 3.22285C3.74853 3.96555 4.45677 4.637 5.23191 5.22514C6.94141 6.49876 8.94748 7.31535 11.0605 7.59771C11.0398 6.24791 11.5296 4.94009 12.4319 3.936C12.9709 3.31703 13.6419 2.8269 14.3955 2.50173C15.1491 2.17656 15.9661 2.02463 16.7862 2.05714C18.084 2.09665 19.3227 2.60872 20.2696 3.49714C20.2981 3.51872 20.3235 3.5441 20.3451 3.57257C20.5439 3.792 21.2913 4.45714 22.4502 3.57257C22.6321 3.43435 22.8614 3.37404 23.0877 3.40491C23.314 3.43577 23.5188 3.55528 23.6571 3.73714C23.7953 3.919 23.8556 4.14832 23.8247 4.37465C23.7939 4.60098 23.6743 4.80578 23.4925 4.944C22.8755 5.49365 22.0679 5.77989 21.2425 5.74144C20.4172 5.70299 19.6396 5.34291 19.0765 4.73828C18.4296 4.14414 17.5888 3.80539 16.7108 3.78514C16.1472 3.76591 15.5863 3.87151 15.0682 4.09437C14.5502 4.31724 14.0878 4.65185 13.7142 5.07428C13.3498 5.48508 13.0829 5.97284 12.9333 6.5012C12.7837 7.02955 12.7553 7.58486 12.8502 8.12571C12.889 8.29482 12.8855 8.47088 12.84 8.63831C12.7946 8.80575 12.7086 8.95941 12.5896 9.08571C12.4909 9.18841 12.3712 9.26856 12.2387 9.32063C12.1061 9.37271 11.9638 9.3955 11.8216 9.38742ZM7.98848 21.9429C5.47121 21.9196 3.00446 21.2338 0.836483 19.9543C0.579471 19.8349 0.372996 19.6284 0.253626 19.3714C0.188841 19.236 0.161082 19.0858 0.173171 18.9361C0.185259 18.7864 0.236765 18.6426 0.322451 18.5193C0.408137 18.396 0.524946 18.2976 0.661002 18.2341C0.797058 18.1706 0.947508 18.1442 1.09705 18.1577C2.63725 18.302 4.18835 18.0395 5.59534 17.3966C4.72053 17.0603 3.94959 16.4999 3.35991 15.7714C3.22351 15.5896 3.16495 15.361 3.1971 15.1359C3.22925 14.9109 3.34948 14.7078 3.53134 14.5714C3.7132 14.435 3.9418 14.3765 4.16684 14.4086C4.39189 14.4408 4.59494 14.561 4.73134 14.7429C5.41705 15.6549 7.19305 16.176 7.81705 16.2377C7.98989 16.2554 8.15325 16.3252 8.28551 16.4379C8.41777 16.5506 8.51266 16.7008 8.55762 16.8686C8.61325 17.0427 8.61127 17.2301 8.55198 17.4031C8.49269 17.576 8.37925 17.7252 8.22848 17.8286C7.07022 18.7022 5.74436 19.3278 4.33363 19.6663C6.9214 20.4763 9.70332 20.4161 12.2536 19.4949C14.636 18.6619 16.6966 17.1019 18.1447 15.0349C19.5928 12.968 20.3553 10.4984 20.3245 7.97485C20.3227 7.86204 20.3433 7.75 20.3852 7.64525C20.4271 7.5405 20.4895 7.44514 20.5686 7.36473C20.6478 7.28431 20.7421 7.22045 20.8462 7.17686C20.9502 7.13328 21.0619 7.11084 21.1748 7.11085C21.4015 7.11265 21.6185 7.20353 21.7789 7.36389C21.9392 7.52424 22.0301 7.74122 22.0319 7.968C22.0605 10.8435 21.1877 13.6558 19.536 16.0098C17.8842 18.3638 15.5366 20.1413 12.8228 21.0926C11.2692 21.6404 9.63575 21.9277 7.98848 21.9429ZM1.63877 10.3269C2.15208 10.902 2.75677 11.3886 3.42848 11.7669C4.14185 12.2554 4.97829 12.5335 5.8422 12.5691C6.06788 12.5639 6.28287 12.4719 6.4425 12.3123C6.60212 12.1527 6.69411 11.9377 6.69934 11.712C6.69755 11.4852 6.60667 11.2682 6.44631 11.1079C6.28595 10.9475 6.06897 10.8566 5.8422 10.8549H5.59534C5.45134 10.8549 5.59534 10.8549 5.63648 10.8549C5.67763 10.8549 5.52677 10.8549 5.5062 10.8549L5.2662 10.7863C5.21134 10.7863 5.05363 10.7383 5.0262 10.6971C4.99877 10.656 5.16334 10.7589 5.0262 10.6971L4.90963 10.6423L4.68334 10.5257L4.25134 10.2857L3.83991 10.0251L3.6342 9.888L3.5382 9.81257C3.28889 9.60572 3.05933 9.37616 2.85248 9.12685C2.69079 8.96731 2.47278 8.87785 2.24563 8.87785C2.01847 8.87785 1.80046 8.96731 1.63877 9.12685C1.48243 9.29021 1.39517 9.5076 1.39517 9.73371C1.39517 9.95982 1.48243 10.1772 1.63877 10.3406V10.3269Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a href="/" label="linkedin">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3965 23.8286H6.60339C4.89807 23.8268 3.26312 23.1485 2.05728 21.9427C0.85144 20.7368 0.173202 19.1019 0.171387 17.3966V6.60343C0.173202 4.89811 0.85144 3.26316 2.05728 2.05732C3.26312 0.851482 4.89807 0.173244 6.60339 0.171429H17.3965C19.1018 0.173244 20.7368 0.851482 21.9426 2.05732C23.1485 3.26316 23.8267 4.89811 23.8285 6.60343V17.3966C23.8267 19.1019 23.1485 20.7368 21.9426 21.9427C20.7368 23.1485 19.1018 23.8268 17.3965 23.8286ZM6.60339 1.88571C5.35273 1.88753 4.15381 2.38515 3.26946 3.2695C2.38511 4.15385 1.88749 5.35277 1.88567 6.60343V17.3966C1.88749 18.6472 2.38511 19.8461 3.26946 20.7305C4.15381 21.6148 5.35273 22.1125 6.60339 22.1143H17.3965C18.6472 22.1125 19.8461 21.6148 20.7305 20.7305C21.6148 19.8461 22.1124 18.6472 22.1142 17.3966V6.60343C22.1124 5.35277 21.6148 4.15385 20.7305 3.2695C19.8461 2.38515 18.6472 1.88753 17.3965 1.88571H6.60339Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M7.17259 10.1623H7.16574C6.51814 10.1623 5.99316 10.6873 5.99316 11.3349V16.5051C5.99316 17.1527 6.51814 17.6777 7.16574 17.6777H7.17259C7.82019 17.6777 8.34516 17.1527 8.34516 16.5051V11.3349C8.34516 10.6873 7.82019 10.1623 7.17259 10.1623Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M7.17259 6.32229C6.93875 6.32093 6.70978 6.38912 6.51477 6.5182C6.31977 6.64727 6.16754 6.8314 6.07742 7.04719C5.9873 7.26298 5.96337 7.50069 6.00866 7.73011C6.05395 7.95954 6.16642 8.17032 6.33178 8.33568C6.49713 8.50103 6.70792 8.6135 6.93734 8.65879C7.16676 8.70408 7.40447 8.68015 7.62026 8.59003C7.83605 8.49991 8.02018 8.34768 8.14926 8.15268C8.27833 7.95768 8.34652 7.7287 8.34517 7.49486C8.34337 7.18443 8.21925 6.88722 7.99974 6.66771C7.78023 6.4482 7.48302 6.32409 7.17259 6.32229ZM13.7143 11.7669C13.9429 11.7026 14.1836 11.6939 14.4162 11.7416C14.6488 11.7893 14.8666 11.892 15.0515 12.0411C15.2669 12.2939 15.429 12.5875 15.528 12.9045C15.627 13.2215 15.6608 13.5553 15.6275 13.8857V16.5051C15.6293 16.8168 15.7543 17.115 15.9753 17.3347C16.1963 17.5544 16.4953 17.6777 16.8069 17.6777C17.1179 17.6777 17.4161 17.5542 17.636 17.3343C17.8559 17.1144 17.9795 16.8161 17.9795 16.5051V13.0766C17.9752 12.3516 17.7763 11.6412 17.4035 11.0194L17.3692 10.9783C17.108 10.6499 16.775 10.3858 16.3958 10.2063C16.0166 10.0268 15.6013 9.93665 15.1817 9.94286C14.7175 9.90953 14.2527 9.99985 13.8347 10.2046C13.4167 10.4094 13.0605 10.7213 12.8023 11.1086L12.4869 11.568V11.2937C12.4869 10.9827 12.3633 10.6845 12.1434 10.4646C11.9235 10.2447 11.6253 10.1211 11.3143 10.1211C11.0033 10.1211 10.7051 10.2447 10.4852 10.4646C10.2653 10.6845 10.1417 10.9827 10.1417 11.2937V16.464C10.1417 16.775 10.2653 17.0732 10.4852 17.2931C10.7051 17.513 11.0033 17.6366 11.3143 17.6366C11.4685 17.6375 11.6214 17.6078 11.7641 17.5492C11.9068 17.4906 12.0364 17.4042 12.1455 17.2952C12.2545 17.1861 12.3409 17.0565 12.3995 16.9138C12.4581 16.7711 12.4878 16.6182 12.4869 16.464V13.0286C12.9463 11.8629 13.7143 11.7737 13.7143 11.7669Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a href="/" label="instagram">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3965 23.8286H6.60339C4.89807 23.8268 3.26312 23.1485 2.05728 21.9427C0.85144 20.7368 0.173202 19.1019 0.171387 17.3966V6.60343C0.173202 4.89811 0.85144 3.26316 2.05728 2.05732C3.26312 0.851482 4.89807 0.173244 6.60339 0.171429H17.3965C19.1018 0.173244 20.7368 0.851482 21.9426 2.05732C23.1485 3.26316 23.8267 4.89811 23.8285 6.60343V17.3966C23.8267 19.1019 23.1485 20.7368 21.9426 21.9427C20.7368 23.1485 19.1018 23.8268 17.3965 23.8286ZM6.60339 1.88571C5.35273 1.88753 4.15381 2.38515 3.26946 3.2695C2.38511 4.15385 1.88749 5.35277 1.88567 6.60343V17.3966C1.88749 18.6472 2.38511 19.8461 3.26946 20.7305C4.15381 21.6148 5.35273 22.1125 6.60339 22.1143H17.3965C18.6472 22.1125 19.8461 21.6148 20.7305 20.7305C21.6148 19.8461 22.1124 18.6472 22.1142 17.3966V6.60343C22.1124 5.35277 21.6148 4.15385 20.7305 3.2695C19.8461 2.38515 18.6472 1.88753 17.3965 1.88571H6.60339Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M12 18.192C10.7795 18.192 9.58627 17.8301 8.57138 17.1519C7.5565 16.4738 6.76549 15.51 6.29839 14.3823C5.83129 13.2546 5.70907 12.0137 5.9472 10.8166C6.18532 9.61944 6.7731 8.5198 7.63619 7.65671C8.49927 6.79362 9.59892 6.20585 10.7961 5.96772C11.9932 5.7296 13.2341 5.85181 14.3617 6.31891C15.4894 6.78601 16.4533 7.57702 17.1314 8.59191C17.8095 9.6068 18.1715 10.8 18.1715 12.0206C18.1715 13.6573 17.5213 15.2271 16.3639 16.3844C15.2065 17.5418 13.6368 18.192 12 18.192ZM12 7.54286C11.1127 7.53879 10.2441 7.79846 9.50465 8.28891C8.76515 8.77936 8.18804 9.47847 7.84659 10.2975C7.50513 11.1165 7.41473 12.0185 7.58685 12.8891C7.75896 13.7596 8.18584 14.5593 8.8133 15.1867C9.44075 15.8142 10.2405 16.2411 11.111 16.4132C11.9815 16.5853 12.8835 16.4949 13.7025 16.1535C14.5216 15.812 15.2207 15.2349 15.7111 14.4954C16.2016 13.7559 16.4613 12.8873 16.4572 12C16.45 10.8201 15.9781 9.6906 15.1438 8.85627C14.3094 8.02195 13.1799 7.55005 12 7.54286ZM18.1852 6.74743C18.458 6.74743 18.7196 6.63906 18.9125 6.44617C19.1054 6.25327 19.2138 5.99165 19.2138 5.71886C19.2138 5.44606 19.1054 5.18444 18.9125 4.99155C18.7196 4.79865 18.458 4.69028 18.1852 4.69028C17.9124 4.69028 17.6508 4.79865 17.4579 4.99155C17.265 5.18444 17.1566 5.44606 17.1566 5.71886C17.1566 5.99165 17.265 6.25327 17.4579 6.44617C17.6508 6.63906 17.9124 6.74743 18.1852 6.74743Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a href="/" label="facebook">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.863 7.75543C17.4816 7.71774 17.0966 7.75919 16.732 7.87719C16.3674 7.99518 16.0311 8.18717 15.7441 8.44114C15.367 8.83854 15.1603 9.36765 15.1681 9.91543V12.4183C15.1672 12.4711 15.1768 12.5235 15.1964 12.5726C15.216 12.6216 15.2451 12.6663 15.2821 12.704C15.3192 12.7416 15.3633 12.7715 15.412 12.7919C15.4607 12.8124 15.513 12.8229 15.5658 12.8229H17.0607C17.1826 12.823 17.3031 12.8499 17.4135 12.9015C17.524 12.9531 17.6219 13.0283 17.7003 13.1217C17.7787 13.2151 17.8357 13.3245 17.8673 13.4423C17.899 13.56 17.9045 13.6833 17.8835 13.8034V13.8583C17.8468 14.0513 17.7438 14.2255 17.5923 14.3507C17.4408 14.4759 17.2503 14.5443 17.0538 14.544H15.5521C15.4466 14.544 15.3455 14.5859 15.2709 14.6605C15.1963 14.7351 15.1544 14.8362 15.1544 14.9417V22.0869C15.1544 22.1988 15.1321 22.3096 15.0889 22.4128C15.0457 22.5161 14.9823 22.6097 14.9025 22.6882C14.8228 22.7667 14.7281 22.8285 14.6242 22.8701C14.5203 22.9116 14.4092 22.9321 14.2973 22.9303H14.0915C13.8714 22.9249 13.6621 22.8337 13.5084 22.6761C13.3546 22.5185 13.2686 22.307 13.2687 22.0869V14.8937C13.2696 14.8412 13.26 14.7891 13.2403 14.7404C13.2206 14.6918 13.1914 14.6475 13.1543 14.6104C13.1171 14.5733 13.0729 14.544 13.0243 14.5244C12.9756 14.5047 12.9235 14.4951 12.871 14.496H11.3898C11.1771 14.4965 10.9723 14.4159 10.8169 14.2707C10.6615 14.1255 10.5672 13.9265 10.5533 13.7143C10.5523 13.6042 10.5734 13.495 10.6151 13.3931C10.6568 13.2912 10.7184 13.1986 10.7962 13.1207C10.8741 13.0428 10.9667 12.9813 11.0686 12.9395C11.1705 12.8978 11.2797 12.8768 11.3898 12.8777H12.9053C12.9581 12.8777 13.0103 12.8672 13.0591 12.8468C13.1078 12.8264 13.1519 12.7965 13.1889 12.7588C13.226 12.7212 13.2551 12.6765 13.2747 12.6274C13.2943 12.5784 13.3039 12.5259 13.303 12.4731V9.49029C13.3023 8.98829 13.4119 8.49228 13.624 8.03728C13.8361 7.58229 14.1455 7.17942 14.5304 6.85714C15.2161 6.31543 16.471 6.26057 17.479 6.336C17.6906 6.35153 17.8886 6.44627 18.0335 6.60132C18.1784 6.75638 18.2595 6.96036 18.2607 7.17257C18.2607 7.17257 18.247 7.74172 17.863 7.75543Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M17.3965 23.8286H6.60339C4.89807 23.8268 3.26312 23.1485 2.05728 21.9427C0.85144 20.7368 0.173202 19.1019 0.171387 17.3966V6.60343C0.173202 4.89811 0.85144 3.26316 2.05728 2.05732C3.26312 0.851478 4.89807 0.17324 6.60339 0.171425H17.3965C19.1018 0.17324 20.7368 0.851478 21.9426 2.05732C23.1485 3.26316 23.8267 4.89811 23.8285 6.60343V17.3966C23.8267 19.1019 23.1485 20.7368 21.9426 21.9427C20.7368 23.1485 19.1018 23.8268 17.3965 23.8286ZM6.60339 1.88571C5.35273 1.88752 4.15381 2.38515 3.26946 3.2695C2.38511 4.15385 1.88749 5.35277 1.88567 6.60343V17.3966C1.88749 18.6472 2.38511 19.8461 3.26946 20.7305C4.15381 21.6148 5.35273 22.1125 6.60339 22.1143H17.3965C18.6472 22.1125 19.8461 21.6148 20.7305 20.7305C21.6148 19.8461 22.1124 18.6472 22.1142 17.3966V6.60343C22.1124 5.35277 21.6148 4.15385 20.7305 3.2695C19.8461 2.38515 18.6472 1.88752 17.3965 1.88571H6.60339Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="hero-bottom">
                <h4>
                  Trusted by Fortune 500s
                  <br />
                  and startups
                </h4>
                {/* <div className="swiper">
              <Marquee>
            <div className="hero-swiper">
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
              <img src={logoCompany} alt="company logo" width={113} height={32} />
            </div>
            </Marquee>
            </div> */}
              </div>
            </div>
          </div>
          <img
            src={heroBull}
            alt="HeroBull"
            width="500"
            height="743"
            className="hero-bull"
          />
          <img
            src={bullOverlay}
            alt="HeroBlueOverlay"
            width="1796"
            height="1451"
            className="hero-blue-overlay"
          />
        </section>
        <section className="our-mission-section">
          <div className="box">
            <div className="our-mission-content">
              <div className="our-mission-left">
                <div className="our-mission-img-box">
                  <img
                    src={omMain}
                    className="om-main-img"
                    width={665}
                    height={763}
                    alt="main"
                  ></img>
                  <img
                    src={omGreenBig}
                    className="om-green-big"
                    width={348}
                    height={348}
                    alt="big green circle"
                  ></img>
                  <img
                    src={omGreenSmall}
                    className="om-green-small"
                    width={43}
                    height={44}
                    alt="small green circle"
                  ></img>
                  <img
                    src={omBlueBig}
                    className="om-blue-big"
                    width={408}
                    height={628}
                    alt="big blue circle"
                  ></img>
                  <img
                    src={omBlueSmall}
                    className="om-blue-small"
                    width={65}
                    height={65}
                    alt="small blue circle"
                  ></img>
                  <img
                    src={omText}
                    className="om-text"
                    width={252}
                    height={78}
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="our-mission-right">
                <h2>Our Mission</h2>
                <div className="mission-text-img-box">
                  <img src={bulb} width={90} height={90}></img>
                  <h5>
                    Enable <b>industry solutions</b> design for innovators
                  </h5>
                </div>
                <div className="mission-text-img-box">
                  <img src={crown} width={90} height={90}></img>
                  <h5>
                    Become the premier <b>marketing trendsetter</b>
                  </h5>
                </div>
                <div className="mission-text-img-box">
                  <img src={load} width={90} height={90}></img>
                  <h5>
                    Leverage <b>data science</b> to deliver results
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="expertise-section">
            <div className="box box-p">
              <h2 className="expertise-heading">EXPERTISE</h2>
              <div className="expertise-grid">
                <div className="expertise-grid-card card-1">
                  <div className="expertise-top-text">
                    <a target="_blank" href="/influencermarketing">
                      Influencer <br />
                    </a>
                    <span>Marketing</span>
                  </div>
                  <h5>
                    #1 international content studio supported by{" "}
                    <b>120,000+ target influencers</b> in 185 countries
                  </h5>
                  <img src={male} width={230} height={496}></img>
                </div>
                <div className="expertise-grid-card card-2">
                  <div className="expertise-top-text">
                    <a target="_blank" href="/influencermarketing">
                      metaverse <br />
                    </a>
                    <span>promotion</span>
                  </div>
                  <h5>
                    Establish brand presence in the Metaverse{" "}
                    <b>with interactive experiences</b>
                  </h5>
                  <div className="img-grid">
                    <img src={logoMeta} width={129} height={73}></img>
                    <img src={logoSandbox} width={129} height={73}></img>
                  </div>
                </div>
                <div className="expertise-grid-card card-3">
                  <div className="expertise-top-text">
                    <a target="_blank" href="/influencermarketing">
                      INVESTOR <br />
                    </a>
                    <span>RELATIONS</span>
                  </div>
                  <h5>
                    Uptrend Venture partners assist brands with{" "}
                    <b>scaling and growth</b>
                  </h5>
                  <div className="img-grid">
                    <img src={logoCompound} width={129} height={73}></img>
                  </div>
                </div>
                <div className="expertise-grid-card card-4">
                  <div className="expertise-top-text">
                    <a target="_blank" href="/influencermarketing">
                      Event <br />
                    </a>
                    <span>Marketing</span>
                  </div>
                  <h5>
                    <b>We guide brands</b> through event planning of any
                    magnitude
                  </h5>
                  <img src={onlineMeeting} width={230} height={496}></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="backedby-section">
          <div className="box box-p">
            <h3 className="head-subhead">
              Our partners are backed
              <br />
              <span>by venture capital’s elite</span>
            </h3>
            <div className="logo-swiper"></div>
          </div>
        </section>

        <section className="highly-regarded-section">
          <div className="box box-p">
            <div className="section-heading-box">
              <h3 className="head-subhead">
                HIGHLY REGARDED
                <br></br>
                <span>BY INDUSTRY PARTNER</span>
              </h3>
            </div>
            <div className="highly-regarded-grid">
              <div className="highly-regarded-card">
                <div className="hrg-top">
                  <div className="hrgc-head">
                    <img src={nico} alt="nico" width={110} height={110} />
                    <div className="hrgc-head-name">
                      <a href="/">
                        <h4>Nico Verderosa </h4>
                      </a>
                      <a href="/">
                        <h6>@Mighty_PirateTM</h6>
                      </a>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div class="hrgc-head">
                    <a href="/">
                      <img
                        alt="companyLogo16"
                        width="76"
                        height="76"
                        src={logoKephi}
                      />
                    </a>
                    <div class="hrgc-head-name">
                      <a href="/">
                        <h6>Kephi Gallery</h6>
                      </a>
                      <a href="/">
                        <p>Chief Operation Officer</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-card">
                <div className="hrg-top">
                  <div className="hrgc-head">
                    <img src={nico} alt="nico" width={110} height={110} />
                    <div className="hrgc-head-name">
                      <a href="/">
                        <h4>Nico Verderosa </h4>
                      </a>
                      <a href="/">
                        <h6>@Mighty_PirateTM</h6>
                      </a>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div class="hrgc-head">
                    <a href="/">
                      <img
                        alt="companyLogo16"
                        width="76"
                        height="76"
                        src={logoKephi}
                      />
                    </a>
                    <div class="hrgc-head-name">
                      <a href="/">
                        <h6>Kephi Gallery</h6>
                      </a>
                      <a href="/">
                        <p>Chief Operation Officer</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-card">
                <div className="hrg-top">
                  <div className="hrgc-head">
                    <img src={nico} alt="nico" width={110} height={110} />
                    <div className="hrgc-head-name">
                      <a href="/">
                        <h4>Nico Verderosa </h4>
                      </a>
                      <a href="/">
                        <h6>@Mighty_PirateTM</h6>
                      </a>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div class="hrgc-head">
                    <a href="/">
                      <img
                        alt="companyLogo16"
                        width="76"
                        height="76"
                        src={logoKephi}
                      />
                    </a>
                    <div class="hrgc-head-name">
                      <a href="/">
                        <h6>Kephi Gallery</h6>
                      </a>
                      <a href="/">
                        <p>Chief Operation Officer</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="events-section">
          <div className="box">
            <div className="uptrendevent-box">
              <div class="ueg-right">
                <h3>UPTREND EVENTS</h3>
              </div>
              <div class="uptrends-events-grid">
                <div class="uptrends-events-img-grid">
                  <span>Meetup</span>
                  <img alt="EventImg" width="685" height="480" src={eventImg} />
                  <h4>
                    Meetup in Turkey{" "}
                    <img alt="" width="640" height="480" src={flag} />
                  </h4>
                  <p>
                    Our meetup attracted attention from finance influencers,
                    business executives, and key industry leaders. The event was
                    higly regarded by Uptrend's partners.
                  </p>
                </div>
                <div class="uptrends-events-img-grid">
                  <span>Meetup</span>
                  <img alt="EventImg" width="685" height="480" src={eventImg} />
                  <h4>
                    Meetup in Turkey{" "}
                    <img alt="" width="640" height="480" src={flag} />
                  </h4>
                  <p>
                    Our meetup attracted attention from finance influencers,
                    business executives, and key industry leaders. The event was
                    higly regarded by Uptrend's partners.
                  </p>
                </div>
                <div class="uptrends-events-img-grid">
                  <span>Meetup</span>
                  <img alt="EventImg" width="685" height="480" src={eventImg} />
                  <h4>
                    Meetup in Turkey{" "}
                    <img alt="" width="640" height="480" src={flag} />
                  </h4>
                  <p>
                    Our meetup attracted attention from finance influencers,
                    business executives, and key industry leaders. The event was
                    higly regarded by Uptrend's partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="form-section">
          <div className="box">
            <div className="form-content">
              <div className="form">
                <h3>
                  READY TO START A <br />
                  NEW UPTREND?
                </h3>
                <form>
                  <div className="form-grid">
                    <input
                      name="firstName"
                      className="form-input"
                      type="text"
                      placeholder="First Name"
                    ></input>
                    <input
                      name="lastName"
                      className="form-input"
                      type="text"
                      placeholder="Last Name"
                    />
                    <input
                      name="companyEmail"
                      className="form-input"
                      type="text"
                      placeholder="Company Email"
                    ></input>
                    <input
                      name="contact"
                      className="form-input"
                      type="text"
                      placeholder="Telegramm or WhatsApp"
                    />
                    <input
                      name="website"
                      className="form-input"
                      type="text"
                      placeholder="Website"
                    ></input>
                    <input
                      name="source"
                      className="form-input"
                      type="text"
                      placeholder="How can we lend a helping hand?"
                    />
                  </div>
                  <button class="btn-green">SEND</button>
                </form>
              </div>
              <div className="form-section-img">
                <img src={bullElevator} width={525} height={731}></img>
              </div>
            </div>
          </div>
        </div>
        <section className="nfts-section">
          <div className="box">
            <div className="nfts-heading">
              <div>
                <h3 className="head-subhead">UPTREND NFTS</h3>
                <p>
                  Art evokes self-expression and deep thought. We support
                  digital artists and collect exclusive NFTs that showcase our
                  ideals
                </p>
              </div>
            </div>
            <Marquee>
              <div className="nfts-swiper">
                <img
                  src={nft}
                  className="nft-img"
                  alt="earth nft"
                  width={580}
                  height={600}
                />
                <img
                  src={nft}
                  className="nft-img"
                  alt="earth nft"
                  width={580}
                  height={600}
                />
                <img
                  src={nft}
                  className="nft-img"
                  alt="earth nft"
                  width={580}
                  height={600}
                />
                <img
                  src={nft}
                  className="nft-img"
                  alt="earth nft"
                  width={580}
                  height={600}
                />
              </div>
            </Marquee>
          </div>
        </section>

        <section className="store-section">
          <img src={store} width={2500} height={1129}></img>
          <div className="store-details">
            <h2>UPTREND STORE</h2>
            <img src={limitedEdition} width={191} height={71} />
            <a href="/store">
              {" "}
              <button class="btn-green">SHOW IT!</button>
            </a>
          </div>
          <div className="wave-box">
            <img src={wave} height={350} width={5882} />
            <a href="/sandbox">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              <h2>
                <span>OFFICE IN THE</span> <br />
                SANDBOX
              </h2>
            </a>
            <div class="box store-right-arrow">
              <a href="/sandbox">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="journal-section">
          <div className="box">
            <div className="journal-header">
              <h2>Uptrend Journal</h2>
              <a href="/journal" className="arrow-link">
                <span>READ JOURNAL</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </a>
            </div>
            <div className="journal-grid">
              <a href="/">
                <div class="journal-grid-card">
                  <div class="jgc-img-box">
                    <img
                      alt="JournalImg1"
                      width="1920"
                      height="1024"
                      src={journalImg}
                    />
                  </div>
                  <div class="jgc-details">
                    <h6>
                      Working With Leading YouTube Influencers: A How To Guide
                    </h6>
                  </div>
                </div>
              </a>
              <a href="/">
                <div class="journal-grid-card">
                  <div class="jgc-img-box">
                    <img
                      alt="JournalImg1"
                      width="1920"
                      height="1024"
                      src={journalImg}
                    />
                  </div>
                  <div class="jgc-details">
                    <h6>
                      Working With Leading YouTube Influencers: A How To Guide
                    </h6>
                  </div>
                </div>
              </a>

              <a href="/">
                <div class="journal-grid-card">
                  <div className="jgc-img-box">
                    <img
                      alt="JournalImg"
                      src={journalImg3}
                      loading="lazy"
                      width="1920"
                      height="1024"
                    />
                  </div>
                  <div className="jgc-details">
                    <h6>
                      Top 5 Influencer Marketing Software Solutions To Boost
                      Brand Growth In 2022 (Part 1)
                    </h6>
                    <p>
                      Check out this comprehensive guide to discovering the most
                      powerful influencers using popular influencer marketing
                      software based on Uptrend’s insights and experience.
                    </p>
                  </div>
                </div>
              </a>

              <a href="/">
                <div class="journal-grid-card">
                  <div class="jgc-img-box">
                    <img
                      alt="JournalImg1"
                      width="1920"
                      height="1024"
                      src={journalImg}
                    />
                  </div>
                  <div class="jgc-details">
                    <h6>
                      Working With Leading YouTube Influencers: A How To Guide
                    </h6>
                  </div>
                </div>
              </a>
              <a href="/">
                <div class="journal-grid-card">
                  <div class="jgc-img-box">
                    <img
                      alt="JournalImg1"
                      width="1920"
                      height="1024"
                      src={journalImg}
                    />
                  </div>
                  <div class="jgc-details">
                    <h6>
                      Working With Leading YouTube Influencers: A How To Guide
                    </h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
