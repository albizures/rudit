import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освятить: PerfectVerb = {
  name: Word('освятить', 5),
  singular1stPerson: Word('освящу', 5),
  singular2ndPerson: Word('освятишь', 5),
  singular3rdPerson: Word('освятит', 5),
  plural1stPerson: Word('освятим', 5),
  plural2ndPerson: Word('освятите', 5),
  plural3rdPerson: Word('освятят', 5),
  masculinePast: Word('освятил', 5),
  femininePast: Word('освятила', 5),
  neuterPast: Word('освятило', 5),
  pluralPast: Word('освятили', 5),
  imperativeInformal: Word('освяти', 5),
  imperativeFormal: Word('освятите', 5),
  imperfect: [],
};

perfectVerbs.set(освятить.name.text, освятить);

export { освятить };