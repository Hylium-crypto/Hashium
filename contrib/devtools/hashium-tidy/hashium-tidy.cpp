// Copyright (c) 2023 Hashium Developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "nontrivial-threadlocal.h"

#include <clang-tidy/ClangTidyModule.h>
#include <clang-tidy/ClangTidyModuleRegistry.h>

class HashiumModule final : public clang::tidy::ClangTidyModule
{
public:
    void addCheckFactories(clang::tidy::ClangTidyCheckFactories& CheckFactories) override
    {
        CheckFactories.registerCheck<hashium::NonTrivialThreadLocal>("hashium-nontrivial-threadlocal");
    }
};

static clang::tidy::ClangTidyModuleRegistry::Add<HashiumModule>
    X("hashium-module", "Adds hashium checks.");

volatile int HashiumModuleAnchorSource = 0;
