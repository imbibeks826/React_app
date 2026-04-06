import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { githubEndpoint } from '../../data/Constants';

function GithubDashboard() {
    const userName = "imbibeks826";
    const {isPending, error, data, isLoading} = useQuery({
        queryKey: ["githubData"],
        queryFn: async () => {
          const response = await fetch(`${githubEndpoint}${userName}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        }
    });
    console.log(isPending, error, data, isLoading);
  return (
    <div>
      <a href={data?.html_url} >Go to github</a>
    </div>
  )
}

export default GithubDashboard
