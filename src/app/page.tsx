import BreadCrumb from "@/components/BreadCrumb"
import { HOME_PATH } from "@/constants/menu"

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
]

const Home = () => {

  return (
    <main className="p-4">
      <BreadCrumb items={breadcrumbItems} />

      <div className='mt-4'>
        Welcome
      </div>
    </main>
  )
}

export default Home