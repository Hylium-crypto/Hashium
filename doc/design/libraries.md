# Libraries

| Name                     | Description |
|--------------------------|-------------|
| *libhashium_cli*         | RPC client functionality used by *hashium-cli* executable |
| *libhashium_common*      | Home for common functionality shared by different executables and libraries. Similar to *libhashium_util*, but higher-level (see [Dependencies](#dependencies)). |
| *libhashium_consensus*   | Consensus functionality used by *libhashium_node* and *libhashium_wallet*. |
| *libhashium_crypto*      | Hardware-optimized functions for data encryption, hashing, message authentication, and key derivation. |
| *libhashium_kernel*      | Consensus engine and support library used for validation by *libhashium_node*. |
| *libhashiumqt*           | GUI functionality used by *hashium-qt* and *hashium-gui* executables. |
| *libhashium_ipc*         | IPC functionality used by *hashium-node* and *hashium-gui* executables to communicate when [`-DENABLE_IPC=ON`](multiprocess.md) is used. |
| *libhashium_node*        | P2P and RPC server functionality used by *hashiumd* and *hashium-qt* executables. |
| *libhashium_util*        | Home for common functionality shared by different executables and libraries. Similar to *libhashium_common*, but lower-level (see [Dependencies](#dependencies)). |
| *libhashium_wallet*      | Wallet functionality used by *hashiumd* and *hashium-wallet* executables. |
| *libhashium_wallet_tool* | Lower-level wallet functionality used by *hashium-wallet* executable. |
| *libhashium_zmq*         | [ZeroMQ](../zmq.md) functionality used by *hashiumd* and *hashium-qt* executables. |

## Conventions

- Most libraries are internal libraries and have APIs which are completely unstable! There are few or no restrictions on backwards compatibility or rules about external dependencies. An exception is *libhashium_kernel*, which, at some future point, will have a documented external interface.

- Generally each library should have a corresponding source directory and namespace. Source code organization is a work in progress, so it is true that some namespaces are applied inconsistently, and if you look at [`add_library(hashium_* ...)`](../../src/CMakeLists.txt) lists you can see that many libraries pull in files from outside their source directory. But when working with libraries, it is good to follow a consistent pattern like:

  - *libhashium_node* code lives in `src/node/` in the `node::` namespace
  - *libhashium_wallet* code lives in `src/wallet/` in the `wallet::` namespace
  - *libhashium_ipc* code lives in `src/ipc/` in the `ipc::` namespace
  - *libhashium_util* code lives in `src/util/` in the `util::` namespace
  - *libhashium_consensus* code lives in `src/consensus/` in the `Consensus::` namespace

## Dependencies

- Libraries should minimize what other libraries they depend on, and only reference symbols following the arrows shown in the dependency graph below:

<table><tr><td>

```mermaid

%%{ init : { "flowchart" : { "curve" : "basis" }}}%%

graph TD;

hashium-cli[hashium-cli]-->libhashium_cli;

hashiumd[hashiumd]-->libhashium_node;
hashiumd[hashiumd]-->libhashium_wallet;

hashium-qt[hashium-qt]-->libhashium_node;
hashium-qt[hashium-qt]-->libhashiumqt;
hashium-qt[hashium-qt]-->libhashium_wallet;

hashium-wallet[hashium-wallet]-->libhashium_wallet;
hashium-wallet[hashium-wallet]-->libhashium_wallet_tool;

libhashium_cli-->libhashium_util;
libhashium_cli-->libhashium_common;

libhashium_consensus-->libhashium_crypto;

libhashium_common-->libhashium_consensus;
libhashium_common-->libhashium_crypto;
libhashium_common-->libhashium_util;

libhashium_kernel-->libhashium_consensus;
libhashium_kernel-->libhashium_crypto;
libhashium_kernel-->libhashium_util;

libhashium_node-->libhashium_consensus;
libhashium_node-->libhashium_crypto;
libhashium_node-->libhashium_kernel;
libhashium_node-->libhashium_common;
libhashium_node-->libhashium_util;

libhashiumqt-->libhashium_common;
libhashiumqt-->libhashium_util;

libhashium_util-->libhashium_crypto;

libhashium_wallet-->libhashium_common;
libhashium_wallet-->libhashium_crypto;
libhashium_wallet-->libhashium_util;

libhashium_wallet_tool-->libhashium_wallet;
libhashium_wallet_tool-->libhashium_util;

classDef bold stroke-width:2px, font-weight:bold, font-size: smaller;
class hashium-qt,hashiumd,hashium-cli,hashium-wallet bold
```
</td></tr><tr><td>

**Dependency graph**. Arrows show linker symbol dependencies. *Crypto* lib depends on nothing. *Util* lib is depended on by everything. *Kernel* lib depends only on consensus, crypto, and util.

</td></tr></table>

- The graph shows what _linker symbols_ (functions and variables) from each library other libraries can call and reference directly, but it is not a call graph. For example, there is no arrow connecting *libhashium_wallet* and *libhashium_node* libraries, because these libraries are intended to be modular and not depend on each other's internal implementation details. But wallet code is still able to call node code indirectly through the `interfaces::Chain` abstract class in [`interfaces/chain.h`](../../src/interfaces/chain.h) and node code calls wallet code through the `interfaces::ChainClient` and `interfaces::Chain::Notifications` abstract classes in the same file. In general, defining abstract classes in [`src/interfaces/`](../../src/interfaces/) can be a convenient way of avoiding unwanted direct dependencies or circular dependencies between libraries.

- *libhashium_crypto* should be a standalone dependency that any library can depend on, and it should not depend on any other libraries itself.

- *libhashium_consensus* should only depend on *libhashium_crypto*, and all other libraries besides *libhashium_crypto* should be allowed to depend on it.

- *libhashium_util* should be a standalone dependency that any library can depend on, and it should not depend on other libraries except *libhashium_crypto*. It provides basic utilities that fill in gaps in the C++ standard library and provide lightweight abstractions over platform-specific features. Since the util library is distributed with the kernel and is usable by kernel applications, it shouldn't contain functions that external code shouldn't call, like higher level code targeted at the node or wallet. (*libhashium_common* is a better place for higher level code, or code that is meant to be used by internal applications only.)

- *libhashium_common* is a home for miscellaneous shared code used by different Hashium Core applications. It should not depend on anything other than *libhashium_util*, *libhashium_consensus*, and *libhashium_crypto*.

- *libhashium_kernel* should only depend on *libhashium_util*, *libhashium_consensus*, and *libhashium_crypto*.

- The only thing that should depend on *libhashium_kernel* internally should be *libhashium_node*. GUI and wallet libraries *libhashiumqt* and *libhashium_wallet* in particular should not depend on *libhashium_kernel* and the unneeded functionality it would pull in, like block validation. To the extent that GUI and wallet code need scripting and signing functionality, they should be able to get it from *libhashium_consensus*, *libhashium_common*, *libhashium_crypto*, and *libhashium_util*, instead of *libhashium_kernel*.

- GUI, node, and wallet code internal implementations should all be independent of each other, and the *libhashiumqt*, *libhashium_node*, *libhashium_wallet* libraries should never reference each other's symbols. They should only call each other through [`src/interfaces/`](../../src/interfaces/) abstract interfaces.

## Work in progress

- Validation code is moving from *libhashium_node* to *libhashium_kernel* as part of [The libhashiumkernel Project #27587](https://github.com/hashium/hashium/issues/27587)
