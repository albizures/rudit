import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притязать: PerfectVerb = {
  name: Word('притязать', 6),
  singular1stPerson: Word('притязаю', 6),
  singular2ndPerson: Word('притязаешь', 6),
  singular3rdPerson: Word('притязает', 6),
  plural1stPerson: Word('притязаем', 6),
  plural2ndPerson: Word('притязаете', 6),
  plural3rdPerson: Word('притязают', 6),
  masculinePast: Word('притязал', 6),
  femininePast: Word('притязала', 6),
  neuterPast: Word('притязало', 6),
  pluralPast: Word('притязали', 6),
  imperativeInformal: Word('притязай', 6),
  imperativeFormal: Word('притязайте', 6),
  imperfect: [],
};

perfectVerbs.set(притязать.name.text, притязать);

export { притязать };