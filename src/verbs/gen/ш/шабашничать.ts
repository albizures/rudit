import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шабашничать: PerfectVerb = {
  name: Word('шабашничать', 3),
  singular1stPerson: Word('шабашничаю', 3),
  singular2ndPerson: Word('шабашничаешь', 3),
  singular3rdPerson: Word('шабашничает', 3),
  plural1stPerson: Word('шабашничаем', 3),
  plural2ndPerson: Word('шабашничаете', 3),
  plural3rdPerson: Word('шабашничают', 3),
  masculinePast: Word('шабашничал', 3),
  femininePast: Word('шабашничала', 3),
  neuterPast: Word('шабашничало', 3),
  pluralPast: Word('шабашничали', 3),
  imperativeInformal: Word('шабашничай', 3),
  imperativeFormal: Word('шабашничайте', 3),
  imperfect: [],
};

perfectVerbs.set(шабашничать.name.text, шабашничать);

export { шабашничать };