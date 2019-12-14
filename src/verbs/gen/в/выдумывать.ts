import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдумывать: PerfectVerb = {
  name: Word('выдумывать', 3),
  singular1stPerson: Word('выдумываю', 3),
  singular2ndPerson: Word('выдумываешь', 3),
  singular3rdPerson: Word('выдумывает', 3),
  plural1stPerson: Word('выдумываем', 3),
  plural2ndPerson: Word('выдумываете', 3),
  plural3rdPerson: Word('выдумывают', 3),
  masculinePast: Word('выдумывал', 3),
  femininePast: Word('выдумывала', 3),
  neuterPast: Word('выдумывало', 3),
  pluralPast: Word('выдумывали', 3),
  imperativeInformal: Word('выдумывай', 3),
  imperativeFormal: Word('выдумывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выдумывать.name.text, выдумывать);

export { выдумывать };