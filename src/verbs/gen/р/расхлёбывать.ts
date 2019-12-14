import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхлёбывать: PerfectVerb = {
  name: Word('расхлёбывать', 5),
  singular1stPerson: Word('расхлёбываю', 5),
  singular2ndPerson: Word('расхлёбываешь', 5),
  singular3rdPerson: Word('расхлёбывает', 5),
  plural1stPerson: Word('расхлёбываем', 5),
  plural2ndPerson: Word('расхлёбываете', 5),
  plural3rdPerson: Word('расхлёбывают', 5),
  masculinePast: Word('расхлёбывал', 5),
  femininePast: Word('расхлёбывала', 5),
  neuterPast: Word('расхлёбывало', 5),
  pluralPast: Word('расхлёбывали', 5),
  imperativeInformal: Word('расхлёбывай', 5),
  imperativeFormal: Word('расхлёбывайте', 5),
  imperfect: [],
};

perfectVerbs.set(расхлёбывать.name.text, расхлёбывать);

export { расхлёбывать };