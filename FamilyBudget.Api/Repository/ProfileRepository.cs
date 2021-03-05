using System.Threading.Tasks;
using System.Collections.Generic;
using FamilyBudget.Entities;
using FamilyBudget.Api.Repository.Interfaces;
using MySqlConnector;
using Dapper;
using Dapper.Contrib.Extensions;


namespace FamilyBudget.Api.Repository
{
    public class ProfileRepository : IProfileRepository
    {
        private const string _conStr =
            "server=localhost;user=root;pwd=Salitre13*;database=familybudget;port=3306;";

        private MySqlConnection _conn;

        public async Task<Profile> Add(Profile profile)
        {
            _conn = new MySqlConnection(_conStr);
            _conn.Open();
            await _conn.InsertAsync<Profile>(profile);
            _conn.Close();

            return profile;
        }

        public async Task<bool> Delete(int id)
        {
            _conn = new MySqlConnection(_conStr);
            _conn.Open();

            var result = await _conn.DeleteAsync<Profile>( new Profile{ Id = id});

            _conn.Close();

            return result;
        }

        public async Task<IEnumerable<Profile>> GetAll()
        {
            _conn = new MySqlConnection(_conStr);
            _conn.Open();

            var profiles = await _conn.GetAllAsync<Profile>();

            _conn.Close();

            return profiles;
        } 

        public async Task<Profile> GetById(int id)
        {
            _conn = new MySqlConnection(_conStr);
            _conn.Open();

            var profile = await _conn.GetAsync<Profile>(id);
            _conn.Close();

            return profile;
        }

        public async Task<Profile> Update(Profile profile)
        {
            _conn = new MySqlConnection(_conStr);
            _conn.Open();

            await _conn.UpdateAsync<Profile>(profile);

            _conn.Close();

            return profile;
        }
    }
}