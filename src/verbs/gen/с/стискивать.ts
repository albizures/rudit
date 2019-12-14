import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стискивать: PerfectVerb = {
  name: Word('стискивать', 2),
  singular1stPerson: Word('стискиваю', 2),
  singular2ndPerson: Word('стискиваешь', 2),
  singular3rdPerson: Word('стискивает', 2),
  plural1stPerson: Word('стискиваем', 2),
  plural2ndPerson: Word('стискиваете', 2),
  plural3rdPerson: Word('стискивают', 2),
  masculinePast: Word('стискивал', 2),
  femininePast: Word('стискивала', 2),
  neuterPast: Word('стискивало', 2),
  pluralPast: Word('стискивали', 2),
  imperativeInformal: Word('стискивай', 2),
  imperativeFormal: Word('стискивайте', 2),
  imperfect: [],
};

perfectVerbs.set(стискивать.name.text, стискивать);

export { стискивать };