import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приискивать: PerfectVerb = {
  name: Word('приискивать', 3),
  singular1stPerson: Word('приискиваю', 3),
  singular2ndPerson: Word('приискиваешь', 3),
  singular3rdPerson: Word('приискивает', 3),
  plural1stPerson: Word('приискиваем', 3),
  plural2ndPerson: Word('приискиваете', 3),
  plural3rdPerson: Word('приискивают', 3),
  masculinePast: Word('приискивал', 3),
  femininePast: Word('приискивала', 3),
  neuterPast: Word('приискивало', 3),
  pluralPast: Word('приискивали', 3),
  imperativeInformal: Word('приискивай', 3),
  imperativeFormal: Word('приискивайте', 3),
  imperfect: [],
};

perfectVerbs.set(приискивать.name.text, приискивать);

export { приискивать };