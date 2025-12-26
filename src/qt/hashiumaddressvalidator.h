// Copyright (c) 2011-2020 The Hashium Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef HASHIUM_QT_HASHIUMADDRESSVALIDATOR_H
#define HASHIUM_QT_HASHIUMADDRESSVALIDATOR_H

#include <QValidator>

/** Base58 entry widget validator, checks for valid characters and
 * removes some whitespace.
 */
class HashiumAddressEntryValidator : public QValidator
{
    Q_OBJECT

public:
    explicit HashiumAddressEntryValidator(QObject *parent);

    State validate(QString &input, int &pos) const override;
};

/** Hashium address widget validator, checks for a valid hashium address.
 */
class HashiumAddressCheckValidator : public QValidator
{
    Q_OBJECT

public:
    explicit HashiumAddressCheckValidator(QObject *parent);

    State validate(QString &input, int &pos) const override;
};

#endif // HASHIUM_QT_HASHIUMADDRESSVALIDATOR_H
