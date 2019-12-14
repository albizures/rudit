import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обязывать: PerfectVerb = {
  name: Word('обязывать', 2),
  singular1stPerson: Word('обязываю', 2),
  singular2ndPerson: Word('обязываешь', 2),
  singular3rdPerson: Word('обязывает', 2),
  plural1stPerson: Word('обязываем', 2),
  plural2ndPerson: Word('обязываете', 2),
  plural3rdPerson: Word('обязывают', 2),
  masculinePast: Word('обязывал', 2),
  femininePast: Word('обязывала', 2),
  neuterPast: Word('обязывало', 2),
  pluralPast: Word('обязывали', 2),
  imperativeInformal: Word('обязывай', 2),
  imperativeFormal: Word('обязывайте', 2),
  imperfect: [],
};

perfectVerbs.set(обязывать.name.text, обязывать);

export { обязывать };