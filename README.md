# StockTicker

## Solution
(insert pictures and link to solution here)

## Technologies
* React, Styled Components

## Data Structure
* Example of state: {
    * changeUnitsIsDollars: true,
    * stocks: {
        * NASDAQ: {
            * start: 100,
            * change: 20,
            * end: 120},
        * 'DOW J': {
            * start: 60,
            * change: -5,
            * end: 55},
        * 'S&P 500': {
            * start: 545,
            * change: 15,
            * end: 560}
    * }
* }
* 'changeUnitsIsDollars'  tells us what the change is stock price is expressed in dollars or percents
* This structure was chosen to have a single node for each stock symbol. This presents an easy-to-understand hierarchy of data. 
    * The other consideration was an array of objects where each object contains symbol, start, change, and end. However, this requires entering an object to understand what stock it represents.

## Features
* Choose whether you want to see the change in price as a dollar amount or percentage
* If a new, unexpected symbol such as AAPL comes through the StockTicker listener, it will automatically be rendered with the other symbols.
    * Note that although this works fine for a 4th symbol, the interface will need to be updated is you want to neatly display 5 or more symbols.

## Design Decisions

## Questions about the Process

## Future Improvements