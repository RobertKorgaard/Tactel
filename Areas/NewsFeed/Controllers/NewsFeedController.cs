using System.Web.Mvc;
using Tactel.Services;

namespace Tactel.Areas.NewsFeed.Controllers
{
    public class NewsFeedController : Controller

    {

        private INewsFeedService newsFeedService;

        public NewsFeedController()
        {
            newsFeedService = new NewsFeedService();
        }
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetNewsFeed()
        {
            return Json(newsFeedService.GetNewsItems(), JsonRequestBehavior.AllowGet);
        }
    }
}