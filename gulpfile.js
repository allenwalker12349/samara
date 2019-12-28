//Подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');

/*
//Порядок подключения css файлов
const cssFiles = [
   './src/css/main.css',
   './src/css/media.css'
]
*/
const cssFiles = [
   './src/css/main.less',
   './src/css/mixins.less',
   './src/css/top-contact.less',
   './src/css/main-nav.less',
   './src/css/slider.less',
   './src/css/latest-news.less',
   './src/css/imortant-information.less',
   './src/css/navigation.less',
   './src/css/information.less',
   './src/css/social-programms.less',
   './src/css/links.less',
   './src/css/page-footer.less',
   './src/css/bread-crumbs.less',
   './src/css/search-result.less',
   './src/css/about.less',
   './src/css/structure.less',
   './src/css/open-structure.less',
   './src/css/news.less',
   './src/css/serch.less',
   './src/css/open-news.less',
   './src/css/gallery.less',
   './src/css/reception.less',
   './src/css/npa.less',
   './src/css/contacts.less',
   './src/css/login.less',
   './src/css/account.less',
   './src/css/settings.less',
   './src/css/404.less',
   './src/css/map.less',
   './src/css/page.less',
   './src/css/reception-open.less',
   './src/css/gallery-inner.less',
   './src/css/appountment.less',
   './src/css/announce.less',
   './src/css/apply.less'
   
]
//Порядок подключения js файлов
const jsFiles = [
   './src/js/lib.js',
   './src/js/main.js'
]

//Таск на стили CSS
function styles() {
   //Шаблон для поиска файлов CSS
   //Всей файлы по шаблону './src/css/**/*.css'
   return gulp.src(cssFiles)
   .pipe(sourcemaps.init())
   .pipe(less())
   //Объединение файлов в один
   .pipe(concat('style.css'))
   //Добавить префиксы
   .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
   }))
   //Минификация CSS
   .pipe(cleanCSS({
      level: 2
   }))
   .pipe(sourcemaps.write('./'))
   //Выходная папка для стилей
   .pipe(gulp.dest('./build/css'))
   .pipe(browserSync.stream());
}

//Таск на скрипты JS
function scripts() {
   //Шаблон для поиска файлов JS
   //Всей файлы по шаблону './src/js/**/*.js'
   return gulp.src(jsFiles)
   //Объединение файлов в один
   .pipe(concat('script.js'))
   //Минификация JS
   .pipe(uglify({
      toplevel: true
   }))
   //Выходная папка для скриптов
   .pipe(gulp.dest('./build/js'))
   .pipe(browserSync.stream());
}

//Удалить всё в указанной папке
function clean() {
   return del(['build/*'])
}

//Просматривать файлы
function watch() {
   browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  //Следить за CSS файлами
  gulp.watch('./src/css/**/*.less', styles)
  //Следить за JS файлами
  gulp.watch('./src/js/**/*.js', scripts)
  //При изменении HTML запустить синхронизацию
  gulp.watch("./*.html").on('change', browserSync.reload);
}

//Таск вызывающий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//Таск для очистки папки build
gulp.task('del', clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)));
//Таск запускает таск build и watch последовательно
gulp.task('dev', gulp.series('build','watch'));