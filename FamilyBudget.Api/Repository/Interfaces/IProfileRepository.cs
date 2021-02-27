using System.Threading.Tasks;
using System.Collections.Generic;
using FamilyBudget.Entities;

namespace FamilyBudget.Api.Repository.Interfaces
{
    public interface IProfileRepository
    {
        Task<IEnumerable<Profile>> GetAll();

        Task<Profile> GetById(int id);
         
        Task<Profile> Add(Profile profile);

        Task<Profile> Update(Profile profile);

        Task<bool> Delete(int id);
    }
}