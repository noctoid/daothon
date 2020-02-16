# DAOthon Token
## Before Getting Started
我们先安装必要的依赖
```bash
yarn # yarn is recommended as we have yarn lockfile
# or 或
npm i # 😔 npm is too old for package management
```

然后...... 开始测试构建
```bash
yarn compile
# or 或
npm run compile
```
## File Structure
```bash
├── build #存放编译相关
│   └── contracts #编译后合约文件
│    # 编译后是JSON的格式，JSON内含用于合约部署的 bytecode
│    # 后端目前只需要 CommonFanPiao.json 即可部署饭票的合约
├── contracts # 实际 solidity 合约代码
├── flatten # flatten 后的合约（理论上仅用于 Etherscan 验证）
├── migrations # Migrations are JavaScript files that help you deploy contracts to the Ethereum network.
│ #官方文档对 migrations 为如上所述 https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations
├── node_modules # npm 安装的包
│   └── @openzeppelin # openzeppelin 的
│       └── contracts # 合约们
│           ├── GSN
│           ├── access
│           │   └── roles
│           ├── build
│           │   └── contracts
│           ├── crowdsale
│           │   ├── distribution
│           │   ├── emission
│           │   ├── price
│           │   └── validation
│           ├── cryptography
│           ├── drafts
│           │   └── ERC1046
│           ├── introspection
│           ├── lifecycle
│           ├── math
│           ├── ownership
│           ├── payment
│           │   └── escrow
│           ├── token
│           │   ├── ERC20
│           │   ├── ERC721
│           │   └── ERC777
│           └── utils
│           ...
└── test # 测试相关，暂时还没使用
```
