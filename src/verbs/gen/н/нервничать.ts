import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нервничать: PerfectVerb = {
  name: Word('нервничать', 1),
  singular1stPerson: Word('нервничаю', 1),
  singular2ndPerson: Word('нервничаешь', 1),
  singular3rdPerson: Word('нервничает', 1),
  plural1stPerson: Word('нервничаем', 1),
  plural2ndPerson: Word('нервничаете', 1),
  plural3rdPerson: Word('нервничают', 1),
  masculinePast: Word('нервничал', 1),
  femininePast: Word('нервничала', 1),
  neuterPast: Word('нервничало', 1),
  pluralPast: Word('нервничали', 1),
  imperativeInformal: Word('нервничай', 1),
  imperativeFormal: Word('нервничайте', 1),
  imperfect: [],
};

perfectVerbs.set(нервничать.name.text, нервничать);

export { нервничать };