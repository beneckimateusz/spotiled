import { ApolloError, gql, useQuery } from '@apollo/client';
import React from 'react';
import { ExternalUrls, Followers, Image } from '../types';

export interface CurrentUserProfile {
  id: string;
  email: string;
  display_name: string;
  product: string;
  followers: Followers;
  images: Image[];
  external_urls: ExternalUrls;
}

interface CurrentUserProfileData {
  currentUserProfile: CurrentUserProfile;
}

interface UserContextProps {
  loading: boolean;
  error?: ApolloError;
  currentUser?: CurrentUserProfile;
}

const UserContext = React.createContext<Partial<UserContextProps>>({});

const CURRENT_USER = gql`
  query {
    currentUserProfile {
      id
      email
      display_name
      product
      followers {
        href
        total
      }
      images {
        height
        width
        url
      }
      external_urls {
        spotify
      }
    }
  }
`;

export const UserProvider: React.FC = ({ children }) => {
  const { error, loading, data } = useQuery<CurrentUserProfileData>(
    CURRENT_USER
  );
  const currentUser = data?.currentUserProfile;

  return (
    <UserContext.Provider value={{ loading, error, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
