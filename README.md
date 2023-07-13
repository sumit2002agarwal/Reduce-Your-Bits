# Reduce Your Bits

Reduce Your Bits is a web application built using React.js that demonstrates the use of Huffman encoding algorithm to improve efficiency in data storage. The webapp showcases the application of data structures and the greedy method to find the optimal encoding for characters, reducing the number of bits required to represent them.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)

## Introduction
Huffman encoding is a lossless compression algorithm that assigns variable-length codes to characters based on their frequency of occurrence in a given dataset. By representing frequently occurring characters with shorter codes and less frequently occurring characters with longer codes, Huffman encoding achieves a more efficient representation of the data.

"Reduce Your Bits" demonstrates the step-by-step process of building a Huffman tree and generating the optimal bit-wise codes for each character in the input dataset. It provides a clear visualization of the Huffman tree and allows users to explore how different characters are encoded.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sumit2002agarwal/Reduce-Your-Bits.git
   ```

2. Navigate to the project directory:

   ```bash
   cd reduce-your-bits
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage
Once the project and its dependencies are installed, you can start the application by running the following command in the project directory:

```bash
npm start
```

This will launch the application in your browser at `http://localhost:3000`. You can then interact with the application to encode different datasets using the Huffman algorithm.

## Features
- Visual representation of the Huffman tree construction process.
- Clear visualization of the bit-wise codes assigned to each character.
- Ability to input custom datasets for encoding.
- Interactive interface to explore the encoding process and efficiency gains.

## Technologies Used
The Reduce Your Bits project utilizes the following technologies:

- React.js: A JavaScript library for building user interfaces.
- React Mermaid: A React component for rendering diagrams and flowcharts using the Mermaid syntax.


## Live Demo
You can try the live demo of the application [here](https://reduceyourbits.netlify.app/).


