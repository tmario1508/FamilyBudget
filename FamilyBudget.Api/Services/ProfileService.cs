using System.Collections.Generic;
using System.Threading.Tasks;
using FamilyBudget.Entities;

using FamilyBudget.Api.Services.Interfaces;
using FamilyBudget.Api.Repository.Interfaces;

namespace FamilyBudget.Api.Services
{
    public class ProfileService : IProfileService
    {

        private readonly IProfileRepository _profileRepository;

        public ProfileService(IProfileRepository profileRepository)
        {
            _profileRepository = profileRepository;
        }

        public async Task<IEnumerable<Profile>> GetAll()
        {
            var profiles = await _profileRepository.GetAll();
            // var user = new List<User>();
            return profiles;
        }

        public async Task<Profile> GetById(int id)
        {
            var profile = await _profileRepository.GetById(id);
            // var user = new User{ Id = id};
            return profile;
        }
         
        public async Task<Profile> Add(Profile profile)
        {
            await _profileRepository.Add(profile);
            // user.Id = 100;
            return profile;
        }

        public async Task<Profile> Update(Profile profile)
        {
            await _profileRepository.Update(profile);
            return profile;
        }

        public async Task<bool> Delete(int id)
        {
            bool result = await _profileRepository.Delete(id);
            return result;
        }
    }
}