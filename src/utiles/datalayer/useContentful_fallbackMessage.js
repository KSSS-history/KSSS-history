//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
//This is the data fetching for the Fallback article from Contentful
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 

import client from "./client"



const useContentful_fallbackMessage = () => {

    //function to fetch the data from "fallback" content type:
    const getFallback = async () => {


        try {
            const response = await client.getEntries({
                content_type: "fallbackMessage",
                select: "fields"

            });

            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            //Sanitizing data from Contentful to get only fields that needed:
            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            const sanitizedFallbackData = response.items.map((item) => {

                const fallbackImage = item.fields.fallbackImage?.fields || null;


                return {
                    id: item.sys.id,
                    ...item.fields,
                    fallbackImage
                }
            })

            sanitizedFallbackData.forEach((entry, index) => {
                console.log(`SANITIZED fallback from use_Contenful ${index + 1}:`, entry);
            });

            return sanitizedFallbackData;

        }
        catch (error) {
            console.log('Error: trying to fetch data for the fallback section:', error);

        }



    }


    return { getFallback };
}

export default useContentful_fallbackMessage