<img src="daothon_server/daothon_server/misc/platform_icon/DAOdelion.png" alt="Idea Booster" width="450"/>

# An Instance for DAOthon: Project Dandelion

Yet Another [ETHDenver](https://www.ethdenver.com/) Hackathon Project

🏄Let's convert each Repo into a DAO🏄‍♀️

[Keynote Presentation](daothon_server/KeyNote Presentation.pdf) | [Slide of Related Links](https://hackmd.io/@E-5gxTGiSByBOKpvsaKa_g/Bk6wPj7XL) | [Document](https://hackmd.io/iiDe3smDT46L_Z9xs3W_wg?edit)


# Inspiration

We the people walked through several [ETHGlobal](https://ethglobal.co/) event found a sad fact: The sustainability of the hackathon projects is low. Those projects are lack of supports from the hackers, the community and the organizers(typically the investor groups in the industry), after each event. Without sustainability, most of the projects become glittering gizmos down to the basement.

The reasons are apparent:

- In typical hackathons, hackers work in only one group, for one project per event, the lack of liquidity of ideas and techniques hinders the ideas' full implementation.
- The community can't follow up with the project's progress or the teams' ideas, which shrank the project's notability in and after each event.
- As the judges may have no sufficient time to measure the potential value of each project or investigate the source code, they may tend to select those most 'interesting' projects. Besides, the bounty is more likely a oTne-time prize than a form of consistent funding. All these kind of reasons will lead hackathon project focus more on frontend and surface rather then kernel and algorithm.

That's why we kicked in with DAOthon, a brand-new platform to solve all those problems in the hackathons. By introducing the <jinzhubaba> into account, we can create an idea-oriented, well-supported hackathon platform with highly-motivated participants and robust sustainability.

- [DAOStack](https://alchemy-xdai.daostack.io/daos/)
- [DevPost](https://ethdenver.devpost.com/submissions)
- [Global Game Jam](https://globalgamejam.org/2020/games)
- [ITCH](https://itch.io)
- [Gitcoin](https://gitcoin.co/)

# What it does

Our concept is carried out by the platform DAOthon, where the participants post their ideas and abilities freely. By the power of DAO, we can evaluate each participant's contribution and each project's value in a fairway.

In design, for the DAOthon, we initialized these simple ideas to secure our goals:

- A Clear Platform with High Liquidity of Information
- A Robust Mechanism to Evaluate the Projects and People
- A Promised Implementation to raise the sustainability to the Projects and the People

This required us to bring new organization of the proces, the role of users, and the overall evaluation of the projects.


<img src="README_MISC/flow.png" alt="flow" width="1"/>

<img src="README_MISC/flow.png" alt="flow" width="2"/>

## New Categorization of Phase

Let's begin with phase. We apply the technique into the 5 overlaping stages of a hackathon:

- Proposal

  In this stage, the participants can exchange ideas via DAOthon. The Idea Boosters and Carriers can post ideas for the other roles to contribute.

- Matching

  Browsing the ideas, the participants assemble in a functional way, and the liquidity is optimized since the matching process can last for the whole session.

- Voting

  As the DAI is distributed at the first second of an event, the voting process lasts for the whole session. People will vote their interested projects by quadratic voting; And people can even short sale the projects, which could make the event more interesting and let people have a brilliant playground to try out their ideas with stablecoins!

- Award

  By the refined voting process, the selected projects and people would benefit alot: the bounty and the award will be given in a nother way.

- Incubation

  With high notability and support, the projects will have better expectation during incubation, at least they may have better chance to have a community and resources of funding.

## New Categorization of Participants
To evaluate a participant's contribution based on the abilities, we introduced definition of roles as follows. A participant can have multiple roles at one time. The concept of these roles will not only display on the participants' profiles as markers, but also a way of categorizing the contributes in various aspects:

<img src="daothon_server/daothon_server/misc/person_role_icon/Idea Booster.png" alt="Idea Booster" width="50"/> Producer: Planner & Organizer

<img src="daothon_server/daothon_server/misc/person_role_icon/Idea Carrier.png" alt="Idea Carrier" width="50"/> Idea Carrier: Entrepreneur & Thinker

<img src="daothon_server/daothon_server/misc/person_role_icon/FE Programmer.png" alt="FE Programmer" width="50"/> Frontend Engineer: Frontend, UI/UX Designer...

<img src="daothon_server/daothon_server/misc/person_role_icon/BE Programmer.png" alt="BE Programmer" width="50"/> Backend Engineer: Algorithm Engineer, Database Engineer...

<img src="daothon_server/daothon_server/misc/person_role_icon/Hardware Designer.png" alt="Hardware Designer" width="50"/> Hardware / IoT Designer: Hardware Engineer & Assembler...

<img src="daothon_server/daothon_server/misc/person_role_icon/Tester.png" alt="Tester" width="50"/> Tester: Well... tester ;D

<img src="daothon_server/daothon_server/misc/person_role_icon/CyberSecurity Affiliate.png" alt="CyberSecurity Affiliate" width="50"/> Cybersecurity Affiliated: Security Engineer & Tester

<img src="daothon_server/daothon_server/misc/person_role_icon/Reviewer.png" alt="Reviewer" width="50"/> Community Supporter: Active People in the Community

<img src="daothon_server/daothon_server/misc/person_role_icon/Connoisseur.png" alt="Reviewer" width="50"/>Connoisseur: Active Figures in the Industry & Stacker & Investor

The DAO implementation will evaluate each person's contribution, and sum them up as a person's overall abilities.

## New Evaluation for Projects

From the page of projects, you can see the popularity of it, the trend and the contributors. Out of typical voting, you can manipulate the people's expectation in a bunch of new way. - Actually, involving projects into the world of Game Theory is not only fasinating, but also essential, since the project needs to be tested in not only the code.

# How we built it

To achieve our project, a part of our working list is here:

- [Liquidity Algorithm](https://arxiv.org/abs/1911.03380)
- [Token Relay](https://github.com/nearprotocol/near-bridge/wiki)
- [Optimistic Rollup](https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/optimistic_rollups/)

Well, how about bringing a graph:

<img src="README_MISC/ideas.png" alt="Reviewer" width="450"/>

And of course here's the roles we actuall played :

<img src="README_MISC/flow.png" alt="flow" width="450"/>

See? We are performing multiple roles, and don't you think the contribution should be calculated fairly?

# Challenges we ran into

We have to write TokenLocker.sol with event TokenLocked(string,amount) and emit it after transferFrom() call. And write TokenStable smart contract for Near. We only make a EthProver smart contract from TokenStable to proof TokenLocked events appeared on Ethereum net. But that’s only one direction.

<img src="README_MISC/relay.png" alt="flow" width="450"/>

# Accomplishments that we're proud of

The Accomplishment itself ^~^

# What we learned

The extend of a decentralized world is related to the extent of freedom for the people inside, or, the liquidity of the common good. Performing the spirit in various regime is the trend of the era, and we are really into this.

Speaking of the technology, we are very proud of introducing the <jinzhubaba> and <jinzhubaba>'s power. The high accessible toolkits and the ideas under the hood are both very precious.

We also would like to thank everyone who gave us ideas and inspirations, and the best part, the harmonous etherum community, which made our seed to grow.

# What's next

For the project itself -
We'll fullfill the functions and features; but the most important thing is to carry our ideas around - we, as serious hackathon veterans, are eager to communicate our ideas of change to the people in the community, for a better realization of the spirit of a decentralized, high-liquidity world for more and more people.
We are also looking into new contracts and solutions to iterate the product, - we really want it survive and grow.

For our team members -

After this 'impossible assembly',

- Minako will proceed her ambition of the optimized tokenization from matataki and IPFS;
- Yoko will try startup on her own, and seek a solution for those Chinese companys' survival through the hard time;
- Angelika will open up her career in Seattle and devote for some cutting-edge technology;
- Shizuku will go back to University of Chinese Academy of Sciences, for the enternal answer to everthing;
- And I, Iori, will go back to Princeton to feed my cat, Dr. Ginger. Perhaps I'm doing optimizations on compliers in Beijing from May, and the work on the mining contract derivative, honeylemon.market will fruit in April.

So in all, what's next? I don't know. But it will be the future not only for us.