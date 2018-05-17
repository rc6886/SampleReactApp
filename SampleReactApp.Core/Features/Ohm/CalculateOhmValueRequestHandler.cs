using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace SampleReactApp.Core.Features.Ohm
{
    public class CalculateOhmValueRequestHandler : IRequestHandler<CalculateOhmValueRequest, CalculateOhmValueResponse>
    {
        public CalculateOhmValueRequestHandler()
        {

        }

        public Task<CalculateOhmValueResponse> Handle(CalculateOhmValueRequest request, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}
