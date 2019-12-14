import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмазывать: PerfectVerb = {
  name: Word('обмазывать', 3),
  singular1stPerson: Word('обмазываю', 3),
  singular2ndPerson: Word('обмазываешь', 3),
  singular3rdPerson: Word('обмазывает', 3),
  plural1stPerson: Word('обмазываем', 3),
  plural2ndPerson: Word('обмазываете', 3),
  plural3rdPerson: Word('обмазывают', 3),
  masculinePast: Word('обмазывал', 3),
  femininePast: Word('обмазывала', 3),
  neuterPast: Word('обмазывало', 3),
  pluralPast: Word('обмазывали', 3),
  imperativeInformal: Word('обмазывай', 3),
  imperativeFormal: Word('обмазывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обмазывать.name.text, обмазывать);

export { обмазывать };