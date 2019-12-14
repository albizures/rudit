import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдумывать: PerfectVerb = {
  name: Word('обдумывать', 3),
  singular1stPerson: Word('обдумываю', 3),
  singular2ndPerson: Word('обдумываешь', 3),
  singular3rdPerson: Word('обдумывает', 3),
  plural1stPerson: Word('обдумываем', 3),
  plural2ndPerson: Word('обдумываете', 3),
  plural3rdPerson: Word('обдумывают', 3),
  masculinePast: Word('обдумывал', 3),
  femininePast: Word('обдумывала', 3),
  neuterPast: Word('обдумывало', 3),
  pluralPast: Word('обдумывали', 3),
  imperativeInformal: Word('обдумывай', 3),
  imperativeFormal: Word('обдумывайте', 3),
  imperfect: ['обдумать'],
};

perfectVerbs.set(обдумывать.name.text, обдумывать);

export { обдумывать };