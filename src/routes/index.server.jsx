import { Suspense } from "react";

import { Layout } from "../components/Layout.server";
import FeaturedCollections from '../components/FeaturedCollections.server';

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  )
}
