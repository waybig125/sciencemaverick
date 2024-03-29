import helpers from "../helpers";

export default function AuthorAttribution({ post }) {
  return (
    <div className="flex space-x-1">
      <span>by</span>
      <span className="font-medium text-green-600 dark:text-green-200">
        Science Maverick
      </span>
      <span>
        on {helpers.stringToFriendlyDate(post.metadata.published_date)}
      </span>
    </div>
  );
}
