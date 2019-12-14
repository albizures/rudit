import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обматывать: PerfectVerb = {
  name: Word('обматывать', 3),
  singular1stPerson: Word('обматываю', 3),
  singular2ndPerson: Word('обматываешь', 3),
  singular3rdPerson: Word('обматывает', 3),
  plural1stPerson: Word('обматываем', 3),
  plural2ndPerson: Word('обматываете', 3),
  plural3rdPerson: Word('обматывают', 3),
  masculinePast: Word('обматывал', 3),
  femininePast: Word('обматывала', 3),
  neuterPast: Word('обматывало', 3),
  pluralPast: Word('обматывали', 3),
  imperativeInformal: Word('обматывай', 3),
  imperativeFormal: Word('обматывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обматывать.name.text, обматывать);

export { обматывать };