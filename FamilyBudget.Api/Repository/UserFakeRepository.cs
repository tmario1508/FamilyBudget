using System.Threading.Tasks;
using FamilyBudget.Api.Repository.Interfaces;
using System.Collections.Generic;
using FamilyBudget.Entities;
using System.Linq;


namespace FamilyBudget.Api.Repository
{
    public class UserFakeRepository : IUserRepository
    {

        private readonly List<User> _users;

        public UserFakeRepository()
        {
            _users = new List<User>();
        }

        public async Task<IEnumerable<User>> GetAll(){
            var user = new List<User>();
            return user;
        }

        public async Task<User> GetById(int id){
            var user = _users.FirstOrDefault<User>( u => u.Id == id);
            return user;
        }
         
        public async Task<User> Add(User user){
            var id = _users.Count() + 1;
            user.Id = id;
            _users.Add(user);

            return user;
        }

        public async Task<User> Update(User user){
            throw new System.NotImplementedException();
        }

        public async Task<bool> Delete(int id){
            throw new System.NotImplementedException();
        }
    }
}