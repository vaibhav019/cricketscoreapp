import React, { useEffect, useState } from "react";
//import logo from "./logo.svg";
import "./App.css";

import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid } from "@material-ui/core";
function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data.matches);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      
      <Container>
        <Grid container>
          <Grid item xs={12}>
          {
            matches.map((match) => {
            return (
              <MyCard  match={match} />  
            )
            }
              
            )
          }
          </Grid>
        </Grid>
      </Container>
    </div>
  );
            }

export default App;

