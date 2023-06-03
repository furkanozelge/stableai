import React, { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Spinner,
  ButtonGroup,
  Button,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FiImage, FiVideo, FiMusic } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import axios from "axios";

import { getProfile } from "../../../utils/api";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../components/Footer";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("user-info");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Yükleme durumu

  const router = useRouter();
  const token = Cookies.get("access_token");

  useEffect(() => {
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await getProfile(token);
        setProfile(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token, router]);

  useEffect(() => {
    if (activeTab === "my-arts") {
      fetchArts();
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const convertBase64ToImage = (base64) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = base64;
      img.onload = () => resolve(img);
      img.onerror = (error) => reject(error);
    });
  };

  const fetchArts = async () => {
    try {
      const postData = {
        email: profile.email,
      };
      const response = await axios.post(
        "https://39b3-178-233-24-227.ngrok-free.app/show",
        postData,
        { headers: { "ngrok-skip-browser-warning": "69420" } }
      );
      const base64Images = response.data.images;

      setImages(base64Images); // base64Images dizisini doğrudan images dizisine atıyoruz
    } catch (error) {
      console.error("İstek gönderilirken bir hata oluştu:", error);
    }
    setLoading(false); // Yüklemenin tamamlandığına işaret ediyoruz
  };

  if (!profile) {
    return (
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Flex flex={1} justify="center" align="center">
          <Spinner size="xl" color="purple.500" />
        </Flex>
        <Footer />
      </Flex>
    );
  }

  return (
    <>
      <Navbar />
      <Flex mb={"20em"} direction="column" align="center" mt={8}>
        <img src="/logo.png" alt="Logo" width={150} height={150} />
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          {profile.email}
        </Text>
        <ButtonGroup mt={4}>
          <Button
            colorScheme="purple"
            onClick={() => {
              handleTabClick("my-arts");
            }}
            isActive={activeTab === "my-arts"}
          >
            My Arts
          </Button>
          <Button
            colorScheme="purple"
            onClick={() => handleTabClick("user-info")}
            isActive={activeTab === "user-info"}
          >
            User Info
          </Button>
        </ButtonGroup>
        {activeTab === "my-arts" && (
          <>
            {loading ? (
              <Box mt={"12em"} textAlign="center">
                <Spinner size="xl" color="purple.500" />
                <Text mt={4} fontWeight="bold">
                  Loading Arts...
                </Text>
              </Box>
            ) : (
              <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={8}>
                {images.map((base64, index) => (
                  <GridItem key={index}>
                    <Box
                      as="div"
                      boxShadow="2xl"
                      bg="purple.200"
                      borderRadius="10%"
                      p={4}
                      textAlign="center"
                      css={css`
                        transition: transform 0.2s;
                        &:hover {
                          transform: scale(1.1);
                        }
                      `}
                    >
                      <img
                        src={`data:image/png;base64,${base64}`}
                        alt={`Image ${index + 1}`}
                        width={250}
                        height={250}
                      />
                      <Text as="b" color="purple.400" mt={2}>{`Art ${
                        index + 1
                      }`}</Text>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            )}
          </>
        )}
        {activeTab === "user-info" && (
          <Box mt={8}>
            <Text fontSize="xl" fontWeight="bold">
              User Info
            </Text>
            <Text>{profile.email}</Text>
            {/* Add more user information as needed */}
          </Box>
        )}
      </Flex>
      <Footer />
    </>
  );
}

export default ProfilePage;
