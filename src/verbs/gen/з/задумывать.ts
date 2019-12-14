import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задумывать: PerfectVerb = {
  name: Word('задумывать', 3),
  singular1stPerson: Word('задумываю', 3),
  singular2ndPerson: Word('задумываешь', 3),
  singular3rdPerson: Word('задумывает', 3),
  plural1stPerson: Word('задумываем', 3),
  plural2ndPerson: Word('задумываете', 3),
  plural3rdPerson: Word('задумывают', 3),
  masculinePast: Word('задумывал', 3),
  femininePast: Word('задумывала', 3),
  neuterPast: Word('задумывало', 3),
  pluralPast: Word('задумывали', 3),
  imperativeInformal: Word('задумывай', 3),
  imperativeFormal: Word('задумывайте', 3),
  imperfect: [],
};

perfectVerbs.set(задумывать.name.text, задумывать);

export { задумывать };