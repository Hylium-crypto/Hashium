# Copyright (c) 2023-present The Hashium Core developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or https://opensource.org/license/mit/.

function(generate_setup_nsi)
  set(abs_top_srcdir ${PROJECT_SOURCE_DIR})
  set(abs_top_builddir ${PROJECT_BINARY_DIR})
  set(CLIENT_URL ${PROJECT_HOMEPAGE_URL})
  set(CLIENT_TARNAME "hashium")
  set(HSMIUM_WRAPPER_NAME "hashium")
  set(HSMIUM_GUI_NAME "hashium-qt")
  set(HSMIUM_DAEMON_NAME "hashiumd")
  set(HSMIUM_CLI_NAME "hashium-cli")
  set(HSMIUM_TX_NAME "hashium-tx")
  set(HSMIUM_WALLET_TOOL_NAME "hashium-wallet")
  set(HSMIUM_TEST_NAME "test_hashium")
  set(EXEEXT ${CMAKE_EXECUTABLE_SUFFIX})
  configure_file(${PROJECT_SOURCE_DIR}/share/setup.nsi.in ${PROJECT_BINARY_DIR}/hashium-win64-setup.nsi USE_SOURCE_PERMISSIONS @ONLY)
endfunction()
