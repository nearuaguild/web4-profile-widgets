<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Near Protocol | Web4 Profile Widget</h2>

  <p align="center">
    A working example of deploying widget process on near.social BOS
    <br />
    <br />
    <a href="https://test.near.social/#/web4_profile.testnet/widget/pages.Home"> Demo</a>
    ·
    <a href="https://github.com/nearuaguild"> Explore other examples</a>
    ·
    <a href="https://github.com/nearuaguild/near-rust-contract-types-generator/issues">Report Bug</a>
  </p>
</div>

## Developed by

![Near Ukrainians Guild cover](./images/cover.png)

**Near Ukrainians Guild** is a fast-growing guild based in Ukraine, aimed at providing high-quality educational content and assistance to grow a strong community of developers/entrepreneurs within the Near Protocol ecosystem 

[![Twitter][twitter]][twitter-url]
[![Youtube][youtube]][youtube-url]
[![Telegram Chat][telegram-chat]][telegram-chat-url]
[![Telegram Channel][telegram-channel]][telegram-channel-url]
[![Medium][medium]][medium-url]
[![Github][github]][github-url]

---

<!-- ABOUT THE PROJECT -->

## About The Project

This example covers the process of deploying your own widget on top of near.social BOS & SocialDB

> **If you're not familiar with BOS & SocialDB concepts, read these resources before following further**:
> * https://near.org/blog/near-announces-the-blockchain-operating-system
> * https://docs.near.org/discovery/tutorial/quickstart
> * https://thewiki.near.page/near.social_docs

The widget uses [factory smart contract](https://github.com/nearuaguild/web4-profile-contracts/tree/main/factory) written on Near Protocol to deploy [Web4 Profile](https://github.com/nearuaguild/web4-profile-contracts/tree/main/page) on your behalf

### Built With

- [![Javascript][javascript]][javascript-url]
- [Near Protocol factory smart contract](https://github.com/nearuaguild/web4-profile-contracts/tree/main/factory)
- [near-social CLI](https://github.com/FroVolod/near-social)

---

<!-- GETTING STARTED -->

## Getting Started

💡 _Before you begin, make sure you have the following installed_

- [npm](https://www.npmjs.com/)
- [Cargo](https://github.com/rust-lang/cargo#compiling-from-source)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)

### Prerequisites

Follow these simple instructions to setup the required dependencies before usage

1. Clone the repo
   ```sh
   git clone https://github.com/nearuaguild/web4-profile-widgets.git
   ```
2. Install project dependencies 
   ```sh
   npm install
   ```
3. Install `near-social` binary to be able to deploy widgets to SocialDB by single command
    ```sh
    cargo install --git https://github.com/FroVolod/near-social
    ```

---

<!-- USAGE EXAMPLES -->

## Development

JSX files in this repository are NEAR Social widgets, so before you start, get familiar with these resources about platform:
* https://thewiki.near.page/PastPresentAndFutureOfNearSocial
* https://thewiki.near.page/near.social_tutorial

### Making Changes to common.jsx
`common.jsx` contains a set of shared utilities that is often reused within the project

When you need to change it, just edit the file in the root of the project, and update the widgets with this one command

```sh
npm run build
```

### Code Formatter
This project is following `prettier` to unify code formatting

If you're going to follow as well then use this command
```sh
npm run fmt
```

## Deployment

Follow these simple instructions to deploy your widgets

1. Build project
   ```sh
   npm run build
   ```
2. Apply code style
    ```sh
    npm run fmt
    ```
3. Run deploy command and follow the interactive questionary
    ```sh
    near-social deploy
    ```

After successful deployment, you will see a full command that could be used to re-deploy the widgets without interactive questionary, like this
> Keys are provided here just for example
```sh
near-social deploy web4_profile.testnet sign-as web4_profile.testnet network-config testnet sign-with-plaintext-private-key --signer-public-key ed25519:6jRoreKb7RXAQZBuKZs7WDzsFHHrg62GkMmkXuiWqtKm --signer-private-key ed25519:edpktx799pgw7M4z8551URER52VcENNCSZwE9f9cst4v6h5vCrQmJE send
```

## Usage

Once deployed, follow link, like this, to open widget
> Keep in mind you need to replace `YOUR_ACCOUNT_ID` with actual account you've deployed widgets to
```sh
https://test.near.social/#/YOUR_ACCOUNT_ID.testnet/widget/pages.Home
```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Built with -->

[javascript]: https://img.shields.io/badge/javascript-000000?style=for-the-badge&logo=javascript&logoColor=F7E018
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

<!-- Socials -->

[twitter]: https://img.shields.io/badge/news-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[youtube]: https://img.shields.io/badge/broadcasting-282828?style=for-the-badge&logo=youtube&logoColor=ff0000
[medium]: https://img.shields.io/badge/articles-202020?style=for-the-badge&logo=medium&logoColor=ffffff
[telegram-chat]: https://img.shields.io/badge/chat-229ED9?style=for-the-badge&logo=telegram&logoColor=white
[telegram-channel]: https://img.shields.io/badge/channel-229ED9?style=for-the-badge&logo=telegram&logoColor=white
[github]: https://img.shields.io/badge/code-000000?style=for-the-badge&logo=github&logoColor=ffffff
[twitter-url]: https://twitter.com/nearuaguild
[youtube-url]: https://www.youtube.com/@nearprotocolukraineguild4064
[medium-url]: https://medium.com/near-protocol-ua
[telegram-chat-url]: https://t.me/nearprotocolua
[telegram-channel-url]: https://t.me/nearprotocoluachannel
[github-url]: https://github.com/nearuaguild