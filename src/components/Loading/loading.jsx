/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"
import styled from "@emotion/styled";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div>
      <Spinner color="primary"/>
    </div>
  );
}

export default Loading;
