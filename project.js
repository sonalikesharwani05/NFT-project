/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFThold=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (city_name,image,college_name,description) {
    const NFT={
        "city_name":city_name,
        "image":image,
        "college_name": college_name,
        "description":description
    };
        NFThold.push(NFT);
        console.log("Minting",city_name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("*BEST COLLEGES IN CHHATTISGARH*\n");
    for(let i =0;i<NFThold.length;i++){
        console.log("city Name:\t"+ NFThold[i].city_name);
        console.log("image:\t"+NFThold[i].image);
        console.log("College Name:\t"+NFThold[i].college_name);
        console.log("Description:\t"+NFThold[i].description);
        console.log("\n");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFThold.length;

}

// call your functions below this line
mintNFT("Bhilai","415253bhilai.jpg","Bhilai Institute of Technology","Bhilai Institute Of Technology, Durg, with a mission to provide world class technical manpower to serve the industry, profession and society and to contribute effectively to the national economic development, has acquired the status of one of the premier technological institutions of India.");
mintNFT("Raipur","download.jpeg","NIT Raipur","The institute is committed to the challenging task of development of technical education by preparing seasoned graduates in highly sophisticated field of engineering and technology.");
mintNFT("Bhilai","download (1).jpeg","Chhattisgarh Swami Vivekanand Technical University","Chhattisgarh Swami Vivekanand Technical University (CSVTU) was established by an act (No. 25 of 2004) of legislature passed by the Chhattisgarh State Govt. Assembly on 21st January 2005.");
listNFTs();
console.log("Total:"+getTotalSupply());