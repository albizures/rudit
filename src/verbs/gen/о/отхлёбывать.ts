import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхлёбывать: PerfectVerb = {
  name: Word('отхлёбывать', 8),
  singular1stPerson: Word('отхлёбываю', 8),
  singular2ndPerson: Word('отхлёбываешь', 8),
  singular3rdPerson: Word('отхлёбывает', 8),
  plural1stPerson: Word('отхлёбываем', 8),
  plural2ndPerson: Word('отхлёбываете', 8),
  plural3rdPerson: Word('отхлёбывают', 8),
  masculinePast: Word('отхлёбывал', 8),
  femininePast: Word('отхлёбывала', 8),
  neuterPast: Word('отхлёбывало', 8),
  pluralPast: Word('отхлёбывали', 8),
  imperativeInformal: Word('отхлёбывай', 8),
  imperativeFormal: Word('отхлёбывайте', 8),
  imperfect: [],
};

perfectVerbs.set(отхлёбывать.name.text, отхлёбывать);

export { отхлёбывать };