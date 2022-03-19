---
sidebar_label: 'Tokens'
sidebar_position: 0
description: Learn about how tokens on Vinyl work
---

# Tokens

**Please note that all official token contracts are renounced**
___

## VINYL: Vinyl Token

The VINYL token is designed to be used as a medium of exchange. The built-in stability mechanism in the protocol aims to maintain the VINYL peg to 1 FTM token over time.

Note that VINYL **actively pegs via the algorithm.** It **does not mean** it will be valued at 1 FTM at all times as it is not officially collateralized.&#x20;

## TRACKS: Vinyl Share

TRACKS are one of the ways to measure the value of the Vinyl protocol and shareholder trust in its ability to maintain VINYL close to peg.

TRACKS have a **maximum total supply of 68,500** tokens distributed as follows:

* DAO Allocation: 4500 TRACKS vested linearly over 300 days
* Team Allocation: 4500 TRACKS vested linearly over 300 days
* Rewards: 59500 TRACKS are allocated for incentivizing Liquidity Providers in two shares pools over a year
* Initial mint: 1 TRACKS minted upon contract creation for initial pool

## CD: Vinyl Bonds

Vinyl Bond's (CD) main job is to help incentivize changes in Vinyl supply during an epoch contraction period. When the TWAP (Time Weighted Average Price) of VINYL falls below 1:1 FTM, CDs are issued and can be bought with VINYL at the current price. Exchanging VINYL for CDs burns VINYL tokens, taking them out of circulation (deflation) and helping to get the price back up to peg.&#x20;

These CDs can be redeemed for VINYL when the price is above peg in the future, plus an extra incentive for the longer they are held above peg. This amounts to inflation and sell pressure for VINYL when it is above peg, helping to push it back toward 1 VINYL to 1 FTM ratio.\
Contrary to early algorithmic protocols, CDs do not have expiration dates.\
\
If your VINYL is below peg exchange it for CD and redeem after peg is above 1.1 to receive bonus VINYLs!\
\
All holders are able to redeem their CDs for VINYL tokens as long as the Treasury has a positive VINYL balance, which typically happens when the protocol is in epoch expansion periods.
