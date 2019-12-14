import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заискивать: PerfectVerb = {
  name: Word('заискивать', 2),
  singular1stPerson: Word('заискиваю', 2),
  singular2ndPerson: Word('заискиваешь', 2),
  singular3rdPerson: Word('заискивает', 2),
  plural1stPerson: Word('заискиваем', 2),
  plural2ndPerson: Word('заискиваете', 2),
  plural3rdPerson: Word('заискивают', 2),
  masculinePast: Word('заискивал', 2),
  femininePast: Word('заискивала', 2),
  neuterPast: Word('заискивало', 2),
  pluralPast: Word('заискивали', 2),
  imperativeInformal: Word('заискивай', 2),
  imperativeFormal: Word('заискивайте', 2),
  imperfect: [],
};

perfectVerbs.set(заискивать.name.text, заискивать);

export { заискивать };