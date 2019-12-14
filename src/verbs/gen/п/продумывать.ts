import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продумывать: PerfectVerb = {
  name: Word('продумывать', 4),
  singular1stPerson: Word('продумываю', 4),
  singular2ndPerson: Word('продумываешь', 4),
  singular3rdPerson: Word('продумывает', 4),
  plural1stPerson: Word('продумываем', 4),
  plural2ndPerson: Word('продумываете', 4),
  plural3rdPerson: Word('продумывают', 4),
  masculinePast: Word('продумывал', 4),
  femininePast: Word('продумывала', 4),
  neuterPast: Word('продумывало', 4),
  pluralPast: Word('продумывали', 4),
  imperativeInformal: Word('продумывай', 4),
  imperativeFormal: Word('продумывайте', 4),
  imperfect: [],
};

perfectVerbs.set(продумывать.name.text, продумывать);

export { продумывать };