import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прополоскать: PerfectVerb = {
  name: Word('прополоскать', 9),
  singular1stPerson: Word('прополощу', 8),
  singular2ndPerson: Word('прополощешь', 6),
  singular3rdPerson: Word('прополощет', 6),
  plural1stPerson: Word('прополощем', 6),
  plural2ndPerson: Word('прополощете', 6),
  plural3rdPerson: Word('прополощут', 6),
  masculinePast: Word('прополоскал', 9),
  femininePast: Word('прополоскала', 9),
  neuterPast: Word('прополоскало', 9),
  pluralPast: Word('прополоскали', 9),
  imperativeInformal: Word('прополощи', 8),
  imperativeFormal: Word('прополощите', 8),
  imperfect: [],
};

perfectVerbs.set(прополоскать.name.text, прополоскать);

export { прополоскать };