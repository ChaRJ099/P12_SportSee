// import { useState, useEffect } from "react";

const host = "http://localhost:4200";

export const getUserMainData = async (id) => {
  return await fetch(`${host}/user/${id}`)
    .then((response) => response.json())
    .then(({ data }) => {
      //   console.log("data", data);
      return data;
    });
};

export const getUserActivity = async (id) => {
  return await fetch(`${host}/user/${id}/activity`)
    .then((response) => response.json())
    .then(({ data }) => {
      //   console.log("response UserActivity", response);
      return data;
    });
};

export const getUserAverage = async (id) => {
  return await fetch(`${host}/user/${id}/average-sessions`)
    .then((response) => response.json())
    .then(({ data }) => {
      //   console.log("response UserAverage", response);
      return data;
    });
};

export const getUserPerformance = async (id) => {
  return await fetch(`${host}/user/${id}/performance`)
    .then((response) => response.json())
    .then(({ data }) => {
      //   console.log("response UserPerformance", response);
      return data;
    });
};
