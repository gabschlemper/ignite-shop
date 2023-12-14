import Image from "next/image";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageurl: string;
  }[];
}
export default function Success({ customerName, product }: any) {
  return (
    <>
      <Head>
        <title>Success purchase | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Success purchase!</h1>
        <ImageContainer>
          {product.map((item, idx) => {
            const imageUrl = item.price.product.images[0];
            return (
              <div key={idx}>
                <Image src={imageUrl} width={140} height={140} alt="" />
              </div>
            );
          })}
        </ImageContainer>
        <p>
          Nicee! <strong>{customerName}</strong>, your purchase of{" "}
          {product.length} it is on the way!
        </p>
        <Link href="/">Back to home</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data;

  return {
    props: {
      customerName,
      product,
    },
  };
};
