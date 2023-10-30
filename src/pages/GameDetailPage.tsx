import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //The exclamation tells the typescript compiler that this constant will never be null
  if (isLoading) return <Spinner />;
  if (error || !game) throw error; //Can be used instead of optional chaining

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
