import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прославить: PerfectVerb = {
  name: Word('прославить', 5),
  singular1stPerson: Word('прославлю', 5),
  singular2ndPerson: Word('прославишь', 5),
  singular3rdPerson: Word('прославит', 5),
  plural1stPerson: Word('прославим', 5),
  plural2ndPerson: Word('прославите', 5),
  plural3rdPerson: Word('прославят', 5),
  masculinePast: Word('прославил', 5),
  femininePast: Word('прославила', 5),
  neuterPast: Word('прославило', 5),
  pluralPast: Word('прославили', 5),
  imperativeInformal: Word('прославь', 5),
  imperativeFormal: Word('прославьте', 5),
  imperfect: [],
};

perfectVerbs.set(прославить.name.text, прославить);

export { прославить };