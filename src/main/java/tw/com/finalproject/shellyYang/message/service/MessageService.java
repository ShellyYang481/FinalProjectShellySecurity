package tw.com.finalproject.shellyYang.message.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import tw.com.finalproject.shellyYang.message.dao.MessageDao;
import tw.com.finalproject.shellyYang.message.dto.MessageInputData;
import tw.com.finalproject.shellyYang.message.dto.MessageOutputData;

@Service
public class MessageService {
	
	@Autowired
	MessageDao messageDao;
	Logger log = LogManager.getFormatterLogger();
	/**
	 * 新增留言
	 * @param input
	 * @return
	 */
	public MessageOutputData addMessage(String msg) {
		SecurityContextHolder.getContext().getAuthentication().getAuthorities();
		SecurityContextHolder.getContext().getAuthentication().getName();
		//判斷該用戶的身分
		
		//依照該用戶身分呼叫對應DB去確認是否存在
		
		//將DTO轉成Entity
		
		//儲存進資料庫
		
		//轉成DTO送出
		MessageOutputData messageOutputData = new MessageOutputData();

		return messageOutputData;
		 
	}
		
		//新增回覆留言
		
		//看到所有留言
		
		//刪除留言
	
	public String getUserRole() {
		
		  System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
		return SecurityContextHolder.getContext().getAuthentication().getName();
	}
	
	//<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

}
