import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumsListItem ({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  }

  const header = (
    <>
      <Button loading={results.isLoading} className="mr-2" onClick={() => handleRemoveAlbum(album)}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  )

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album}/>
    </ExpandablePanel>
  );
}

export default AlbumsListItem;

