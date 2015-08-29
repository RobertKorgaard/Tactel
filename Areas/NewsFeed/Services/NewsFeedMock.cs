using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Tactel.Areas.NewsFeed.Models;

namespace Tactel.Services
{
    public class NewsFeedMock : INewsFeedService
    {
        public List<NewsItem> GetNewsItems()
        {
            throw new NotImplementedException();
        }
    }
}