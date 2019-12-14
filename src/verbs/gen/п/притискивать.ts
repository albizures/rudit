import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притискивать: PerfectVerb = {
  name: Word('притискивать', 4),
  singular1stPerson: Word('притискиваю', 4),
  singular2ndPerson: Word('притискиваешь', 4),
  singular3rdPerson: Word('притискивает', 4),
  plural1stPerson: Word('притискиваем', 4),
  plural2ndPerson: Word('притискиваете', 4),
  plural3rdPerson: Word('притискивают', 4),
  masculinePast: Word('притискивал', 4),
  femininePast: Word('притискивала', 4),
  neuterPast: Word('притискивало', 4),
  pluralPast: Word('притискивали', 4),
  imperativeInformal: Word('притискивай', 4),
  imperativeFormal: Word('притискивайте', 4),
  imperfect: [],
};

perfectVerbs.set(притискивать.name.text, притискивать);

export { притискивать };