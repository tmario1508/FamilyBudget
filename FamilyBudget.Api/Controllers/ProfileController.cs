using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FamilyBudget.Entities;
using FamilyBudget.Api.Services.Interfaces;

namespace FamilyBudget.Api.Controllers
{
    [ApiController]
    public class ProfileController : ControllerBase
    {

        int Deleted = 1;
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public async Task<ActionResult<IEnumerable<Profile>>> GetAll()
        {
            var profiles = await _profileService.GetAll();
            return Ok(profiles);  // Status code 200

        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public async Task<ActionResult<Profile>> GetById(int id)
        {
            var profile = await _profileService.GetById(id);
            return Ok(profile);
        }

        [HttpPost]
        [Route("api/[controller]")]
        public async Task<ActionResult<Profile>> Add([FromBody]Profile profile)
        {
            await _profileService.Add(profile);
            profile.Id = 100;
            return Created($"api/profile/{profile.Id}", profile);
        }

        [HttpPut]
        [Route("api/[controller]")]
        public async Task<ActionResult<Profile>> Update([FromBody]Profile profile)
        {
            await _profileService.Update(profile);
            return Created($"api/profile/{profile.Id}", profile);
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            var result = await _profileService.Delete(id);
            return true;
        }
        
    }
}