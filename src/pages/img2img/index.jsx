import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Heading, Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);

    // send formData to your backend endpoint for image upload
    // e.g. using fetch or axios
    // then handle the response as needed
  };

  return (
    <>
      <Navbar />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
        <Heading as="h1" mb={4}>
          Upload an image and get brand new artwork!
        </Heading>
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="image-upload" fontWeight="bold">
              </FormLabel>
              <Input
                type="file"
                id="image-upload"
                accept="image/*"
                display="none"
                onChange={handleFileInputChange}
              />
              <Button color="#000000" bg="#00000" as="label" htmlFor="image-upload" variant="outline">
                {selectedFile ? selectedFile.name : 'Choose File'}
              </Button>
            </FormControl>
            <Button color="#000000" bg="#b28afd"  type="submit" disabled={!selectedFile}>
              Upload
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}
