import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкипятить: PerfectVerb = {
  name: Word('выкипятить', 1),
  singular1stPerson: Word('выкипячу', 1),
  singular2ndPerson: Word('выкипятишь', 1),
  singular3rdPerson: Word('выкипятит', 1),
  plural1stPerson: Word('выкипятим', 1),
  plural2ndPerson: Word('выкипятите', 1),
  plural3rdPerson: Word('выкипятят', 1),
  masculinePast: Word('выкипятил', 1),
  femininePast: Word('выкипятила', 1),
  neuterPast: Word('выкипятило', 1),
  pluralPast: Word('выкипятили', 1),
  imperativeInformal: Word('выкипяти', 1),
  imperativeFormal: Word('выкипятите', 1),
  imperfect: [],
};

perfectVerbs.set(выкипятить.name.text, выкипятить);

export { выкипятить };