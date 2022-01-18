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

export function FetchData(url) {
  let srcQuery = ``;

  srcQuery = `{
          currencies {
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

export function FetchIDProjetDetail(url, codeProject) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      'currency_id': codeProject
    }),
  })
    .then(r => r.json())
    .then((data) => {
      return data
    });
}

export function FetchDetailProject(url, id) {
  let srcQuery = ``;

  srcQuery = `{
        node(id: "${id}") {
            ... on Currency {
              id
              landXProperty {
                ...propertyInfo
                }
            }
      }
    }

      
    fragment propertyInfo on LandXProperty {
        id
        acquisitionCost
        address
        annualRentYield
      annualRentYieldUpper
        cashReserved
        description(language: "id")
        facilities {
            bathroom {
                quantity
            }
            bedroom {
                quantity
            }
            parking {
                quantity
            }
        }
        initialTokenPrice
        launchMarket {
            id
            state
            orderBook {
                asks {
                    amount
                    price
                }
            }
        }
        category
        launchProgress
        dividendSchedule
        mapImageUrl
        mapUrl
        previewImages
        propertyPrice,
        settlementDate
        token {
            id
            name
            symbol
        }
        tokenSupply
        totalPurchasePrice
    }`

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

export function CalculateRemainingDays(settlementDate) {
  const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
  const today = new Date().getTime();
  return Math.floor((settlementDate - today) / oneDay);
}

export function NumberWithCommas(num) {
  let parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

export function NumberValueInvestor(num) {
  let numbers = num.toString().split("")
  let index = numbers.length - 9
  let number = numbers.splice(0, index).join('')
  let parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

export function TwoDecimalNumber(num) {
  let numbers = num.toString().split("")
  let index = numbers.length - 7
  let number = numbers.splice(0, index).join('')
  let parts = number.toString().split(".")
  return (parts / 100).toFixed(2).toString().replace(".", ",")
}

export function capitalizeTheFirstLetterOfEachWord(words) {
  let separateWord = words.toLowerCase().split(' ');
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
  }
  return separateWord.join(' ');
}