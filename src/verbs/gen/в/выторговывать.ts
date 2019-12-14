import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выторговывать: PerfectVerb = {
  name: Word('выторговывать', 6),
  singular1stPerson: Word('выторговываю', 6),
  singular2ndPerson: Word('выторговываешь', 6),
  singular3rdPerson: Word('выторговывает', 6),
  plural1stPerson: Word('выторговываем', 6),
  plural2ndPerson: Word('выторговываете', 6),
  plural3rdPerson: Word('выторговывают', 6),
  masculinePast: Word('выторговывал', 6),
  femininePast: Word('выторговывала', 6),
  neuterPast: Word('выторговывало', 6),
  pluralPast: Word('выторговывали', 6),
  imperativeInformal: Word('выторговывай', 6),
  imperativeFormal: Word('выторговывайте', 6),
  imperfect: [],
};

perfectVerbs.set(выторговывать.name.text, выторговывать);

export { выторговывать };