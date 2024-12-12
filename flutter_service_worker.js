'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0296150790f94acec63f33253c5b6c73",
".git/config": "ac935d66bdec16ad8f9a685fd6037745",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0e5b0d598692ae0a6176f409fb979cba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a8107d872740367810ca924605b4088",
".git/logs/refs/heads/master": "9a8107d872740367810ca924605b4088",
".git/logs/refs/remotes/origin/master": "433b66377bf5ae46110f2b4e29cd9fcf",
".git/objects/00/70aa1e7455f4cb4e6bdabd2f7c4a23eceffc60": "fed1631d0efb1761d837d06387c3375f",
".git/objects/00/79057946db59d28f629141b770c0522e8f84f9": "570eca4dd35c269c658909d15e49e44e",
".git/objects/00/af1a2d96b9bf7b057783a39127c02baa01bb3a": "94573f73935297447a9bc2fe113c4640",
".git/objects/01/e6d1f5f3975122f9e9ea9c4e6a9d4d4227adfb": "9dae9d8fac883fd61a196c41fb9ec3ee",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/04/b794a628c0dae092c1d78cc50d3a2714c618f6": "782693099acb10b3451ac6d91ba71f40",
".git/objects/05/c7b47b82cc3b2ddc20ae988f7c58c54785c464": "659d2fcf8ec33b8b9a702b08b85143ff",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/574500273963de0824d8c499c0c0b65a3dbb3a": "ca239b5fbc77257c1c70ebcff30308f3",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/307b45a23cb2f52898bdbd140797f51dec6f9e": "5662f2884265d05be3da7142d95c2cef",
".git/objects/11/bc60a6b4ec31c9c2edb320bb9e8317a3a431f5": "96e2fbdf10f41b3fedc189afa1e5da9c",
".git/objects/12/703bfbf893620ff3d7ee8251c6effcf080b51a": "7f78b54ab5c30d5fc03bb3c9f5fd0ecc",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/17/197244a128bcdd4b9392736d90d3ef9f2fa790": "bd0ad4babf467891217b876e9e31071d",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/d41e53a68a78f03811706e59b1245e87361c67": "1b3b745ae1edbc58f1a8d347aa00ac7a",
".git/objects/1a/5194609f8b9a5aaf764a38cdae1baae6c5338d": "eeef58f1f182d2476ceb839b55ef947d",
".git/objects/1c/4cfdd96a89b0095dbd29a6ca194e41ad77b4fd": "941033f2f51333a5217c535046bbd8e2",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1e/891eaf24d6f191de2e63a66f86cd1c3ed77873": "df869ac6576d07fcdd8f275a31ddd8eb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/77f6dc0df3af0e304a820a6a2518c9c6eb859c": "f7b6aebf9f068188756f3ef002d49985",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/25/d97f4e2929ca653153343dfc3bce1aeb77ab82": "ef377e2c5b6e21bac9859bc82f85b3a6",
".git/objects/29/5f53576a215e1c26099b75aa6644476534d786": "6b89df710cfe2e791b93fcd0895423a7",
".git/objects/29/a3a5017f048d6d8e6a450eef64435ddee44fb7": "45542fd7e689386f166eed136e1ad478",
".git/objects/2a/4e94411fb3abe7a28c362816218c238c986276": "e256114856a05ee307ff866431fe6820",
".git/objects/2b/5436680bc8996d79e623bd0f2909abcaac85de": "d6cb301e83132e760e110362c24a5776",
".git/objects/2e/b49c7afe5c0333223af20dbb41acc62c000f9f": "30474286c0b23b480566696e0be8b3aa",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/4f3bbc4a568ba739957e92c4f1b1ea51ec1bae": "d768b61f94ac5def314018b71afcf7b2",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/31/7fbcd92a171b521803732581568bf0164be720": "a909f64f0854e88eb466ad711e827050",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/33/a062f3afbc9d485362a75fcd922ec414c91b27": "43b2d671390846f530d3af80cad1cdee",
".git/objects/35/29b0c7215ff167ea14136c88f8ad8b74516f55": "c54b929898534fc940602cf4e2f4285d",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/37/30af05aa9395f0f2fa8c9782e5f7290588865d": "1b650e593ff3d1b15bd820fc0ddba9ff",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/38/bfc6288a0d698828ce738314c69fde6209daf2": "ae0e32beaf9ee8b121d4e8568415efdd",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/9f6981d5d35475eb18e6068ae67cdd7c731978": "d78434eb583745d7bf880eb7c4b9f3e2",
".git/objects/3a/0b46511a71b464dac72d693faae6ea0f7e3b2e": "351d4fd0e3a9a4bc304d0a579290669b",
".git/objects/3a/53cfcc8591112bf5eed6f4681cddc483febed2": "8fadabe0e62854d01af85d6374db551c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3a/ffdb809190daac1e4d9d3a2cfdff4b9578e5b4": "a07213a1758d7ab1b9c58800569f3c4f",
".git/objects/3b/5b324f6e3f162acfb54a7c423f4566fe04bae1": "d4a88acf42bef05f8f6f0a2315d91a18",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/41/77bb57991202e4f74c68f7fd2e19187361e325": "015c73f86a0b68e572513eb7292477f7",
".git/objects/41/dffd916c819ce639f0636e55bb4082214acca3": "34adfc33311d3bfdfe5547bb15f7b79f",
".git/objects/46/66426316ac64104a8867addc46fbcd920f943f": "593a99029acd2e928827b6f4fe9c1f13",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/48/e155e78950076817fdbf53780ec952d5339a8e": "0a28b51f86073df1002dd5d38feb40b2",
".git/objects/48/ffe3d7c580d94c2a3107eee954fef52a7a9a0d": "5bdbf4e3211ed9e760245e0f354ebf82",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/0b8b2ce92ff0abbe4a2e90c86738ab27d7b619": "a3dea9ef8af5a98bee0939bb28b70a0e",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4c/fcd01e672e8eb71cfb232254cdca108cad1d88": "4ceaeb5703f73fec167b38c1270ad83e",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/50/fb024974fc740d26e91dbed67ed0eff2a0a123": "d28a69f6c586f9906059e26dbfc329d6",
".git/objects/51/2e6f0058165cab85b63ece1a99d545792fd0ad": "269269da0783e1e566bb33595005f948",
".git/objects/52/08c012f90e95651df1413b5440221b2078b2f8": "1b130570d7f0ab638588f256443c2b66",
".git/objects/53/6165d35a42ac4ce974f9cf7ac24a9ba0645acd": "418cc78c8c586f7165ef52d7aa519d9c",
".git/objects/55/7110dd3cf50dd0d5bd074bb61cba2f29deba47": "8844f2b92598a6f483febb8d3afed5d4",
".git/objects/56/5c186fe2ecd73042a9d3e24a9ae9536d851d63": "717e6f8450836550775936e08ec1da2e",
".git/objects/57/c1898df26a511bbe012cd7417228b8a13bb349": "c764e39a32b86664845d151590b14da2",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/59/f9e676187f906c45925bde8c7a8bee96056860": "39fb2294b508afca11ef091044156115",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5d/e64a7eb785da9ea0358a087ca4af04213f7e25": "8f2e3d3eabacbe1749498960ad0f650e",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e213f83927c2a4c19aa1b864a19eb852",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/2d2b2d22cecb11f32745c644c827ecf75669ff": "1d8497811ea25f1d195655c7fc614ac6",
".git/objects/64/2b5bbde1b7679cf1f7afd99b91fa97aea84473": "da6bde42ef77d43d145f1b6acf3cc2eb",
".git/objects/64/8c80d79146385a46b137a2b4a53a7f18fedff0": "c77adfdb5caed7acb18a52109ac126d3",
".git/objects/65/2b5803874ec2c479833fb00d58630ca7f6366c": "9f59836fd9af18aac6c77433dc216284",
".git/objects/66/155577b4ad95586b10f5f03716fa2bb0ec9f58": "473074568e8bf6e22304894b4a7d155e",
".git/objects/66/9ed2f692f55f7e6a0058b93d5078849db5aef5": "ee096291f3c893bf40bab0051d74f912",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/67/182a9a97fa1c5005b4394015ebd58315f96374": "e20813baf9cc00654682bb1ba2889009",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/6a/71adfe43edb06b04682edfa90184bd0f1a063f": "50a207383ea84d387fc00c1aea2f4af3",
".git/objects/6b/0f11f7689e34e186f4db76eadb5e2dfcaf48c2": "c20b8dcc304ada662673941676946ce9",
".git/objects/6c/281f246a46a5df56f2ee431534af8c48e03dd2": "10db7d8954b4e2b335c420cfebb78ca6",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/98cbf9d328c3506d2addf52f99da257c90c0b5": "73f298b1a889726281acec08340be807",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/6f/0b661956af375653d40aee28b8a42d206459d3": "18bd42bd00fb18d51a898afa28af9ef4",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/70/58a53bf8c01636ce4eef8be38df847a306ccdc": "4ea921bdb4b1474828ccf36cae010786",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/7a116fb9489bf61c0dd85f9cb500bfd6723623": "6e4995e42e38ba29e507bf65d795688c",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/74/75ec5a5ccea0c29f9501400f5404c6b1ec26a3": "023c1e450e9312b74dc613740733e52d",
".git/objects/75/732c42fb8f5b400e3deab18a517f5c5a1ad796": "f0db65d54b38bcf79d47a4115c8b1f49",
".git/objects/76/6394b6a44a6092588dd6ba5a1eff86b86d0ebe": "491cdcc556d27753e7d2c2f14840692d",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/76/e46a451c43dab2821068c23a768e786fd25141": "234de3f9a7e280102169245b0a840bdf",
".git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
".git/objects/77/7004c63b81e6da8930a892e00be5d4adbca381": "2dcdc9920bf8fdcb5f6c67e9a58add8a",
".git/objects/78/c1d7e161ae7d4b64b3ce010ce8bcb695325dcb": "4ddd2e314a9acb7ac25c033da7d3a666",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7a/e9f65b1493f3a66cb76fad44da6db00f9bc034": "e992bffbbead7bce8051cff125059393",
".git/objects/7b/24cf1eaf9c8b117cdb97991563ab61312aad42": "0fe6f3cf3ae2c39ac36ce002fcdd0249",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/56964006274498b0edaa77763cdd72c6d42b6a": "7cf18aae775e8f317b2bead42a68f097",
".git/objects/7d/17785663937955104c689aca1494e261028774": "45c722a37f00c6b2276cc32102fc99c5",
".git/objects/81/42994ed2d95dfd41f311228fdb5c1f5cfc6705": "824dc7d777b3b17f6b9c8c11880396f3",
".git/objects/82/0c8970f57bf11185be19a5301b21f98c438e81": "a5b2e2a73d3f816ec4ae77f96ee388c9",
".git/objects/84/00b3d0edb625e31497e0465ac27c2fa27739a5": "1834fabf0905a455ca301010009592f2",
".git/objects/84/7b10b8718ae58d004c7cae129e771e280993eb": "cd3f31e4a0083d2b8e635f7576aa8862",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/86/39ef309dc1b69fcf60895a880b0670890ce3c4": "2ae7a554342ff675031cfad19c439c3b",
".git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "6a613891f55546675267dc93a78ff2c1",
".git/objects/87/e3a47c8da4d886a4aca8e7f1235d545dfa7d3f": "5cd065be8c3f5803ed6d8d37fd67c906",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f578eb03eaa03e1378bd05eb46ba12cc6eca7c": "afc3d23c26c9072d245876d0efe356ea",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8c/699338ac04987aef8444576079b336379d4f50": "fd0d1955aea2a09cee6392b9eb485bdb",
".git/objects/8c/a14df4337f5e08cd642d68836dd7c76911ebf7": "d3802e2385e30e3c100e6b252d177b49",
".git/objects/8e/3ca5dfe1936519e96475be8d0b5ff5faa43727": "497d1953bf8b42ffe41a214af0c8df37",
".git/objects/90/3f4899d6fced0eb941e159f7322b21b320c40c": "83b7d85886d6c364db4cef0543e046ee",
".git/objects/90/5c5d2b4e62111b7bb6c87700aaf250af984756": "ba7a49f1b1a9b3d50e7bf48366e67d2e",
".git/objects/90/74fee9290dba1c034623b98ac8d5d344d74724": "25062f4e422d41a10a5a9b4ea7876b27",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/94/18d10fc0494bc1d4930dea589983bb6a2e86f5": "18ed6eca042a3eafe9149b94a411675c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/5ee3038f988929fac2dedb6a307ebd45dfcfd7": "84f4c0c3560baa9920ae37a5e8144c5e",
".git/objects/96/c00ed2530fa17668e6f6e9a422418b2a09b1a5": "51547640fd96e3a99fdf1f5d561e61f1",
".git/objects/96/e3d9cab0d543b0e56974bc8a3b99f58c7b0076": "f18e2f7859539ebdabd97d6669a721ed",
".git/objects/99/b3b897e23a0814f16bb9301657a500a8686187": "c4f423d312328da93a6b012c33b05394",
".git/objects/9c/b014c49fc9a97db95ad78d5a3d883d61e87bf9": "87f40bc74d4c9325fe25cd21cf1b445d",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9e/209856bc76e04d8686fdb2cc454e85ea501d36": "e907ed8ed9b38ecf023bc6f9c1b634e8",
".git/objects/a0/ddbdf044417789d3e5d4284ebac36ec6b83988": "b337004f7b0398cf933a3bcdb2df0d4b",
".git/objects/a2/314266118cd764962879f9a9b18e194e2ea628": "60c598061d736dc2404570ad642be0e7",
".git/objects/a3/d8c4d599bb3235eeaebd74595770b2e1556dcb": "79e8fb5c962a6c1b4c2f8798189d2145",
".git/objects/a4/1fe57ac2ce18f763eabef1a62b090864d49125": "835c29a1687c89deb2014a1aaba96e19",
".git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a5/8a2c72812af7e6e898b28a47102b9544e88a83": "29cafa9f238ec38b9cde047863ebcb19",
".git/objects/a5/9abe059b3c124a077e59976487a302bc5f1115": "e53c68c306163166c83cdb318b17c804",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/9f6dcc85d9b15458a7690ce6a152fe99206ffc": "385c4779a9b325fa904218f4dadee148",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a8/92995c853c55c9b04b58f0876e1f70e54501a6": "e5a31cfea119f8e7f8c1c1f7ea485e08",
".git/objects/aa/9462ca7090098b1048af715b47cb34be16c7fa": "f4586648bee950d8e41615a1a27245b1",
".git/objects/ad/67c34f637b60839a7f93274b9d47239eeb1f63": "c3913c49cc1721411bb1be76735dd1af",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/4db2277f9c4f8160860e3a4de21f3ca11e3563": "fdc883122b0ac4cc36659b1d670d30d7",
".git/objects/b6/7dd666ce700e22acd5685938e1cb3150214ccc": "35ef05a1f06c69f2a271bd433e042d98",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ad1fa7488a13d5f0a4fb2b528f03ddf586f75c": "79b740b747ec042e2b8da33ecdb38ee3",
".git/objects/b9/078e30710cb557c22082fd428a80dc446d5c6e": "a2a91f6ab630cd229d74c9f6743eb9b8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2e7c817e03fbd49a4f3bf7d39c2f3c1fb1ccab": "7a05e473674a63ccb6a83dd545fd0e5c",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/bb/487a26fec0f9df2a3005b5f626b417144f43d3": "92f5c0d278936d6aa6bd74bf7a73f107",
".git/objects/be/d5a6402db4c0a0e7be720b5b55d86e24b70030": "986b15671f656d9f859c7faa95d3f701",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c0/6a287361ee9889c80c65e10851afef9ae2920d": "9d493d5580ed1173241676113813e261",
".git/objects/c1/1c89b0591750fb2e341ef2769de18158f78005": "ddd5bc9288f31952167e272d03fa829c",
".git/objects/c1/82b4d4633d34a80405e65d50f4e160182d356a": "34909829fdeaceff9afcae60f8fe3be0",
".git/objects/c3/1545042498bc2aab2340a9e7f286592be8592e": "9971ac7972485c483963d71cfc33a442",
".git/objects/c3/fb377e545000c3650053b28061a4e57087be34": "6d6b2dc9b98ea1c907833b1c76f3f6b5",
".git/objects/c4/23c6a7691c04a9d72d2753c8d4fbf7625e5baf": "9b27912efdeaf0e027c394856aadb8fb",
".git/objects/c4/ac2267f2ac167837088721a2fc98eb4a263c07": "9ea74eb77ddedb55c03e33341a5bd49d",
".git/objects/c6/a5745a556ebff1625ab9940bab26e6737faec4": "56e2e00bb10b73d028a1248c02eca3d5",
".git/objects/c7/8e008de083bc23544ae649d8a1fa0bd6f99d00": "a1ca3cb75d038de09541736a9f630b03",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/fe392e05a798dffbc2739ef7c92af968c66215": "abe95ee06d9b98daa33527d25624abe9",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/ce/c9bbec9a5f12128fcf1ce3f40b68b3daff8fa5": "a9e184595ea19775f5ee98d943571d7f",
".git/objects/ce/f40e2d52281487e4e19fe70022fb0b0ccbe92c": "a2712aff55ff8309008b7f318297c31e",
".git/objects/d0/2cac0f6deca87470f72e5f46d9dbaa051b61f7": "fb277035fb9579200f45c3fd68d34413",
".git/objects/d0/416e0f403fc041c292689e36788881f39d73b8": "55604fa9d29ef9b0a58978657ee74058",
".git/objects/d0/a0c102abe980caf73dba167e854411fbbe11e5": "de7f58566fb0ab2e2c96f4c6e31fa801",
".git/objects/d0/b0b7febf1d985e6ff9271a25eb49e535f5df50": "bf861630fd9b9adc653d62782fd14751",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/6879c7fca4ddd05860a22d0b74833920dd1daf": "ee4030374c13748a0fd7bff975848076",
".git/objects/d2/ffbffa4cd251cc00b2b93a5efc2a0213460220": "f43644ca180979b0822f0df06d3031f5",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/b6a9edd3803433c5fd5410f71d505968c25db3": "617223085f4700041c3b15957c80d47e",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d3/ede1520643f618230b5c17489015683ac338a8": "48fe2f0661c89567967170bee013cab2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d4/e3871c08d030e267fb257a150fba96d37983e2": "baf5be417579edee6e88302f52bbd76c",
".git/objects/d5/521de054a95584e1bd1d0fbed8a2323d0e95d8": "30d2b7608e3a65bcda6e151515b43efc",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/c35a993a2e91b9ca67b6701abfe3733004a8b2": "0a254038943954910dd9f24f68e083d1",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/e0/d23226065cf66db5540a8b29f629825f3d3856": "fbdeb2283fbc94759a7e64a41019d55f",
".git/objects/e1/ca574ef017c1bc00556b96ea372e2c07948771": "8958a89f12de95d8fc1b30125683be1b",
".git/objects/e2/1552f011eef0c6469b8555e53464307818712f": "d4803e7ad488d259fe1bf1687872e505",
".git/objects/e3/0e559484a9c7372e85573633f035e134e344be": "a37088dc7575b5bcba0e3972237d0133",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "8688207d9bdc19977b061c06f0972db7",
".git/objects/e9/12a28b8acb7d2d5fab9d24632fcb8ff34a94af": "e85d2d1fbfcefa50cda60c552f9fabf1",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/ea/a2881b16401789135239db9c1886dbad703551": "9955aa433d814793628bae18f459b266",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1a3b578f50d6916db58368d066ad92e41aa27e": "eb60031a7c544b1d724cefe74ee112a7",
".git/objects/ee/c432a2ef2fece671638be7ffb2e9ddb6a33f6c": "35a1cdc8da4838792f96c000201be69f",
".git/objects/f1/cc44004afd48704f2f691c220d7f666c76f618": "1a0683ff69734431cae882d05aea7108",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/44b194ee5f14a9325d29f0c6f994e167b74f58": "9df0871a163d2182087bb99d04ab6bc8",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f7/07a4165e5de4377171f1fcc2ac1ce69cbf4b0b": "686628f35386482f047622d9fafe8717",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f8/8713f1c9712f8168b9f66bb1a9edcb0fd01b46": "a10cf23a9c08ac5428a5ab35b8063a47",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/f9/b303465f19b5fbf5ec669cd083c9cc38ecda9a": "ebb8d99ac52f40036a2f65e1af95e003",
".git/objects/fb/1cf8e256c0af5626fab136e5640e2db4db19d5": "624e43c8b538e08ffb88365c34394fb5",
".git/objects/fd/b636ae59af4f0417adbd7be619cb6651de0a9e": "4294ceed47622f2bd5c432439ae29e77",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/refs/heads/master": "93cf3d47751c58c4eb9a02e0d6f20eba",
".git/refs/remotes/origin/master": "93cf3d47751c58c4eb9a02e0d6f20eba",
"assets/AssetManifest.bin": "5124c7b0a23d65c8f9a3842a17ac9ae1",
"assets/AssetManifest.bin.json": "4bbc52f4c0878f5e7c04e1ddf896934a",
"assets/AssetManifest.json": "b82dd782b9d768825e69203e4a2afada",
"assets/assets/images/ic_app.png": "200a2f2eef35689855cbb2bebe40bb64",
"assets/assets/images/img_chicken_tikka.jpg": "ae55c8de428273aa79ff87541780e847",
"assets/assets/images/img_chickpea.png": "9619fd70d1ec38a1c1e11fb0626f7c4a",
"assets/assets/images/img_cottage_paneer.jpg": "11111b46247f8c75974578b02d78d0f2",
"assets/assets/images/img_dashboard.png": "aceb4a105ed37dec03bfca0883cabc36",
"assets/assets/images/img_kabab_trio.png": "1dd25fea300a0c7445732efe5a587434",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "584ec248333d397db46e6b8560fa98c7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2d0133b6fc653cbbff0765057adf852d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "786bf6e3da55e517b23579f4afe4b89f",
"/": "786bf6e3da55e517b23579f4afe4b89f",
"main-icon.png": "200a2f2eef35689855cbb2bebe40bb64",
"main.dart.js": "1c7abb62048400bdd625d8b321866be8",
"manifest.json": "62c3d8e2a0067e7e1031d5e52d0cd567",
"version.json": "e9bd5d5089ad2610bf9c850f5204d4b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
