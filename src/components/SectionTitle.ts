import styled from "styled-components"
import { theme } from "../styles/Theme"
import { font } from "../styles/Common"

export const SectionTitle = styled.h2`
  margin-bottom: 50px;
  -webkit-text-stroke: 1px ${theme.colors.accent};
  text-transform: uppercase;
  ${font({family: "'Raleway', sans-serif", color: "transparent", weight: 700, Fmax: 60, Fmin: 36 })}
`
