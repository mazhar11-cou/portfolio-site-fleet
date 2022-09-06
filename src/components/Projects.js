// Import Assets
import uniswap from "../assets/uniswap.png";
import nft from "../assets/Marketplace.png";
import compound from "../assets/compound.png";
import aave from "../assets/aave.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Digital Stack NFT Marketplace</h3>
          <img src={nft} alt="Uniswap Swap Page" />
          <p>
            A non-fungible token is a processed data (token) unit maintained on
            a blockchain that is not interchangeable with other digital assets
            for the purposes of this definition (nonfungible). By this
            applications you may mint nfts, sells, and listed your own NFTs.
            This poroject was done by using solidity, nextjs, web3 etc.
          </p>

          <a
            href="https://testnets.opensea.io/"
            target="_blank"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/mazhar11-cou/DigitalStack-A-NFT-Marketplace"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Dynamic NFT using Chainlink</h3>
          <img src={compound} alt="Compound Landing Page" />
          <p>
            A Dynamic NFT that changes based on market data using Chainlink
            Oracles that pull data from external sources into a smart contract.
            Chainlink’s decentralized and cryptographically secured oracle
            network to get and track asset price data. Then, you will use the
            automations from the Chainlink Keepers Network to automate your NFT
            smart contract.
          </p>

          <a href="/" target="_blank" className="button">
            Site
          </a>
          <a
            href="https://github.com/mazhar11-cou/chainlink-dynamic-nft-alchemy"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Digital-Healthcare-Chain </h3>
          <img src={aave} alt="Aave Landing Page" />
          <p>
            Patients, care providers, healthcare organizations, and payers are
            all involved together in healthcare in developed modern societies,
            which is a complex ecosystem of interdependent entities. It is one
            of the fastest-growing industries in the whole globe. Existing
            methods and solutions, on the other hand, create obstacles and
            challenges that obstruct the effective delivery of healthcare.
          </p>

          <a href="/" target="_blank" className="button">
            Site
          </a>
          <a
            href="https://github.com/mazhar11-cou/Digital-Healthcare-Chain"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
