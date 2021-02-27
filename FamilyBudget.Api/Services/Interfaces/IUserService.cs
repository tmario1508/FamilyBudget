using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FamilyBudget.Entities;


namespace FamilyBudget.Api.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAll();

        Task<User> GetById(int id);
         
        Task<User> Add(User user);

        Task<User> Update(User user);

        Task<bool> Delete(int id);
    }
}