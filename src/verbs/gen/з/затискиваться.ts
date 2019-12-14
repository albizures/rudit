import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затискиваться: PerfectVerb = {
  name: Word('затискиваться', 3),
  singular1stPerson: Word('затискиваюсь', 3),
  singular2ndPerson: Word('затискиваешься', 3),
  singular3rdPerson: Word('затискивается', 3),
  plural1stPerson: Word('затискиваемся', 3),
  plural2ndPerson: Word('затискиваетесь', 3),
  plural3rdPerson: Word('затискиваются', 3),
  masculinePast: Word('затискивался', 3),
  femininePast: Word('затискивалась', 3),
  neuterPast: Word('затискивалось', 3),
  pluralPast: Word('затискивались', 3),
  imperativeInformal: Word('затискивайся', 3),
  imperativeFormal: Word('затискивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(затискиваться.name.text, затискиваться);

export { затискиваться };