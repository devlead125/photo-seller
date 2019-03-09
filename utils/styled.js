import { Dimensions } from 'react-native';
import { css } from 'styled-components';
import * as R from 'ramda';

let designWidth = 1024;

export const setDesignWidth = width => {
  designWidth = width;
};

export const getDp = val =>
  typeof val === 'number' ? `${(val / designWidth) * Dimensions.get('window').width}px` : val;

export const space = props => css`
  ${props.mt != null && `margin-top: ${getDp(props.mt)};`}
  ${props.mr != null && `margin-right: ${getDp(props.mr)};`}
  ${props.mb != null && `margin-bottom: ${getDp(props.mb)};`}
  ${props.ml != null && `margin-left: ${getDp(props.ml)};`}
  ${props.my != null && `margin-vertical: ${getDp(props.my)};`}
  ${props.mx != null && `margin-horizontal: ${getDp(props.mx)};`}
  ${props.m != null && `margin: ${getDp(props.m)};`}
  ${props.pt != null && `padding-top: ${getDp(props.pt)};`}
  ${props.pr != null && `padding-right: ${getDp(props.pr)};`}
  ${props.pb != null && `padding-bottom: ${getDp(props.pb)};`}
  ${props.pl != null && `padding-left: ${getDp(props.pl)};`}
  ${props.py != null && `padding-vertical: ${getDp(props.py)};`}
  ${props.px != null && `padding-horizontal: ${getDp(props.px)};`}
  ${props.p != null && `padding: ${getDp(props.p)};`}
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
  ${props.top && `top: ${getDp(props.top)};`}
  ${props.right && `right: ${getDp(props.right)};`}
  ${props.bottom && `bottom: ${getDp(props.bottom)};`}
  ${props.left && `left: ${getDp(props.left)};`}
`;

export const size = props => css`
  ${props.w && `width: ${getDp(props.w)};`}
  ${props.minW && `min-width: ${getDp(props.minW)};`}
  ${props.maxW && `max-width: ${getDp(props.maxW)};`}
  ${props.h && `height: ${getDp(props.h)};}`}
  ${props.minH && `min-height: ${getDp(props.minH)};}`}
  ${props.maxH && `max-height: ${getDp(props.maxH)};}`}
`;

export const border = props => css`
  ${props.borderTop && `border-top-width: ${props.borderTop};`}
  ${props.borderRight && `border-right-width: ${props.borderRight};`}
  ${props.borderBottom && `border-bottom-width: ${props.borderBottom};`}
  ${props.borderLeft && `border-left-width: ${props.borderLeft};`}
  ${props.border && `border-width: ${props.border};`}
  ${props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${props.borderStyle && `border-style: ${props.borderStyle};`}
`;

export const color = props => css`
  ${props.color && `color: ${R.pathOr(props.color, ['theme', 'colors', props.color], props)};`}
  ${props.bg && `background-color: ${R.pathOr(props.bg, ['theme', 'colors', props.bg], props)};`}
  ${props.borderColor &&
    `border-color: ${R.pathOr(props.borderColor, ['theme', 'colors', props.borderColor], props)};`}
`;

export const font = props => css`
  ${props.fontSize && `font-size: ${getDp(props.fontSize)};`}
  ${props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${props.fontStyle && `font-style: ${props.fontStyle};`}
  ${props.fontFamily && `font-family: ${props.fontFamily};`}
  ${props.textAlign && `text-align: ${props.textAlign};`}
`;
