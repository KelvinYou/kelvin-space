import BreadCrumb from "@/components/BreadCrumb"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { HOME_PATH } from "@/constants/menu"

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
]

const Home = () => {

  return (
    <main className="p-4">
      <BreadCrumb items={breadcrumbItems} />

      <section className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle> Welcome to My Space! </CardTitle>
            <CardDescription> Explore a collection of React components, tools, and more. </CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>

      <section className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle> Key Features </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            nothing yet
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>
      <section className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle> Getting Started </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            nothing yet
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>
      
      <section className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle> Recent Additions </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            nothing yet
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>

      <section className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle> Categories </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            nothing yet
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>

    </main>
  )
}

export default Home