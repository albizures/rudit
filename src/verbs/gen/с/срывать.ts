import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срывать: PerfectVerb = {
  name: Word('срывать', 4),
  singular1stPerson: Word('срываю', 4),
  singular2ndPerson: Word('срываешь', 4),
  singular3rdPerson: Word('срывает', 4),
  plural1stPerson: Word('срываем', 4),
  plural2ndPerson: Word('срываете', 4),
  plural3rdPerson: Word('срывают', 4),
  masculinePast: Word('срывал', 4),
  femininePast: Word('срывала', 4),
  neuterPast: Word('срывало', 4),
  pluralPast: Word('срывали', 4),
  imperativeInformal: Word('срывай', 4),
  imperativeFormal: Word('срывайте', 4),
  imperfect: [],
};

perfectVerbs.set(срывать.name.text, срывать);

export { срывать };