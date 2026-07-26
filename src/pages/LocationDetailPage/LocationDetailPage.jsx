import { useParams } from "react-router-dom"
import { Location } from "../../component/Location/LocationId/LocationId"


export default function LocationDetailPage() {
    const {locationId} = useParams()

  return (
    <main>
        <Location locationId={locationId} />
    </main>
  )
}


