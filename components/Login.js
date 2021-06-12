import Image from 'next/image';
import Head from 'next/head'
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className='grid place-items-center bg-white-300'>
            <div className='my-20 mx-20 p-10 text-center bg-white rounded-md transition duration-150 transform hover:scale-105 hover:shadow-2xl'>
                <Head>
                    <title>Facebook-2.0</title>
                    <link rel="icon" className="h-10 w-10" href="/facebook_logos.png" />
                </Head>
                <Image
                    src="https://links.papareact.com/t4i"
                    height={300}
                    width={300}
                    objectFit="contain"
                    className="m-40"
                />
                <h1 onClick={signIn} className='m-10 p-5 bg-blue-500 rounded-full text-center text-white cursor-pointer'>Login with Facebook</h1>
            </div>
           
        </div>
    )
}

export default Login