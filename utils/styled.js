import { Dimensions } from 'react-native';
import { css } from 'styled-components';
import * as R from 'ramda';

let designWidth = 1024;

export const setWidth = width => {
  designWidth = width;
};

export const getDp = val => (val / designWidth) * Dimensions.get('window').width;

export const convert = val => (typeof val === 'number' ? `${getDp(val)}px` : val);

export const space = props => css`
  ${props.mt != null && `margin-top: ${convert(props.mt)};`}
  ${props.mr != null && `margin-right: ${convert(props.mr)};`}
  ${props.mb != null && `margin-bottom: ${convert(props.mb)};`}
  ${props.ml != null && `margin-left: ${convert(props.ml)};`}
  ${props.my != null && `margin-vertical: ${convert(props.my)};`}
  ${props.mx != null && `margin-horizontal: ${convert(props.mx)};`}
  ${props.m != null && `margin: ${convert(props.m)};`}
  ${props.pt != null && `padding-top: ${convert(props.pt)};`}
  ${props.pr != null && `padding-right: ${convert(props.pr)};`}
  ${props.pb != null && `padding-bottom: ${convert(props.pb)};`}
  ${props.pl != null && `padding-left: ${convert(props.pl)};`}
  ${props.py != null && `padding-vertical: ${convert(props.py)};`}
  ${props.px != null && `padding-horizontal: ${convert(props.px)};`}
  ${props.p != null && `padding: ${convert(props.p)};`}
`;

export const flex = props => css`
  ${props.flex && `flex: ${props.flex};`}
  ${props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props.alignItems && `align-items: ${props.alignItems};`}
  ${props.alignSelf && `align-self: ${props.alignSelf};`}
`;

export const position = props => css`
  ${props.position && `position: ${props.position};`}
  ${props.zIndex && `z-index: ${props.zIndex};`}
  ${props.top && `top: ${convert(props.top)};`}
  ${props.right && `right: ${convert(props.right)};`}
  ${props.bottom && `bottom: ${convert(props.bottom)};`}
  ${props.left && `left: ${convert(props.left)};`}
`;

export const size = props => css`
  ${props.w && `width: ${convert(props.w)};`}
  ${props.minW && `min-width: ${convert(props.minW)};`}
  ${props.maxW && `max-width: ${convert(props.maxW)};`}
  ${props.h && `height: ${convert(props.h)};}`}
  ${props.minH && `min-height: ${convert(props.minH)};}`}
  ${props.maxH && `max-height: ${convert(props.maxH)};}`}
  ${props.aspectRatio && `aspectRatio: ${props.aspectRatio};}`}
`;

export const border = props => css`
  ${props.borderTop != null && `border-top-width: ${props.borderTop}px;`}
  ${props.borderRight != null && `border-right-width: ${props.borderRight}px;`}
  ${props.borderBottom != null && `border-bottom-width: ${props.borderBottom}px;`}
  ${props.borderLeft != null && `border-left-width: ${props.borderLeft}px;`}
  ${props.border != null && `border-width: ${props.border}px;`}
  ${props.borderRadius != null && `border-radius: ${props.borderRadius};`}
  ${props.borderStyle != null && `border-style: ${props.borderStyle};`}
`;

export const color = props => css`
  ${props.color && `color: ${R.pathOr(props.color, ['theme', 'colors', props.color], props)};`}
  ${props.bg && `background-color: ${R.pathOr(props.bg, ['theme', 'colors', props.bg], props)};`}
  ${props.borderColor &&
    `border-color: ${R.pathOr(props.borderColor, ['theme', 'colors', props.borderColor], props)};`}
`;

export const font = props => css`
  ${props.fontSize && `font-size: ${convert(props.fontSize)};`}
  ${props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${props.fontStyle && `font-style: ${props.fontStyle};`}
  ${props.fontFamily && `font-family: ${props.fontFamily};`}
  ${props.textAlign && `text-align: ${props.textAlign};`}
`;
