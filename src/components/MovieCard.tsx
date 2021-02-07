import { FC } from "react";
import { paths } from "src/constants/paths";
import Link from "next/link";

type Props = {
  title: string;
  imagePath: string;
  overview: string;
};

export const MovieCard: FC<Props> = ({ ...props }) => {
  const { title, imagePath, overview } = props;

  return (
    <Link
      href={{ pathname: paths.detail, query: { title, imagePath, overview } }}
    >
      <div>
        <p>{title}</p>
        <img
          src={`https://image.tmdb.org/t/p/w185/${imagePath}`}
          alt="poster"
        />
      </div>
    </Link>
  );
};
