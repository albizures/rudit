import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттискивать: PerfectVerb = {
  name: Word('оттискивать', 3),
  singular1stPerson: Word('оттискиваю', 3),
  singular2ndPerson: Word('оттискиваешь', 3),
  singular3rdPerson: Word('оттискивает', 3),
  plural1stPerson: Word('оттискиваем', 3),
  plural2ndPerson: Word('оттискиваете', 3),
  plural3rdPerson: Word('оттискивают', 3),
  masculinePast: Word('оттискивал', 3),
  femininePast: Word('оттискивала', 3),
  neuterPast: Word('оттискивало', 3),
  pluralPast: Word('оттискивали', 3),
  imperativeInformal: Word('оттискивай', 3),
  imperativeFormal: Word('оттискивайте', 3),
  imperfect: [],
};

perfectVerbs.set(оттискивать.name.text, оттискивать);

export { оттискивать };