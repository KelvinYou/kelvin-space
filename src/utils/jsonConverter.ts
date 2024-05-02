// 对 eval 的内容进行安全性校验
const validateEvalContent = (str:string)=> {
  // 在这里进行安全性校验，例如检查是否包含敏感操作或恶意代码
  // 可以使用正则表达式或其他方法来检查代码的安全性
  const isSafe = !/(delete|eval|Function|new\s+Function|window|document|this|alert|setInterval|setTimeout|XMLHttpRequest|fetch|open|close|onreadystatechange)\s*\(/.test(str);
  return isSafe;
}

// 限制执行范围的 eval 函数
function restrictedEval(str:string) {
  if (validateEvalContent(str)) {
    return eval(str);
  } else {
    console.log('err','页面信息配置不安全，有安全风险，Unsafe code detected')
    throw new Error('Unsafe code detected');
  }
}

// 将json对象转换为string,用于给后端提供页面配置字符串
export const jsonToString = (jsonObj: any): string => {
  try {
    return JSON.stringify(jsonObj, (key, value) => {
      if (typeof value === 'function') {
        return value?.toString();
      }
      return value;
    });
  } catch (error) {
    console.error('Error converting JSON to string:', error);
    return '';
  }
}

// 将string转换为json对象，用于解析后端返回的字符串，同时解析字符串中的方法
export const stringToJson = (jsonStr: string): any => {
  try {
    return JSON.parse(jsonStr, (key, value) => {
      // value 去空格后去匹配()=>{,replace不会改变原数据
      const trimmedValue = typeof value === 'string' ? value?.replace(/\s/g, '') : '';
   
      if (typeof value === 'string' && (trimmedValue?.includes('()=>{') || value?.includes('function'))) {
        // eval(`(${value})`); 
        return restrictedEval(`(${value})`)
      }
      return value;
    });
  } catch (error) {
    console.error('Error converting string to JSON:', error);
    return null;
  }
}
