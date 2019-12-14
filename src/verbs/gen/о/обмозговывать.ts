import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмозговывать: PerfectVerb = {
  name: Word('обмозговывать', 6),
  singular1stPerson: Word('обмозговываю', 6),
  singular2ndPerson: Word('обмозговываешь', 6),
  singular3rdPerson: Word('обмозговывает', 6),
  plural1stPerson: Word('обмозговываем', 6),
  plural2ndPerson: Word('обмозговываете', 6),
  plural3rdPerson: Word('обмозговывают', 6),
  masculinePast: Word('обмозговывал', 6),
  femininePast: Word('обмозговывала', 6),
  neuterPast: Word('обмозговывало', 6),
  pluralPast: Word('обмозговывали', 6),
  imperativeInformal: Word('обмозговывай', 6),
  imperativeFormal: Word('обмозговывайте', 6),
  imperfect: [],
};

perfectVerbs.set(обмозговывать.name.text, обмозговывать);

export { обмозговывать };