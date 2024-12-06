import Link from "next/link"

export default function PopupBid({ isConnect, handleConnect, setWalletAddress }) {


    const connectPhantom = async () => {
        try {
            if (window.solana && window.solana.isPhantom) {
                const response = await window.solana.connect();
                console.log(`Connected with Public Key: ${response.publicKey.toString()}`);
                console.log(`Wallet Successfully Connected!`);
                setWalletAddress(response.publicKey.toString());
                handleConnect();
                //checkEligibility();
            } else {
                console.log(`Solana Wallet not found! Please connect or install it.`);
            }
            } catch (error) {
            console.error("Connection failed.", error);
            console.log(`Connection failed. Please try again.`);
            }
    }







    return (
        <>
            <div className={`modal fade popup ${isConnect ? "d-block show" : ""}`} id="popup_bid" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="close icon" onClick={handleConnect} data-dismiss="modal" aria-label="Close">
                            <img src="/assets/images/backgroup/bg_close.png" alt="" />
                        </div>
                        <div className="header-popup">
                            <h5>Select a Wallet</h5>
                            <div className="desc">
                                By connecting your wallet, you agree to our <Link href="#">Terms of Service</Link> and our <Link href="#">Privacy Policy</Link>.
                            </div>
                            <div className="spacing" />
                        </div>
                        <div className="modal-body center">
                            <div className="connect-wallet">
                                <ul>
                                    <li>
                                        <Link href="/connect-wallet"><img src="/assets/images/common/wallet_5.png" alt="" />
                                            <span>MetaMask</span>
                                            <span className="icon">
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/connect-wallet">
                                            <img src="/assets/images/common/wallet_6.png" alt="" />
                                            <span>Coibase Walet</span>
                                            <span className="icon">
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a onClick={() => connectPhantom()}>
                                            <img src="/assets/images/common/wallet_7.png" alt="" />
                                            <span>WaletConnect</span>
                                            <span className="icon">
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => connectPhantom()}>
                                            <img src="/assets/images/common/wallet_8.png" alt="" />
                                            <span>Phantom</span>
                                            <span className="icon">
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="/connect-wallet">
                                            <img src="/assets/images/common/wallet_9.png" alt="" />
                                            <span>Core</span>
                                            <span className="icon">
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <img src="/assets/images/common/wallet_10.png" alt="" />
                                            <span>Bitski</span>
                                            <span className="icon">
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isConnect &&
                <div className="modal-backdrop fade show" onClick={handleConnect} />
            }

        </>
    )
}
