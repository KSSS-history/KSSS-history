//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
//This is the data fetching the content for the AboutPage from Contentful
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 

import client from "./client"



const useContentful_aboutUs = () => {

    //function to fetch the data from "About Us" content type:
    const getAboutUs = async () => {


        try {
            const response = await client.getEntries({
                content_type: "aboutUs",
                select: "fields"

            });

            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            //Sanitizing data from Contentful to get only fields that needed:
            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            const sanitizedAboutUsData = response.items.map((item) => {

                const aboutUsImage = item.fields.aboutUsImage?.fields || null;


                return {
                    id: item.sys.id,
                    ...item.fields,
                    aboutUsImage
                }
            })

            return sanitizedAboutUsData;

        }
        catch (error) {
            console.log('Error: trying to fetch data for the About Us page:', error);

        }



    }

    return { getAboutUs };
}

export default useContentful_aboutUs