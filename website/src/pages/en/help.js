/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        "installation.html"
      )})`,
      title: "Browse Docs"
    },
    {
      content:
        "[Ask questions](https://github.com/vardius/peer-cdn/issues) about the documentation and project",
      title: "Join the community"
    },
    {
      content:
        "Find out [what's new](https://github.com/vardius/peer-cdn/watchers) with this project",
      title: "Stay up to date"
    },
    {
      content:
        "Consider support this project by [sponsoring](https://github.com/sponsors/vardius)",
      title: "Support"
    },
    {
      content:
        "Contribute by [forking](https://github.com/vardius/peer-cdn/network/members) and improving this project",
      title: "Contribute"
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
