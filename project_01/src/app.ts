import express, { NextFunction, Request, Response } from 'express'
const app = express();
const port = 3000;

//parsers
app.use(express.json())

const userRouter = express.Router();
const userCourse = express.Router()

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", userCourse);


userRouter.post("/create-usaer", (req: Request, res: Response) =>{
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user
  })
})

userCourse.post("/create-course", (req: Request, res: Response) =>{
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "User is created successfully",
    data: course
  })
})

// Middleware
const logger = (req: Request, res: Response, next: NextFunction)=>{
  console.log(req.url, req.method, req.hostname);
  next()
}

app.get('/', logger, (req: Request, res: Response) => {
  console.log(req.query.email)
  console.log(req.query.name)
  res.send('Hello Devs!')
})
app.post('/', (req : Request, res : Response) => {
  console.log('jihihhkiukgiuuiiuo')
  res.send('Hello Devs!')
})


export default app