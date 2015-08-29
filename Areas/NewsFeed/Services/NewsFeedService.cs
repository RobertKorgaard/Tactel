using System;
using System.Collections.Generic;
using System.Net;
using System.Text.RegularExpressions;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Xml.Linq;
using Tactel.Areas.NewsFeed.Models;

namespace Tactel.Services
{
    public class NewsFeedService : INewsFeedService
    {
        private const string UrlRegex = @"(http|ftp|https)://([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?";
        private const string HtmlTagRegex = "<.*?>";
        private string newsFeedUrl = "http://www.dn.se/nyheter/m/rss/";
        public List<NewsItem> GetNewsItems()
        {
            WebClient wc = new WebClient();
            string newsFeedRaw = wc.DownloadString(newsFeedUrl);
            return ParseNewsItems(newsFeedRaw);
        }

        private List<NewsItem> ParseNewsItems(string xmlRaw)
        {
            List<NewsItem> items = new List<NewsItem>();
            XDocument xdoc = XDocument.Parse(xmlRaw);
            IEnumerable<XElement> rawItems = xdoc.Descendants("channel").Descendants("item");

            int id = 0;
            foreach (XElement item in rawItems)
            {
                var imageUrl = Regex.Match(item.Element("description").Value, UrlRegex);

                items.Add(new NewsItem()
                {
                    Id =id,
                    Description = Regex.Replace(item.Element("description").Value, HtmlTagRegex, string.Empty),
                    Header = item.Element("title").Value,
                    SourceUrl = item.Element("guid").Value,
                    PublishDate = DateTime.Parse(item.Element("pubDate").Value),
                    ImageUrl = imageUrl.Value
                });
                id++;
            }
            return items;
        }
    }
}