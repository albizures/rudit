import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попискивать: PerfectVerb = {
  name: Word('попискивать', 3),
  singular1stPerson: Word('попискиваю', 3),
  singular2ndPerson: Word('попискиваешь', 3),
  singular3rdPerson: Word('попискивает', 3),
  plural1stPerson: Word('попискиваем', 3),
  plural2ndPerson: Word('попискиваете', 3),
  plural3rdPerson: Word('попискивают', 3),
  masculinePast: Word('попискивал', 3),
  femininePast: Word('попискивала', 3),
  neuterPast: Word('попискивало', 3),
  pluralPast: Word('попискивали', 3),
  imperativeInformal: Word('попискивай', 3),
  imperativeFormal: Word('попискивайте', 3),
  imperfect: [],
};

perfectVerbs.set(попискивать.name.text, попискивать);

export { попискивать };