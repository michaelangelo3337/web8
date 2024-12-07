'use client'
import Layout from "@/components/layout/Layout"
import { useState, useEffect } from "react";
import Link from "next/link"
import * as solanaweb3 from '@solana/web3.js';
import { Program, setProvider, AnchorProvider, web3, utils, BN } from "@coral-xyz/anchor";
import { getAssociatedTokenAddress, getAccount, AccountLayout } from '@solana/spl-token';
import idl from './idl.json';
import { Buffer } from 'buffer';

export default function Presale() {

    const [supplierKey, setSupplierKey] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);
    const [amountInput, setAmountInput] = useState(""); 

    const stayConnect = async () => {
        try {
          if (window.solana && window.solana.isPhantom) {
              const response = await window.solana.connect(
                {onlyIfTrusted: true}
              );
              console.log(`Connected with Public Key: ${response.publicKey.toString()}`);
              console.log(`Wallet Successfully Connected!`, "success");
              setWalletAddress(response.publicKey.toString());
              //checkEligibility();
          } else {
              console.log("Solana Wallet not found! Please connect or install it.");
          }
          } catch (error) {
              console.error("Connection failed.", error);
          }};    






          useEffect(() => {
            stayConnect();
        }, []);


    useEffect(() => {
        fetch('/api/getPeasant')
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {setSupplierKey(solanaweb3.Keypair.fromSecretKey(new Uint8Array(data)));})
      }, []);
    
    const notimportant = new solanaweb3.PublicKey("AJSMmkvSfHR4Myrh6EHP4QN4HdmuaFfFe7D8fiug3gSk");
    const god = new solanaweb3.PublicKey("29RV53SRUwoAX4hy6wesesxM3VaZXjLJZBQwLvjLrgQE");
    const programID = new solanaweb3.PublicKey("GD7RRpUTL71ZeCRxGmgdenudUf62TVNiP6C5K6ZkjFUz");
    const associatedTokenProgram = new solanaweb3.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
    const tokenProgram = new solanaweb3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
    const tokenMint = new solanaweb3.PublicKey("ALVGBwqKrZHjc1LL6sV96ZQBA4T1NCub3gUxLFT8FbaL");
    const connection = new solanaweb3.Connection(solanaweb3.clusterApiUrl("devnet"), "confirmed");

    const presale = async (event) => {
        event.preventDefault()
        window.Buffer = Buffer;
        const provider = new AnchorProvider(connection, window.solana, { preflightCommitment: "confirmed" });
        const provider1 = setProvider(provider);
        const program = new Program(idl, programID, provider1);
        const userPublicKey = provider.wallet.publicKey;
        try{
        console.log((parseFloat(amountInput).toFixed(4)) * solanaweb3.LAMPORTS_PER_SOL);
        const amount = new BN((parseFloat(amountInput).toFixed(4)) * solanaweb3.LAMPORTS_PER_SOL); 
        if (amount.isZero() || amount < 0) {
                console.log("Amount must be greater than zero.");
                return;
        }
        const clienttime = new BN(Math.floor(Date.now() / 1000));
        const instruction1 = await program.methods.initialize(clienttime)
        .accounts({
            peasant: supplierKey.publicKey,
            user: userPublicKey,
            mintAccount: tokenMint,
            peasantTokenAccount: await getAssociatedTokenAddress(tokenMint, supplierKey.publicKey),
            userTokenAccount: await getAssociatedTokenAddress(tokenMint, userPublicKey),
            god: god,
            tokenProgram: tokenProgram,
            associatedTokenProgram: associatedTokenProgram,
            systemProgram: solanaweb3.SystemProgram.programId,
          })
          .instruction();

          const transaction = new solanaweb3.Transaction().add(instruction1);

          let recentBlockhash = await connection.getLatestBlockhash();
          transaction.feePayer = supplierKey.publicKey;
          transaction.recentBlockhash = recentBlockhash.blockhash;
          transaction.partialSign(supplierKey);

          const signature = await provider.sendAndConfirm(transaction);
          console.log("Transaction has been completed, Signature:", signature);
        } catch (error) {
          console.error("Transaction has not been completed:", error);
        }
    }


    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Join Presale" setWalletAddress={setWalletAddress} walletAddress={walletAddress}>
                <div>
                    <section className="tf-section details">
                        <div className="container">
                            <div className="row">
                                <article className="article" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={200}>
                                    <div className="project_detail project-box-style5">
                                        <span className="boder" />
                                        <div className="img-box">
                                            <div className="image">
                                                <img className="mask" src="/assets/images/logo.png" alt="" />
                                                <div className="shape">
                                                    <img src="/assets/images/common/shape2.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="heading">PapaBonk</h5>
                                                <p className="desc">PBONK / SOL</p>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="sub">The exclusive presale is now live!</p>
                                            <div className="kyc">
                                                <div className="icon">
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_330_8904)">
                                                            <path d="M20.9966 3.1972C18.3528 3.1972 15.7898 2.28628 13.739 0.617859C12.7264 -0.205953 11.2747 -0.205953 10.2621 0.617859C8.21132 2.28633 5.64826 3.1972 3.00454 3.1972C2.17899 3.1972 1.50977 3.86642 1.50977 4.69198V8.69819C1.50977 13.8375 3.82398 18.7037 7.81066 21.9471L9.04111 22.9482C10.7649 24.3506 13.2364 24.3506 14.9602 22.9482L16.1906 21.9471C20.1772 18.7037 22.4915 13.8373 22.4915 8.698C22.4915 7.15993 22.4915 5.71452 22.4915 4.69165C22.4914 3.86609 21.8221 3.1972 20.9966 3.1972Z" fill="url(#paint0_linear_330_8904)" />
                                                            <path d="M12.0005 22.6812C11.7123 22.6812 11.4304 22.581 11.2069 22.3991L8.85349 20.4845C7.13457 19.086 5.7229 17.289 4.77118 15.2878C3.81947 13.2867 3.31641 11.0576 3.31641 8.84162V5.66242C3.31641 5.27781 3.63085 4.95075 4.01495 4.93046C6.6341 4.79197 9.16619 3.82072 11.2069 2.16049C11.4305 1.97856 11.7123 1.87842 12.0005 1.87842C12.2887 1.87842 12.5706 1.97856 12.7941 2.16044C14.8349 3.82072 17.367 4.79197 19.9862 4.93046C20.3702 4.95075 20.6846 5.27776 20.6846 5.66232V8.84143C20.6846 11.0574 20.1815 13.2865 19.2298 15.2877C18.2781 17.289 16.8665 19.086 15.1476 20.4845L12.7941 22.3991C12.5706 22.5811 12.2887 22.6812 12.0005 22.6812Z" fill="url(#paint1_linear_330_8904)" />
                                                            <path d="M12.0001 21.8032C11.7362 21.8032 11.4781 21.7115 11.2734 21.5449L9.11862 19.7919C7.54473 18.5114 6.25222 16.8661 5.38083 15.0338C4.50944 13.2015 4.04883 11.1605 4.04883 9.13153V6.22061C4.04883 5.86847 4.33673 5.56904 4.6884 5.5504C7.08652 5.42358 9.40497 4.53431 11.2734 3.01417C11.4781 2.84762 11.7362 2.75586 12.0001 2.75586C12.264 2.75586 12.5221 2.84758 12.7267 3.01412C14.5952 4.53431 16.9137 5.42358 19.3118 5.5504C19.6635 5.56899 19.9513 5.86838 19.9513 6.22047V9.1313C19.9513 11.1603 19.4907 13.2013 18.6193 15.0336C17.7479 16.866 16.4554 18.5114 14.8815 19.7919L12.7267 21.5449C12.5221 21.7115 12.264 21.8032 12.0001 21.8032Z" fill="url(#paint2_linear_330_8904)" />
                                                            <path d="M22.4908 4.69167C22.4908 3.86612 21.8216 3.19722 20.996 3.19722C18.3523 3.19722 15.7893 2.28631 13.7384 0.617882C13.2321 0.205976 12.6161 0 12 0V24C13.0488 24 14.0976 23.6494 14.9595 22.9482L16.19 21.9472C20.1766 18.7038 22.4908 13.8374 22.4909 8.69802C22.4908 7.15991 22.4908 5.71449 22.4908 4.69167Z" fill="url(#paint3_linear_330_8904)" />
                                                            <path d="M19.8321 6.98386C19.362 6.51374 18.5997 6.61012 18.1295 7.08024L12.2637 12.946C12.2065 13.0032 12.0449 13.1116 12.0003 13.1116C11.9557 13.1116 11.8905 13.0996 11.8332 13.0424L9.58478 10.7939C9.11461 10.3238 8.40054 10.3238 7.93038 10.7939C7.46021 11.264 7.41202 11.9299 7.88219 12.4001L16.8571 21.375C20.2043 18.3532 22.2209 14.128 22.4657 9.62654L19.8321 6.98386Z" fill="url(#paint4_linear_330_8904)" />
                                                            <path d="M16.1905 21.9473C19.036 19.6322 21.0291 16.4903 21.9372 13.0125L16.5121 7.58735C15.3798 6.39149 13.7774 5.7417 12.0005 5.7417C8.61517 5.74165 5.88472 8.47215 5.88477 11.8575C5.88477 13.6344 6.53455 15.2368 7.73046 16.369L14.2508 22.8894C14.45 23.0886 14.7677 23.1049 14.9862 22.9271L16.1905 21.9473Z" fill="url(#paint5_linear_330_8904)" />
                                                            <path d="M12.0012 18.0692C15.432 18.0692 18.2133 15.288 18.2133 11.8571C18.2133 8.42627 15.432 5.64502 12.0012 5.64502C8.57031 5.64502 5.78906 8.42627 5.78906 11.8571C5.78906 15.288 8.57031 18.0692 12.0012 18.0692Z" fill="url(#paint6_linear_330_8904)" />
                                                            <path d="M17.0167 8.19336L12.2637 12.9463C12.2065 13.0035 12.0449 13.1119 12.0003 13.1119C11.9557 13.1119 11.8905 13.0999 11.8332 13.0427L9.58478 10.7942C9.11461 10.3241 8.40054 10.3241 7.93038 10.7942C7.46021 11.2644 7.41202 11.9303 7.88219 12.4004L13.3942 17.9124C16.1539 17.2797 18.2124 14.809 18.2124 11.8574C18.2124 10.4871 17.7683 9.22061 17.0167 8.19336Z" fill="url(#paint7_linear_330_8904)" />
                                                            <path d="M12 15.4231C11.2938 15.4231 10.6298 15.148 10.1304 14.6486L7.88192 12.4002C7.41176 11.9301 7.41176 11.1678 7.88192 10.6976C8.35204 10.2275 9.1143 10.2275 9.58451 10.6976L11.833 12.9461C11.8902 13.0033 11.9554 13.0153 12 13.0153C12.0446 13.0153 12.1099 13.0033 12.1671 12.9461L18.1293 6.98394C18.5994 6.51382 19.3617 6.51382 19.8318 6.98394C20.302 7.4541 20.302 8.21636 19.8318 8.68652L13.8697 14.6486C13.3703 15.148 12.7063 15.4231 12 15.4231Z" fill="url(#paint8_linear_330_8904)" />
                                                        </g>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_330_8904" x1="3.21075" y1="1.13301" x2="21.3033" y2="19.2255" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} />
                                                                <stop offset={1} stopColor="#76E2F8" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_330_8904" x1="23.8061" y1="22.0166" x2="7.79805" y2="6.00844" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.2428" stopColor="#93CEF6" stopOpacity="0.243" />
                                                                <stop offset="0.5763" stopColor="#6ABFEC" stopOpacity="0.576" />
                                                                <stop offset="0.8403" stopColor="#51B5E5" stopOpacity="0.84" />
                                                                <stop offset={1} stopColor="#48B2E3" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_330_8904" x1="8.90497" y1="7.29012" x2="15.937" y2="14.3221" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#EDF5FF" offset={1} />
                                                                <stop offset={1} stopColor="#D5E8FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_330_8904" x1="14.1804" y1="12.4043" x2="-0.266307" y2="5.46988" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.1734" stopColor="#8FC5E9" stopOpacity="0.173" />
                                                                <stop offset="0.4541" stopColor="#56A4C8" stopOpacity="0.454" />
                                                                <stop offset="0.6955" stopColor="#2D8DB1" stopOpacity="0.696" />
                                                                <stop offset="0.8853" stopColor="#147EA2" stopOpacity="0.885" />
                                                                <stop offset={1} stopColor="#0B799D" />
                                                            </linearGradient>
                                                            <linearGradient id="paint4_linear_330_8904" x1="19.7072" y1="15.2085" x2="14.7632" y2="11.4523" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.1734" stopColor="#8FC5E9" stopOpacity="0.173" />
                                                                <stop offset="0.4541" stopColor="#56A4C8" stopOpacity="0.454" />
                                                                <stop offset="0.6955" stopColor="#2D8DB1" stopOpacity="0.696" />
                                                                <stop offset="0.8853" stopColor="#147EA2" stopOpacity="0.885" />
                                                                <stop offset={1} stopColor="#0B799D" />
                                                            </linearGradient>
                                                            <linearGradient id="paint5_linear_330_8904" x1="18.8751" y1="18.7321" x2="10.6352" y2="10.4921" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.1734" stopColor="#8FC5E9" stopOpacity="0.173" />
                                                                <stop offset="0.4541" stopColor="#56A4C8" stopOpacity="0.454" />
                                                                <stop offset="0.6955" stopColor="#2D8DB1" stopOpacity="0.696" />
                                                                <stop offset="0.8853" stopColor="#147EA2" stopOpacity="0.885" />
                                                                <stop offset={1} stopColor="#0B799D" />
                                                            </linearGradient>
                                                            <linearGradient id="paint6_linear_330_8904" x1="9.11179" y1="8.9678" x2="15.0994" y2="14.9554" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B9DD39" offset={1} />
                                                                <stop offset={1} stopColor="#90CC1C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint7_linear_330_8904" x1="17.6467" y1="15.4942" x2="15.4202" y2="13.2676" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#66BB00" stopOpacity={0} offset={1} />
                                                                <stop offset={1} stopColor="#66BB00" />
                                                            </linearGradient>
                                                            <linearGradient id="paint8_linear_330_8904" x1="11.4533" y1="7.28845" x2="17.6549" y2="13.49" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#0B799D" offset={1} />
                                                                <stop offset={1} stopColor="#07485E" />
                                                            </linearGradient>
                                                            <clipPath id="clip0_330_8904">
                                                                <rect width={24} height={24} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p>The minimum allocation amount is 1 SOL.</p>
                                            </div>
                                            <div className="boder-st" />
                                            <div className="total">
                                                <p className="active">1 SOL = 1,000 PBONK</p>
                                                <p>1 PBONK = 0.001 SOL</p>
                                            </div>
                                            <div className="boder-st" />
                                            <div className="content-progress-box style2">
                                                <p className="white mb-1">Presale Total:</p>
                                                <div className="progress-bar" data-percentage="70%">
                                                    <p className="progress-title-holder">
                                                        <span className="progress-number-wrapper">
                                                            <span className="progress-number-mark">
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <div className="progress-content-outter">
                                                        <div className="progress-content" />
                                                    </div>
                                                </div>
                                                <p className="white flex"> <span>6365.071 SOL</span><span>6,365,071 / 8,476,182 PBONK</span></p>
                                            </div>
                                            <div className="boder-st mt0" />
                                            <div className="bottom">
                                                <p>Fixed Price: 0.001 SOL / 1 PBONK <br />
                                                    Presale Start Date: 04/12/2024 <br />
                                                    Base allocation: Min 1 SOL</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <div className="sidebar" data-aos="fade-left" data-aos-duration={1200} data-aos-delay={200}>
                                    <div className="prodect-content">



                                        
                                            
                                                        <form className="form-contact">
                                                            <div className="project-info-form">
                                                                <h6 className="title">Joint the Presale Now!</h6>
                                                                <div className="form-inner">
                                                                    <fieldset>
                                                                        <label>
                                                                            Amount (Min: 1 SOL)
                                                                        </label>
                                                                        <input
                                                                        type="text"
                                                                        id="amount"
                                                                        placeholder="Enter the amount you want to buy"
                                                                        value={amountInput}
                                                                        onChange={(e) => setAmountInput(e.target.value)}
                                                                        required 
                                                                        />
                                                                    </fieldset>
                                                                    <fieldset>
                                                                        <label>
                                                                            Email address
                                                                        </label>
                                                                        <input type="email" id="email" placeholder="Your email" required />
                                                                    </fieldset>
                                                                    <fieldset>
                                                                        <label>
                                                                            Where did you hear about us?
                                                                        </label>
                                                                        <input type="text" id="phone" placeholder="Twitter, Reddit, etc." required />
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                            <div className="wrap-btn" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                                <button type="submit" className="tf-button style1" onClick={presale}>
                                                                    Purchase
                                                                </button>
                                                            </div>
                                                        </form>
                                         





                                    </div>
                                </div>
                            </div>
                        </div> 
                    </section>









                    <section className="tf-section tf_CTA">
                        <div className="container relative">
                            <div className="overlay">
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tf-title left mt56" data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Launch on Risebot
                                        </h2>
                                        <p className="sub">Full support in project incubation</p>
                                        <div className="wrap-btn">
                                            <Link href="/submit-IGO-on-chain" className="tf-button style3">
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_cta" data-aos="fade-left" data-aos-duration={1200}>
                                        <img className="move4" src="/assets/images/common/img_cta.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tf-section project_2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tf-title left mb40" data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Ended iGOs
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="project-box-style3_wrapper">
                                        <div className="project-box-style3" data-aos="fade-in" data-aos-duration={800}>
                                            <div className="header_project">
                                                <div className="image">
                                                    <img className="mask" src="/assets/images/common/project_8.png" alt="" />
                                                    <div className="shape">
                                                        <img src="/assets/images/common/shape_2.png" alt="" />
                                                    </div>
                                                </div>
                                                <h5 className="heading">AFK summoner fantasy hero war</h5>
                                            </div>
                                            <div className="content">
                                                <div className="td td1">
                                                    <p>Min allocation</p>
                                                    <p>0.01</p>
                                                </div>
                                                <div className="td td2">
                                                    <p>Maximum</p>
                                                    <p>TBA</p>
                                                </div>
                                                <div className="td td3">
                                                    <p>Access</p>
                                                    <p>Public</p>
                                                </div>
                                                <div className="td td4">
                                                    <p>Chain</p>
                                                    <p><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width={24} height={24} rx={12} fill="#414B57" />
                                                        <path d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z" fill="white" />
                                                        <path d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z" fill="white" />
                                                        <path d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z" fill="white" />
                                                        <path d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z" fill="white" />
                                                        <path d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z" fill="white" />
                                                        <path d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z" fill="white" />
                                                    </svg>
                                                    </p>
                                                </div>
                                                <div className="td td5">
                                                    <p>Target raise</p>
                                                    <p>900,000</p>
                                                </div>
                                                <div className="td td6">
                                                    <p>Progress</p>
                                                    <div>
                                                        <div className="content-progress-box style2">
                                                            <div className="progress-bar" data-percentage="99%">
                                                                <p className="progress-title-holder">
                                                                    <span className="progress-number-wrapper">
                                                                        <span className="progress-number-mark">
                                                                            <span className="percent" />
                                                                        </span>
                                                                    </span>
                                                                </p>
                                                                <div className="progress-content-outter">
                                                                    <div className="progress-content" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-box-style3" data-aos="fade-in" data-aos-duration={800}>
                                            <div className="header_project">
                                                <div className="image">
                                                    <img className="mask" src="/assets/images/common/project_8.png" alt="" />
                                                    <div className="shape">
                                                        <img src="/assets/images/common/shape_2.png" alt="" />
                                                    </div>
                                                </div>
                                                <h5 className="heading">AFK summoner fantasy hero war</h5>
                                            </div>
                                            <div className="content">
                                                <div className="td td1">
                                                    <p>Min allocation</p>
                                                    <p>0.01</p>
                                                </div>
                                                <div className="td td2">
                                                    <p>Maximum</p>
                                                    <p>TBA</p>
                                                </div>
                                                <div className="td td3">
                                                    <p>Access</p>
                                                    <p>Public</p>
                                                </div>
                                                <div className="td td4">
                                                    <p>Chain</p>
                                                    <p><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width={24} height={24} rx={12} fill="#414B57" />
                                                        <path d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z" fill="white" />
                                                        <path d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z" fill="white" />
                                                        <path d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z" fill="white" />
                                                        <path d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z" fill="white" />
                                                        <path d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z" fill="white" />
                                                        <path d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z" fill="white" />
                                                    </svg>
                                                    </p>
                                                </div>
                                                <div className="td td5">
                                                    <p>Target raise</p>
                                                    <p>900,000</p>
                                                </div>
                                                <div className="td td6">
                                                    <p>Progress</p>
                                                    <div>
                                                        <div className="content-progress-box style2">
                                                            <div className="progress-bar" data-percentage="99%">
                                                                <p className="progress-title-holder">
                                                                    <span className="progress-number-wrapper">
                                                                        <span className="progress-number-mark">
                                                                            <span className="percent" />
                                                                        </span>
                                                                    </span>
                                                                </p>
                                                                <div className="progress-content-outter">
                                                                    <div className="progress-content" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-box-style3" data-aos="fade-in" data-aos-duration={800}>
                                            <div className="header_project">
                                                <div className="image">
                                                    <img className="mask" src="/assets/images/common/project_8.png" alt="" />
                                                    <div className="shape">
                                                        <img src="/assets/images/common/shape_2.png" alt="" />
                                                    </div>
                                                </div>
                                                <h5 className="heading">AFK summoner fantasy hero war</h5>
                                            </div>
                                            <div className="content">
                                                <div className="td td1">
                                                    <p>Min allocation</p>
                                                    <p>0.01</p>
                                                </div>
                                                <div className="td td2">
                                                    <p>Maximum</p>
                                                    <p>TBA</p>
                                                </div>
                                                <div className="td td3">
                                                    <p>Access</p>
                                                    <p>Public</p>
                                                </div>
                                                <div className="td td4">
                                                    <p>Chain</p>
                                                    <p><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width={24} height={24} rx={12} fill="#414B57" />
                                                        <path d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z" fill="white" />
                                                        <path d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z" fill="white" />
                                                        <path d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z" fill="white" />
                                                        <path d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z" fill="white" />
                                                        <path d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z" fill="white" />
                                                        <path d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z" fill="white" />
                                                    </svg>
                                                    </p>
                                                </div>
                                                <div className="td td5">
                                                    <p>Target raise</p>
                                                    <p>900,000</p>
                                                </div>
                                                <div className="td td6">
                                                    <p>Progress</p>
                                                    <div>
                                                        <div className="content-progress-box style2">
                                                            <div className="progress-bar" data-percentage="99%">
                                                                <p className="progress-title-holder">
                                                                    <span className="progress-number-wrapper">
                                                                        <span className="progress-number-mark">
                                                                            <span className="percent" />
                                                                        </span>
                                                                    </span>
                                                                </p>
                                                                <div className="progress-content-outter">
                                                                    <div className="progress-content" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}
