import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошуршать: PerfectVerb = {
  name: Word('прошуршать', 7),
  singular1stPerson: Word('прошуршу', 7),
  singular2ndPerson: Word('прошуршишь', 7),
  singular3rdPerson: Word('прошуршит', 7),
  plural1stPerson: Word('прошуршим', 7),
  plural2ndPerson: Word('прошуршите', 7),
  plural3rdPerson: Word('прошуршат', 7),
  masculinePast: Word('прошуршал', 7),
  femininePast: Word('прошуршала', 7),
  neuterPast: Word('прошуршало', 7),
  pluralPast: Word('прошуршали', 7),
  imperativeInformal: Word('прошурши', 7),
  imperativeFormal: Word('прошуршите', 7),
  imperfect: [],
};

perfectVerbs.set(прошуршать.name.text, прошуршать);

export { прошуршать };