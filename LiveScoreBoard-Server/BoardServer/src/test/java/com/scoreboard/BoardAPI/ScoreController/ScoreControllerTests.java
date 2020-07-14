package com.scoreboard.BoardAPI.ScoreController;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.scoreboard.BoardAPI.Controller.ScoreController;
import com.scoreboard.BoardAPI.DAO.ScoreRepository;
import com.scoreboard.BoardAPI.Service.ScoreService;



@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = ScoreController.class)
class ScoreControllerTests {

	
	private List<String> allnames = new ArrayList();
	
	
	@MockBean
	private ScoreService scoreservice;
	
    @MockBean
	private ScoreRepository scorerepository;
	
	
	@Autowired
	private MockMvc mockmvc;
	
	
	
	@Test
	void getleftplayerswithsomeplayers() throws Exception {
		
		allnames.add("virat");
		allnames.add("HardikPandya");
		allnames.add("rahul");
		allnames.add("ShekarDhawan");
		
		ResponseEntity getleftplayers = new ResponseEntity(allnames,HttpStatus.OK);
		
		
		Mockito.when(scoreservice.getleftplayers()).thenReturn(getleftplayers);
		
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/user/leftplayers").contentType("application/json");
				
        MvcResult result = mockmvc.perform(requestBuilder).andExpect(status().isOk()).andReturn();
		
		
//		this.mockmvc.perform(get("/api/warehouses?filterType=0&ids=1")
//                .header("Accept-Language", "en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4"))
//                .andExpect(status().isOk());
               
        String expected = "[\"virat\",\"rahul\",\"HardikPandya\",\"ShekarDhawan\"]";

        
       

        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(),false);
        
	}

}