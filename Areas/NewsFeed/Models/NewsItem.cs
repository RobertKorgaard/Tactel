using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tactel.Areas.NewsFeed.Models
{
    public class NewsItem
    {
        public string Header { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public string SourceUrl { get; set; }
        public DateTime PublishDate { get; set; }
    }
}