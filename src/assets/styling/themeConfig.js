import { createTheme } from '@mui/material/styles'

//IF YOU WANT TO USE THESE VARIABLES IN THE FUTURE, JUST UNCOMMENT IT

// const brandgrey50 = '#eaeff4'
// const brandgrey100 = '#ccd7df'
// const brandgrey200 = '#adbcc8'
// const brandgrey300 = '#8da1b0'
// const brandgrey400 = '#768c9e'
// const brandgrey500 = '#5e798d'
// const brandgrey600 = '#516a7c'
// const brandgrey700 = '#425766'
// const brandgrey800 = '#344450'
// const brandgrey900 = '#222f39'

const brandgreen50 = '#e4f6e8'
// const brandgreen100 = '#bde8c7'
// const brandgreen200 = '#91d8a2'
// const brandgreen300 = '#5fca7d'
// const brandgreen400 = '#2dbe60'
// const brandgreen500 = '#00b242'
// const brandgreen600 = '#00a339'
// const brandgreen700 = '#00912d'
// const brandgreen800 = '#008021'
// const brandgreen900 = '#00600c'

// const neutralcanvas = '#f5f5f7'
// const neutral50 = '#f8f8f8'
const neutral100 = '#e5e5e5'
const neutral300 = '#d5d5d5'
const neutral500 = '#9e9e9e'
const neutral700 = '#4a4a4a'
const neutral900 = '#222222'
// const neutralblack = '#171515'

const accent1 = '#14a2ff'
const accent1dark = '#0E71B2'
const accent2 = '#00adb9'
const accent2dark = '#007E87'
const accent3 = '#7962ff'
const accent3light = '#D7D0FF'
const accent3dark = '#493B99'

// const infolight = '#cee6f4'
const infonormal = '#64b6e2'
// const infodark = '#1a86c0'

// const successlight = '#BDE8C7'
const successnormal = '#2DBE60'
// const successdark = '#00912D'

// const warninglight = '#FDE47A'
const warningnormal = '#F5A623'
// const warningdark = '#AA6A00'

// const errorlight = '#F7ABB4'
const errornormal = '#EF4056'
// const errordark = '#A6061B'

// //END COLOR REGION

// //BORDER RADIUS REGION
// const radiusnone = 0
// const radiussmall = 4
const radiusregular = 8
// const radiuslarge = 12

// //END BORDER RADIUS REGION

// //BOX SHADOW REGION
// const shadownone = 'none'
// const shadowsmall = '0px 1px 1px #C4C4C4'
// const shadowregular = '0px 4px 4px rgba(213, 213, 213, 0.3)'
// const shadowmedium = '0px 6px 6px rgba(213, 213, 213, 0.4)'
const shadowlarge = '0px 10px 10px rgba(213, 213, 213, 0.5)'
// // END BOX SHADOW REGION

// //TONAL REGION
// const tonalopacity24 = 0.24;
// const tonalopacity32 = 0.32;
// const tonalopacity48 = 0.48;
// //END TONAL REGION

