import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвязывать: PerfectVerb = {
  name: Word('обвязывать', 3),
  singular1stPerson: Word('обвязываю', 3),
  singular2ndPerson: Word('обвязываешь', 3),
  singular3rdPerson: Word('обвязывает', 3),
  plural1stPerson: Word('обвязываем', 3),
  plural2ndPerson: Word('обвязываете', 3),
  plural3rdPerson: Word('обвязывают', 3),
  masculinePast: Word('обвязывал', 3),
  femininePast: Word('обвязывала', 3),
  neuterPast: Word('обвязывало', 3),
  pluralPast: Word('обвязывали', 3),
  imperativeInformal: Word('обвязывай', 3),
  imperativeFormal: Word('обвязывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обвязывать.name.text, обвязывать);

export { обвязывать };