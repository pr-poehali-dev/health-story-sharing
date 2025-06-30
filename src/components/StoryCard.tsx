import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface StoryCardProps {
  title: string;
  condition: string;
  author: string;
  excerpt: string;
  timeAgo: string;
  category: string;
}

export default function StoryCard({
  title,
  condition,
  author,
  excerpt,
  timeAgo,
  category,
}: StoryCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-100">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge
            variant="secondary"
            className="bg-medical-green text-medical-blue border-0"
          >
            {category}
          </Badge>
          <Icon
            name="Heart"
            size={16}
            className="text-gray-400 hover:text-red-500 cursor-pointer"
          />
        </div>

        <h3 className="font-heading text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-medical-gray">
          <Icon name="Activity" size={14} />
          <span>{condition}</span>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-medical-lightblue text-medical-blue text-sm">
                {author.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">{author}</p>
              <p className="text-xs text-medical-gray">{timeAgo}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-medical-gray">
            <Icon name="Clock" size={12} />
            <span>3 мин чтения</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
