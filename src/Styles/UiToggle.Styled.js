import styled from "styled-components";

export const UiToggle = styled.div`
  margin: 7px 0 0 0;
  padding: 0;
  padding-left: 0 !important;

  input[type="checkbox"],
  input[type="radio"] {
    display: none;
  }

  input[type="checkbox"]:checked + label,
  input[type="radio"]:checked + label {
    border-color: ${({ theme }) => theme.colors.OnSecondary};
    background: ${({ theme }) => theme.colors.Secondary};
    box-shadow: inset 0 0 0 10px ${({ theme }) => theme.colors.Secondary};
  }

  input[type="checkbox"]:checked + label > div,
  input[type="radio"]:checked + label > div {
    margin-left: 22px;
  }

  label {
    padding-left: 0;
    transition: all 200ms ease;
    display: inline-block;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: #8c8c8c;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.Secondary};
    border: 2px solid ${({ theme }) => theme.colors.OnSecondary};
    color: #fff;
    border-radius: 21px;
    width: 42px;
    height: 21px;
  }

  label div {
    transition: all 200ms ease;
    background: ${({ theme }) => theme.colors.OnSecondary};
    width: 20px;
    aspect-ratio: 1/1;
    border-radius: 11px;
  }

  label:hover,
  label > div:hover {
    cursor: pointer;
  }
`;
