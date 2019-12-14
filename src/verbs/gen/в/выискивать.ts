import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выискивать: PerfectVerb = {
  name: Word('выискивать', 2),
  singular1stPerson: Word('выискиваю', 2),
  singular2ndPerson: Word('выискиваешь', 2),
  singular3rdPerson: Word('выискивает', 2),
  plural1stPerson: Word('выискиваем', 2),
  plural2ndPerson: Word('выискиваете', 2),
  plural3rdPerson: Word('выискивают', 2),
  masculinePast: Word('выискивал', 2),
  femininePast: Word('выискивала', 2),
  neuterPast: Word('выискивало', 2),
  pluralPast: Word('выискивали', 2),
  imperativeInformal: Word('выискивай', 2),
  imperativeFormal: Word('выискивайте', 2),
  imperfect: [],
};

perfectVerbs.set(выискивать.name.text, выискивать);

export { выискивать };