import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхлёбывать: PerfectVerb = {
  name: Word('расхлёбывать', 1),
  singular1stPerson: Word('расхлёбываю', 1),
  singular2ndPerson: Word('расхлёбываешь', 1),
  singular3rdPerson: Word('расхлёбывает', 1),
  plural1stPerson: Word('расхлёбываем', 1),
  plural2ndPerson: Word('расхлёбываете', 1),
  plural3rdPerson: Word('расхлёбывают', 1),
  masculinePast: Word('расхлёбывал', 1),
  femininePast: Word('расхлёбывала', 1),
  neuterPast: Word('расхлёбывало', 1),
  pluralPast: Word('расхлёбывали', 1),
  imperativeInformal: Word('расхлёбывай', 1),
  imperativeFormal: Word('расхлёбывайте', 1),
  imperfect: [],
};

perfectVerbs.set(расхлёбывать.name.text, расхлёбывать);

export { расхлёбывать };