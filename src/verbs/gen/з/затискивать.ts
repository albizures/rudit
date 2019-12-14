import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затискивать: PerfectVerb = {
  name: Word('затискивать', 3),
  singular1stPerson: Word('затискиваю', 3),
  singular2ndPerson: Word('затискиваешь', 3),
  singular3rdPerson: Word('затискивает', 3),
  plural1stPerson: Word('затискиваем', 3),
  plural2ndPerson: Word('затискиваете', 3),
  plural3rdPerson: Word('затискивают', 3),
  masculinePast: Word('затискивал', 3),
  femininePast: Word('затискивала', 3),
  neuterPast: Word('затискивало', 3),
  pluralPast: Word('затискивали', 3),
  imperativeInformal: Word('затискивай', 3),
  imperativeFormal: Word('затискивайте', 3),
  imperfect: [],
};

perfectVerbs.set(затискивать.name.text, затискивать);

export { затискивать };