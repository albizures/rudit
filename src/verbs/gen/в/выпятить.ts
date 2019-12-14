import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпятить: PerfectVerb = {
  name: Word('выпятить', 1),
  singular1stPerson: Word('выпячу', 1),
  singular2ndPerson: Word('выпятишь', 1),
  singular3rdPerson: Word('выпятит', 1),
  plural1stPerson: Word('выпятим', 1),
  plural2ndPerson: Word('выпятите', 1),
  plural3rdPerson: Word('выпятят', 1),
  masculinePast: Word('выпятил', 1),
  femininePast: Word('выпятила', 1),
  neuterPast: Word('выпятило', 1),
  pluralPast: Word('выпятили', 1),
  imperativeInformal: Word('выпяти', 1),
  imperativeFormal: Word('выпятите', 1),
  imperfect: [],
};

perfectVerbs.set(выпятить.name.text, выпятить);

export { выпятить };