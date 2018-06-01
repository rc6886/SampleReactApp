using MediatR;
using Microsoft.AspNetCore.Mvc;
using SampleReactApp.Core.Features.Ohm;
using System.Collections.Generic;

namespace SampleReactApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly IMediator _mediator;

        public ValuesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var response = _mediator.Send(new CalculateOhmValueRequest());

            return new string[] { "value1", "value2" };
        }
    }
}
