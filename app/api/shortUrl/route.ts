import { NextResponse } from "next/server"

// export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {

    return NextResponse.json({Hello:'World'})

}
export async function POST(request: Request) {
    return NextResponse.json({Vivan:'Los hombre (Trueno)'})
}


// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function POST(req: NextApiRequest, res: NextApiResponse)  {
//   const {url} = req.body;

//   res.status(200).send('POST_MALONE')
//   return

// }
 
// export async function GET(request: Request) {
   
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { 'Campeon': `Hola` },
//   })
// }

