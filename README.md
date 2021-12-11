# StockTicker

## Solution
View live solution at:
https://npvo2.csb.app/

Stock Ticker with change in price shown as a **dollar amount**
![Screen Shot 2021-12-11 at 11 16 38 AM](https://user-images.githubusercontent.com/48306510/145683747-0558c0f5-bb00-45cc-adce-64a69b89f254.png)

Stock Ticker with change in price shown as a **percent**
![Screen Shot 2021-12-11 at 11 17 03 AM](https://user-images.githubusercontent.com/48306510/145683751-a0a67fea-f516-4771-b1f8-760e2f9727d7.png)

## Technologies

- React, Styled Components

## Features

- Tickers are color-coded green and red to show whether a price increased or decreased
- Choose whether you want to see the change in price as a dollar amount or percentage
- If a new, unexpected symbol such as AAPL comes through the StockTicker listener, it will automatically be rendered with the other symbols.
  - Note that although this works fine for a 4th symbol, the interface will need to be updated is you want to neatly display 5 or more symbols.

## Data Structure

- Example of state: {
  - changeUnitsIsDollars: true,
  - stocks: {
    - NASDAQ: {
      - start: 100,
      - change: 20,
      - end: 120},
    - 'DOW J': {
      - start: 60,
      - change: -5,
      - end: 55},
    - 'S&P 500': {
      - start: 545,
      - change: 15,
      - end: 560}
  - }
- }
- 'changeUnitsIsDollars' tells us whether the change is stock price is expressed in dollars or percents
- This structure was chosen to have a single node for each stock symbol. This presents an easy-to-understand hierarchy of data where a key is the stock symbol and the value is information about that stock.
  - The other consideration was an array of objects where each object contains symbol, start, change, and end. However, this requires entering an object to understand what stock it represents.

## Design Decisions

- Do we need to store stock history?
  - No, tickers only show the current price. Historical prices are stored in a database elsewhere. Not storing history prevents unnecessarily using memory.
- Why not push the stock updates into an array of objects? Why refactor to be nested objects?
  - Nested objects creates an easier-to-understand hierarchy of data. It allows us to store the symbol as the key and all other information as a value.

## Future Improvements

- Add a 'removeListener' method to window.StockTicker. Call this when app unmounts.
- Dynamically push tickers to an additional row when the first row gets too crowded. For instance, if you have 6 tickers then they will not all fit on the first row.

## Questions about the Process

- What was the biggest challenge faced while developing this app?
