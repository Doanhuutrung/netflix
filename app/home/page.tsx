import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">New Movies </h1>
      <RecentlyAdded />
    </div>
  );
}

//@media (min-width: 1024px) is lg