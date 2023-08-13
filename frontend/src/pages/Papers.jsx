import React from "react";
import PaperCard from "../components/PaperCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { papers } from "../../papersInfo";
import { ethers } from "ethers";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useState } from "react";
import { abi, journalAddress } from "../../constants";

const Papers = () => {
  const [papersInfo, setPapersInfo] = useState(papers);
  const [paperCount, setPaperCount] = useState(0);
  const [inst, setInst] = useState("");
  const [paper, setPaper] = useState({
    _authors: ["Dylan"],
    _institution: "UF",
    _citations: [],
    _citedBy: [],
    _category: "Astrophysics",
  });

  const {
    runContractFunction: publish,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: journalAddress,
    functionName: "publish",
    params: { ...paper },
  });

  const {
    runContractFunction: getCount,
    data: da1,
    iL1,
    iF1,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: journalAddress,
    functionName: "getCount",
    params: {},
  });

  // const { data, error, runContractFunction, isFetch, isLoad } =
  //   useWeb3Contract();

  // const updateUI = async () => {
  //   const count = await getCount();
  //   setPaperCount(count);

  //   let paperContract;
  //   for (let i = 0; i < paperCount; i++) {
  //     const options = {
  //       abi: abi,
  //       contractAddress: journalAddress,
  //       functionName: "getPaper",
  //       params: { _idx: i },
  //     };
  //     paperContract = await runContractFunction({ params: options }); // get paper
  //   }
  //   setInst(paperContract);

  //   // setPapersInfo(papersInfo);
  // };
  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      console.log(tx);
      // await updateUI();
      console.log("institution" + inst);
      setPaperAddress(tx.address);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          {papersInfo.map((paper, idx) => {
            return (
              <Col md="auto">
                <PaperCard {...paper} cardId={idx} />
              </Col>
            );
          })}
          <Col>
            <Button
              onClick={async () =>
                await publish({
                  onSuccess: handleSuccess,
                  onError: (error) => console.log(error),
                })
              }
            >
              Add
            </Button>
          </Col>
          <Col>
            {/* <PaperCard
              authors={["Troy", "Dylan", "Jacob"]}
              description={"lorem ipsum"}
              title={"LK-99 Superconductor"}
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Papers;
