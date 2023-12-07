import { Image } from "@nextui-org/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenereList = () => {
  const { genres } = useGenres();

  return (
    <ul className="list-none flex flex-col gap-2">
      {genres.map((genre) => (
        <li key={genre.id}>
          <div className="flex flex-row gap-1">
            <div className="box-content w-8 h-8 flex items-center">
              <Image
                radius="sm"
                src={getCroppedImageUrl(genre.image_background)}
              />
            </div>
            <p className="text-lg">{genre.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenereList;
