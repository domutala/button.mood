export interface ButtonStyle {
  backgroundColor: string;
  color: string;
  width: string;
  height: string;

  // padding
  padding: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  paddingXlg: string;

  // font-size
  fontSize: string;
  lineHeight: string;

  borderWidth: string;
  borderRadius: string;
  borderColor: string;
  borderStyle: string;
  opacity: string;

  transform?: string;
  boxShadow?: string;
}

export interface PaddingOptions {
  x: number;
  y: number;
}

export interface ButtonOptions {
  color?: any;
  lightColor: any;
  darkColor: any;
  padding: { [key: string]: PaddingOptions };
  size: { [key: string]: number };
  fontSize: { [key: string]: number };
  lineHeight: { [key: string]: number };
  rounded: { [key: string]: number };
  boxShadow: { [key: string]: string };
  borderWidth: number;
  elevate: number;
  scale: number;
}

export const buttonOptions: ButtonOptions = {
  lightColor: '#fff',
  darkColor: '#000',
  padding: {
    default: {
      x: 13,
      y: 9
    },
    sm: { x: 3, y: 3 },
    md: { x: 5, y: 5 },
    lg: { x: 15, y: 9 },
    xl: { x: 20, y: 11 }
  },
  fontSize: {
    default: 14,
    sm: 11,
    md: 13,
    lg: 20,
    xl: 28
  },
  lineHeight: {
    default: 1.4,
    sm: 1,
    md: 1.2,
    lg: 1.6,
    xl: 1.8
  },
  size: {
    default: 37,
    sm: 19,
    md: 27,
    lg: 52,
    xl: 72
  },
  rounded: {
    default: 6,
    scare: 0,
    sm: 3,
    lg: 8,
    pill: 100,
    circle: 1000
  },
  boxShadow: {
    default: '0 6px 12px 0 rgba(0,0,0,.25)',
    sm: '0 2px 4px 0 rgba(0,0,0,.15)',
    lg: '0 16px 32px 0 rgba(0,0,0,.25)'
  },
  borderWidth: 1,
  elevate: -3,
  scale: 1.2
};
