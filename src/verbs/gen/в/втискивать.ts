import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втискивать: PerfectVerb = {
  name: Word('втискивать', 2),
  singular1stPerson: Word('втискиваю', 2),
  singular2ndPerson: Word('втискиваешь', 2),
  singular3rdPerson: Word('втискивает', 2),
  plural1stPerson: Word('втискиваем', 2),
  plural2ndPerson: Word('втискиваете', 2),
  plural3rdPerson: Word('втискивают', 2),
  masculinePast: Word('втискивал', 2),
  femininePast: Word('втискивала', 2),
  neuterPast: Word('втискивало', 2),
  pluralPast: Word('втискивали', 2),
  imperativeInformal: Word('втискивай', 2),
  imperativeFormal: Word('втискивайте', 2),
  imperfect: [],
};

perfectVerbs.set(втискивать.name.text, втискивать);

export { втискивать };