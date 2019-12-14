import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбывать: PerfectVerb = {
  name: Word('отбывать', 5),
  singular1stPerson: Word('отбываю', 5),
  singular2ndPerson: Word('отбываешь', 5),
  singular3rdPerson: Word('отбывает', 5),
  plural1stPerson: Word('отбываем', 5),
  plural2ndPerson: Word('отбываете', 5),
  plural3rdPerson: Word('отбывают', 5),
  masculinePast: Word('отбывал', 5),
  femininePast: Word('отбывала', 5),
  neuterPast: Word('отбывало', 5),
  pluralPast: Word('отбывали', 5),
  imperativeInformal: Word('отбывай', 5),
  imperativeFormal: Word('отбывайте', 5),
  imperfect: [],
};

perfectVerbs.set(отбывать.name.text, отбывать);

export { отбывать };