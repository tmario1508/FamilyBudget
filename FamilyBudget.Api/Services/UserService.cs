using System.Collections.Generic;
using System.Threading.Tasks;
using FamilyBudget.Entities;

using FamilyBudget.Api.Services.Interfaces;
using FamilyBudget.Api.Repository.Interfaces;

namespace FamilyBudget.Api.Services
{
    public class UserService : IUserService
    {

        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            var users = await _userRepository.GetAll();
            // var user = new List<User>();
            return users;
        }

        public async Task<User> GetById(int id)
        {
            var user = await _userRepository.GetById(id);
            // var user = new User{ Id = id};
            return user;
        }
         
        public async Task<User> Add(User user)
        {
            await _userRepository.Add(user);
            // user.Id = 100;
            return user;
        }

        public async Task<User> Update(User user)
        {
            await _userRepository.Update(user);
            return user;
        }

        public async Task<bool> Delete(int id)
        {
            bool result = await _userRepository.Delete(id);
            return result;
        }
    }
}