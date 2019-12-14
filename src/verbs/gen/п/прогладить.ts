import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогладить: PerfectVerb = {
  name: Word('прогладить', 5),
  singular1stPerson: Word('проглажу', 5),
  singular2ndPerson: Word('прогладишь', 5),
  singular3rdPerson: Word('прогладит', 5),
  plural1stPerson: Word('прогладим', 5),
  plural2ndPerson: Word('прогладите', 5),
  plural3rdPerson: Word('прогладят', 5),
  masculinePast: Word('прогладил', 5),
  femininePast: Word('прогладила', 5),
  neuterPast: Word('прогладило', 5),
  pluralPast: Word('прогладили', 5),
  imperativeInformal: Word('прогладь', 5),
  imperativeFormal: Word('прогладьте', 5),
  imperfect: [],
};

perfectVerbs.set(прогладить.name.text, прогладить);

export { прогладить };