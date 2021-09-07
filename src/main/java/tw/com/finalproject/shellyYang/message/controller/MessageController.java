package tw.com.finalproject.shellyYang.message.controller;

import java.security.Principal;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import tw.com.finalproject.shellyYang.message.dto.MessageInputData;
import tw.com.finalproject.shellyYang.message.dto.MessageOutputData;
import tw.com.finalproject.shellyYang.message.service.MessageService;


@RestController
public class MessageController {
	Logger log = LogManager.getFormatterLogger();
	@Autowired
	MessageService messageService;
	
	/**
	 * 檢視留言
	 * @param input
	 * @return
	 */
//	@GetMapping("/message")
//	public MessageOutputData selectMessage() {
//		
//		return messageService.addMessage();
//			
//	}
	
	
	
	/**
	 * 新增留言
	 * @param input
	 * @return
	 */
	@PostMapping("/message")
	public MessageOutputData addMessage(String input) {
		
		
		
		
		return messageService.addMessage(input);
			
	}
	
	

}
