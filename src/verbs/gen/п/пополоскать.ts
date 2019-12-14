import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пополоскать: PerfectVerb = {
  name: Word('пополоскать', 8),
  singular1stPerson: Word('пополощу', 7),
  singular2ndPerson: Word('пополощешь', 5),
  singular3rdPerson: Word('пополощет', 5),
  plural1stPerson: Word('пополощем', 5),
  plural2ndPerson: Word('пополощете', 5),
  plural3rdPerson: Word('пополощут', 5),
  masculinePast: Word('пополоскал', 8),
  femininePast: Word('пополоскала', 8),
  neuterPast: Word('пополоскало', 8),
  pluralPast: Word('пополоскали', 8),
  imperativeInformal: Word('пополощи', 7),
  imperativeFormal: Word('пополощите', 7),
  imperfect: [],
};

perfectVerbs.set(пополоскать.name.text, пополоскать);

export { пополоскать };