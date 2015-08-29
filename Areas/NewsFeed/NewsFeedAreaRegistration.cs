using System.Web.Mvc;

namespace Tactel.Areas.NewsFeed
{
    public class NewsFeedAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "NewsFeed";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "NewsFeed_default",
                "{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}