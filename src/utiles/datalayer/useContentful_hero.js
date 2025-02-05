//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
//This is the data fetching for the Hero section from Contentful
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 

import client from "./client"



const useContentful_hero = () => {

    //function to fetch the data from "Hero" content type:
    const getHero = async () => {

        try {
            const response = await client.getEntries({
                content_type: "hero",
                select: "fields"

            });

            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            //Sanitizing data from Contentful to get only fields that needed:
            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            const sanitizedHeroData = response.items.map((item) => ({
                id: item.sys.id,
                ...item.fields
            }));


            // Ensure we return an array with at most one object
            return sanitizedHeroData;

        }
        catch (error) {
            console.log('Error: trying to fetch data for the Hero section:', error);

        }



    }


    return { getHero };
}

export default useContentful_hero