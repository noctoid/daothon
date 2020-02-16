#!/bin/sh
# 这个脚本用于上传饭票合约到Coding的制品库
# 用的时候请改名为 upload_contract.sh
# 作者 Frank Wei<frank@frankwei.xyz>
CURRENT_COMMIT=$(git rev-parse --short HEAD)
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
CONTRACT_LOCATION="./build/contracts/CommonFanPiao.json"
SHA1_HASH=$(sha1sum $CONTRACT_LOCATION | awk '{print $1}')
VERSION="$CURRENT_COMMIT-$CURRENT_BRANCH"
CODING_CREDENTIAL_FILE="coding_credential"
# 开始编译
echo "You are on the $VERSION"
echo "Building the contracts Now"
npm run compile

# 开始上传到 Coding 的制品库
echo "Deploying contract to coding artifacts"

# 保存用户名和密码
if [ ! -f "$CODING_CREDENTIAL_FILE" ]; then
    echo "Coding 认证文件不存在，正在生成"
    echo "提示：不想输入自己的帐户密码，可以去 https://andoromeda.coding.net/user/account/setting/tokens/new"
    echo "开一个 project:artifacts 的访问令牌 "
    echo "请输入你的 Coding 用户名 / 令牌用户名："
    read username
    echo 
    echo "请输入你的 Coding 登录密码 / 令牌密码：（输密码没有豆豆）"
    read -s password
    echo
    tee $CODING_CREDENTIAL_FILE <<< "machine andoromeda-generic.pkg.coding.net login $username password $password"
    clear
    echo "Coding 登录验证文件已经保存在本地"
fi
curl -T "$CONTRACT_LOCATION" -H "x-package-meta: sha1=$SHA1_HASH" --netrc-file "$CODING_CREDENTIAL_FILE" "https://andoromeda-generic.pkg.coding.net/FanPiao-ERC20/compiled_contract/CommonFanPiao.json?version=$VERSION"