export const themeconfig = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2DBE60',
      light: '#BDE8C7',
      dark: '#00912D',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#5e798d',
      contrastText: '#2DBE60',
    },
    accent1: {
      light: accent1,
      main: accent1,
      dark: accent1dark,
      contrastText: "#fff"
    },
    accent2: {
      light: accent2,
      main: accent2,
      dark: accent2dark,
      contrastText: "#fff"
    },
    accent3: {
      light: accent3light,
      main: accent3,
      dark: accent3dark,
      contrastText: "#fff"
    },
    error: {
      main: '#EF4056',
      dark: '#A6061B',
      light: '#EF4056',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    warning: {
      main: '#F5A623',
      light: '#FDE47A',
      dark: '#AA6A00',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    info: {
      main: '#64b6e2',
      light: '#cee6f4',
      dark: '#1a86c0',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    success: {
      main: '#2DBE60',
      light: '#BDE8C7',
      dark: '#00912D',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    neutral: {
      light: neutral500,
      main: neutral700,
      dark: neutral900,
      contrastText: "#fff"
    },
    containedNeutral: {
      light: 'rgba(255,255,255,0)', //transparent
      main: 'rgba(255,255,255,0)', //transparent
      dark: 'rgba(255,255,255,0)', //transparent
      contrastText: "#000000" //white
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 48,
          height: 28,
          padding: '0px',
          margin: 8,
        },
        switchBase: {
          height: 42,
          padding: 2,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
              backgroundColor: '#F5A623'
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
          color: '#fff',
          margin: '0px 4px 15px 0px'
        },
        track: {
          borderRadius: 13,
          backgroundColor: neutral100,
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          // borderRadius: radiusregular,
          fontSize: '0.85rem',
          letterSpacing: '2px'
        }
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '4px 0px 8px 0px',
        }
      }
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '8px',
          '.MuiInputLabel-root': { //Repositioning the Input label
            top: '-15px',
            left: '-15px',
            '&.Mui-focused': {
              color: neutral700,
            }
          },
          '.MuiSvgIcon-root': {
            color: neutral500
          },
          '.MuiInputBase-root': { //For textfield without Status class (e.g: warning, error, success)
            borderRadius: radiusregular,
            backgroundColor: 'white',
            padding: '0px 0px 0px 8px',
            '.MuiInputBase-input': {
              height: '40px',
              padding: '0px 12px'
            },
            'textarea': {
              margin: '8px 0px',
              padding: '8px',
              minHeight: '50px'
            },
            '&.Mui-disabled': {
              backgroundColor: neutral300,
            },
            '&.Mui-focused': {
              outline: '2px solid ' + neutral300,
            },
            'fieldset': {
              border: 'none'
            }
          },
          '&.warning, &.error, &.success': { // Darken the input label when focused
            '.MuiInputLabel-root.Mui-focused': {
              filter: 'brightness(85%)'
            }
          },
          //Settings for Textfield with Status class (e.g: warning, error, success)
          '&.warning': {
            '.MuiInputBase-root': {
              outline: '2px solid ' + warningnormal,
              '.MuiIconButton-root': {
                border: '1px solid' + warningnormal
              }
            },
            '.MuiInputLabel-root, .MuiSvgIcon-root': {
              color: warningnormal,
            },
          },
          '&.error': {
            '.MuiInputBase-root': {
              outline: '2px solid ' + errornormal,
              '.MuiIconButton-root': {
                border: '1px solid' + errornormal
              }
            },
            '.MuiInputLabel-root, .MuiSvgIcon-root': {
              color: errornormal,
            },
          },
          '&.success': {
            '.MuiInputBase-root': {
              outline: '2px solid ' + successnormal,
              '.MuiIconButton-root': {
                border: '1px solid' + successnormal
              }
            },
            '.MuiInputLabel-root, .MuiSvgIcon-root': {
              color: successnormal,
            },
          },
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          padding: '16px',
          '&.Mui-focused': {
            backgroundColor: brandgreen50
          }
        },
        listbox: {
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          padding: '12px',
          '.MuiIconButton-root': {
            height: 20,
            padding: 12,
            width: 20,
            border: '1px solid ' + neutral500
          }
        },
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small'
      },
    },
    MuiTextField: { //To keep the label stay on top of the Textfield
      defaultProps: {
        InputLabelProps: {
          shrink: true
        }
      },
    }, MuiIconButton: {
      styleOverrides: {
        root: {
          // color: neutral700
        }
      }
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '.MuiPaper-root': {
            boxShadow: shadowlarge,
            borderRadius: radiusregular,
            backgroundColor: 'white',
            color: neutral900,
          },
          //To give border on snackbar
          '&[color=primary], &[color=success]': {
            '.MuiPaper-root': {
              border: '1px solid ' + successnormal,
            },
          }, '&[color=accent1]': {
            '.MuiPaper-root': {
              border: '1px solid ' + accent1,
            }
          }, '&[color=accent2]': {
            '.MuiPaper-root': {
              border: '1px solid ' + accent2,
            },
          }, '&[color=info]': {
            '.MuiPaper-root': {
              border: '1px solid ' + infonormal,
            }
          }, '&[color=error]': {
            '.MuiPaper-root': {
              border: '1px solid ' + errornormal,
            }
          }, '&[color=warning]': {
            '.MuiPaper-root': {
              border: '1px solid ' + warningnormal,
            }
          },
        }
      }
    }
  },
});