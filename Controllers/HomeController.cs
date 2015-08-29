using System.Web.Mvc;
using Antlr.Runtime.Misc;

namespace Tactel.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return RedirectToAction("Index", "NewsFeed");
        }
    }
}