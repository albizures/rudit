import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхлёбывать: PerfectVerb = {
  name: Word('отхлёбывать', 4),
  singular1stPerson: Word('отхлёбываю', 4),
  singular2ndPerson: Word('отхлёбываешь', 4),
  singular3rdPerson: Word('отхлёбывает', 4),
  plural1stPerson: Word('отхлёбываем', 4),
  plural2ndPerson: Word('отхлёбываете', 4),
  plural3rdPerson: Word('отхлёбывают', 4),
  masculinePast: Word('отхлёбывал', 4),
  femininePast: Word('отхлёбывала', 4),
  neuterPast: Word('отхлёбывало', 4),
  pluralPast: Word('отхлёбывали', 4),
  imperativeInformal: Word('отхлёбывай', 4),
  imperativeFormal: Word('отхлёбывайте', 4),
  imperfect: [],
};

perfectVerbs.set(отхлёбывать.name.text, отхлёбывать);

export { отхлёбывать };