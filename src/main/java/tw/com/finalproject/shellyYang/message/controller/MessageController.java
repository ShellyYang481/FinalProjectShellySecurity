package tw.com.finalproject.shellyYang.message.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import tw.com.finalproject.shellyYang.message.dto.MessageInputData;
import tw.com.finalproject.shellyYang.message.dto.MessageOutputData;
import tw.com.finalproject.shellyYang.message.service.MessageService;


@RestController
public class MessageController {
	
	@Autowired
	MessageService messageService;
	
	/**
	 * 新增留言
	 * @param input
	 * @return
	 */
	@GetMapping("/message")
	public MessageOutputData addMessage(MessageInputData input) {
		
		return messageService.addMessage(input);
			
	}
	
	

}
