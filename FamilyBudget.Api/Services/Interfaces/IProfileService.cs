using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FamilyBudget.Entities;


namespace FamilyBudget.Api.Services.Interfaces
{
    public interface IProfileService
    {
        Task<IEnumerable<Profile>> GetAll();

        Task<Profile> GetById(int id);
         
        Task<Profile> Add(Profile user);

        Task<Profile> Update(Profile user);

        Task<bool> Delete(int id);
    }
}