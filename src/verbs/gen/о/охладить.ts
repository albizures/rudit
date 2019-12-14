import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охладить: PerfectVerb = {
  name: Word('охладить', 5),
  singular1stPerson: Word('охлажу', 5),
  singular2ndPerson: Word('охладишь', 5),
  singular3rdPerson: Word('охладит', 5),
  plural1stPerson: Word('охладим', 5),
  plural2ndPerson: Word('охладите', 5),
  plural3rdPerson: Word('охладят', 5),
  masculinePast: Word('охладил', 5),
  femininePast: Word('охладила', 5),
  neuterPast: Word('охладило', 5),
  pluralPast: Word('охладили', 5),
  imperativeInformal: Word('охлади', 5),
  imperativeFormal: Word('охладите', 5),
  imperfect: [],
};

perfectVerbs.set(охладить.name.text, охладить);

export { охладить };