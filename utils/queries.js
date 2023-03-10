import { gql } from "graphql-request";
import connectHygraph from "../lib/hygraph";

const hygraph = connectHygraph();

export const getCoffeesUid = () =>
  hygraph.request(gql`
    {
      coffees(first: 22) {
        uid
      }
    }
  `);

export const getOneCoffee = (uid) =>
  hygraph.request(
    gql`
      query getOneCoffee($uid: String!) {
        coffees(where: { uid: $uid }) {
          uid
          name
          price
          reviews
          rating
          descriptions
          descriptionTitle
          details
          images
          mediumImage
          smallImage
          thumbnailImage
          styles
          sizes
          format
          roast
          accentColor
          additionalInformation
          videoUrl
        }
      }
    `,
    { uid: uid }
  );

export const getAllCoffees = () =>
  hygraph.request(
    gql`
      {
        coffees(first: 22) {
          uid

          name
          price
          reviews
          rating
          createdAt
          descriptions
          descriptionTitle
          details
          images
          mediumImage
          smallImage
          thumbnailImage
          styles
          sizes
          format
          roast
          accentColor
          additionalInformation
          videoUrl
        }
      }
    `
  );

export const getSpecificCoffees = (filters) =>
  hygraph.request(
    gql`
      query getSpecificCoffees($filters: CoffeeWhereInput!) {
        coffees(where: $filters) {
          uid
          name
          price
          mediumImage
          thumbnailImage
          smallImage
          rating
          reviews
          format
          roast
          sizes
        }
      }
    `,
    { filters }
  );

export const getSubscriptionImages = () =>
  hygraph.request(gql`
    {
      assets(where: { fileName_contains: "_", fileName_not_contains: "-" }, first: 50) {
        fileName
        url
      }
    }
  `);

export const getLocationsIn = (area) =>
  hygraph.request(
    gql`
      query getLocations($area: String!) {
        storeLocations(first: 25, where: { area: $area }) {
          address
          city
          coordinates {
            latitude
            longitude
          }
          name
          phoneNumber
          zipCode
          id
        }
      }
    `,
    { area }
  );

export const searchLocationsNear = (search) =>
  hygraph.request(
    gql`
      query getLocations($search: String!) {
        storeLocations(first: 25, where: { _search: $search }) {
          address
          city
          coordinates {
            latitude
            longitude
          }
          name
          phoneNumber
          zipCode
          id
        }
      }
    `,
    { search }
  );
