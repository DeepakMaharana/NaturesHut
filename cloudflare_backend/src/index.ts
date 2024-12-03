import { Hono } from 'hono'
import { PrismaClient} from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()

// Middelware

app.use("/api/v1/blog/*", async (c,next)=>{
  const header = c.req.header('Authorization') || "";
  const token = header.split(" ");
  const response = await verify(token[1], c.env.JWT_SECRET);
  if (!response) {
    c.status(403);
    return c.json({error:"Unauthorized user login"});
  }
  next();
}) 

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.post('/api/v1/signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try{
    const user =   await prisma.user.create({
      data:{
        email:body.email,
        password:body.password
      }
    });

    const jwt = await sign({id:user.id}, c.env.JWT_SECRET);
    return c.json({token:jwt});
  }
  catch(e)
  {
    c.status(403);
    return c.json({error:"Error while sign up", error_detail:e.message});
  }


  return c.text('Hello Hono!')
})

app.post('/api/v1/signin', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = prisma.user.findUnique({where:{email:body.email}});

  if(!user || user.password != body.password)
  {
    c.status(403);
    return c.json({error:"Invalid email /password"});
  } 

  const jwt = await sign({id:user.id}, c.env.JWT_SECRET);
  return c.json({token:jwt});
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog:blogid', (c) => {
  return c.text('Hello Hono!')
})
export default app
