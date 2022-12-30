module.exports = {
    // 环境 浏览器，最新es语法，node环境
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    // 扩展的eslint规范语法，可以倍继承的规则；字符串数组：每个配置继承它前面的配置
    // 分别是eslint-plugin-vue提供的
    // eslint-config-airbnb-base提供提
    // eslint-config-prettier提供的
    // eslint-config-前缀可以简写
    extends: ['plugin:vue/vue3-strongly-recommended', 'airbnb-base', 'prettier'],
    // ESLint会对我们的代码进行校验，而parser的作用是将我们写的代码转换为ESTree（SAT），ESLint会对ESTree进行校验。
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 13, // ES版本号或者年份都可以
        parser: '@typescript-eslint/parser',
        // 源码类型模式是script，ES模块使用module
        sourceType: 'module',
        // 额外的语言类型
        ecmaFeatures: {
            tsx: true,
            jsx: true
        }
    },
    // 全局自定义的宏，这样在源文件中使用全局变量就不会报错或者警告
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    // 插件
    // 前缀eslint-plugin-可以省略
    // vue官方提供了一个ESLint插件eslint-plugin-vue，它提供了parser和rules。parser为vue-eslint-parser放在上面的parser字段里，rules放在extends字段里，选择合适的规则
    plugins: ["vue", "@typescript-eslint"],
    settings: {
        // 设置项目内的别名
        "import/resolver": {
            alias: {
                map: [
                    ["@", "./src"]
                ]
            }
        },
        "import/exrensions": [".js", ",jsx", ".ts", ".tsx", ".mjs"],
    },
    // 自定义规则，覆盖上面extends继承的第三方库的规则，根据组内成员灵活定义
    rules: {
        "import/no-extraneous-dependencies": 0,
        "no-param-reassign": 0,
        "vue/multi-word-component-names": 0,
        "vue/attribute-hyphenation": 0,
        "vue/v-on-event-hyphenation": 0,
    }
}