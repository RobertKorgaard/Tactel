using System.Collections.Generic;
using System.Web.Mvc;
using Tactel.Areas.NewsFeed.Models;

namespace Tactel.Services
{
    public interface INewsFeedService
    {
        List<NewsItem> GetNewsItems();
    }
}