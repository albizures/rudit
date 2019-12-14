import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блажить: PerfectVerb = {
  name: Word('блажить', 4),
  singular1stPerson: Word('блажу', 4),
  singular2ndPerson: Word('блажишь', 4),
  singular3rdPerson: Word('блажит', 4),
  plural1stPerson: Word('блажим', 4),
  plural2ndPerson: Word('блажите', 4),
  plural3rdPerson: Word('блажат', 4),
  masculinePast: Word('блажил', 4),
  femininePast: Word('блажила', 4),
  neuterPast: Word('блажило', 4),
  pluralPast: Word('блажили', 4),
  imperativeInformal: Word('блажи', 4),
  imperativeFormal: Word('блажите', 4),
  imperfect: [],
};

perfectVerbs.set(блажить.name.text, блажить);

export { блажить };