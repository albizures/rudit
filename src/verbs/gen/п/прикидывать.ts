import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикидывать: PerfectVerb = {
  name: Word('прикидывать', 4),
  singular1stPerson: Word('прикидываю', 4),
  singular2ndPerson: Word('прикидываешь', 4),
  singular3rdPerson: Word('прикидывает', 4),
  plural1stPerson: Word('прикидываем', 4),
  plural2ndPerson: Word('прикидываете', 4),
  plural3rdPerson: Word('прикидывают', 4),
  masculinePast: Word('прикидывал', 4),
  femininePast: Word('прикидывала', 4),
  neuterPast: Word('прикидывало', 4),
  pluralPast: Word('прикидывали', 4),
  imperativeInformal: Word('прикидывай', 4),
  imperativeFormal: Word('прикидывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прикидывать.name.text, прикидывать);

export { прикидывать };