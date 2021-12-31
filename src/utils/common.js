export function FetchLimitData(url, limit = 0, page = 0) {
  /* Fetch from the API url */
  let srcQuery = ``;
  if (limit === 0 && page === 0) {
    srcQuery = `{
      currencies{
        landXProperty {
          id
          name
          issuerName
          mapImageUrl
          launchProgress
          totalPurchasePrice
          category
          settlementDate
          initialTokenPrice
          tokenSupply
          dividendSchedule
          annualRentYield
          annualRentYieldUpper
          description
          address
          token {
              name
              symbol
          }
          previewImages
        }
      }
    }`
  } else {
    srcQuery = `{
      currencies (limit:${limit}, page:${page}){
        name
        landXProperty {
          id
          name
          issuerName
          mapImageUrl
          launchProgress
          totalPurchasePrice
          category
          settlementDate
          initialTokenPrice
          tokenSupply
          dividendSchedule
          annualRentYield
          annualRentYieldUpper
          description
          address
          token {
              name
              symbol
          }
          previewImages
        }
      }
    }`
  }
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      query: srcQuery
    })
  })
    .then(r => r.json())
    .then((data) => {
      return data;
    });
}

export function calculateRemainingDays(settlementDate) {
  const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
  const today = new Date().getTime();
  return Math.floor((settlementDate - today) / oneDay);
}

export function numberWithCommas(num) {
  let parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

export function numberValueInvestor(num) {
  let numbers = num.toString().split("")
  let index = numbers.length - 9
  let number = numbers.splice(0, index).join('')
  let parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}