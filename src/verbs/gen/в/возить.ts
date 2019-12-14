import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возить: PerfectVerb = {
  name: Word('возить', 3),
  singular1stPerson: Word('вожу', 3),
  singular2ndPerson: Word('возишь', 1),
  singular3rdPerson: Word('возит', 1),
  plural1stPerson: Word('возим', 1),
  plural2ndPerson: Word('возите', 1),
  plural3rdPerson: Word('возят', 1),
  masculinePast: Word('возил', 3),
  femininePast: Word('возила', 3),
  neuterPast: Word('возило', 3),
  pluralPast: Word('возили', 3),
  imperativeInformal: Word('вози', 3),
  imperativeFormal: Word('возите', 3),
  imperfect: [],
};

perfectVerbs.set(возить.name.text, возить);

export { возить };