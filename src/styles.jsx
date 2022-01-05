import styled, { css } from 'styled-components'

export const RatioVariants = {
  default: css`
    width: 33.3333%;
    aspect-ratio: auto 1 / 1;
  `,
  cube: css`
    width: 33.3333%;
    aspect-ratio: auto 1 / 1;
  `,
  cubeDouble: css`
    width: 66.6666%;
    aspect-ratio: auto 1 / 1;
  `,
  cubeFull: css`
    width: 100%;
    aspect-ratio: auto 1 / 1;
  `,
  rectangle: css`
    width: 66.6666%;
    aspect-ratio: auto 2 / 1;
  `
}

const SafariSupportAspectRatio = css`
  &::before {
    float: left;
    content: '';
    z-index: 1;
    padding-top: 100%;
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }

  label,
  form {
    display: table-row;
    z-index: 2;
    position: -webkit-sticky;
    line-height: 120%;

    &:nth-of-type(2) {
      line-height: 140%;
    }
  }

  display: -webkit-box;
  vertical-align: middle;
`

export const BaseTileStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  outline: none;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  word-break: break-word;
  padding: 5px;
  border: 1px solid #fff;
  ${({ ratio }) => RatioVariants[ratio]};

  @supports not (aspect-ratio: auto 1 / 1) {
    &[data-ratio='cube'] {
      ${SafariSupportAspectRatio};
    }
    &[data-ratio='cubeFull'] {
      ${SafariSupportAspectRatio};
    }
  }

  @supports not (aspect-ratio: auto 2 / 1) {
    &[data-ratio='rectangle'] {
      ${SafariSupportAspectRatio};

      &::before {
        padding-top: 45%;
      }
    }
  }

  a > * {
    cursor: pointer;
    display: block;
    overflow: hidden;
  }
`

export const StyledTile = styled.div`
  ${BaseTileStyle};
  ${({ styledBox }) => styledBox};
  ${({ styledContent }) => styledContent};
`
