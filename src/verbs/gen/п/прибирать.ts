import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибирать: PerfectVerb = {
  name: Word('прибирать', 6),
  singular1stPerson: Word('прибираю', 6),
  singular2ndPerson: Word('прибираешь', 6),
  singular3rdPerson: Word('прибирает', 6),
  plural1stPerson: Word('прибираем', 6),
  plural2ndPerson: Word('прибираете', 6),
  plural3rdPerson: Word('прибирают', 6),
  masculinePast: Word('прибирал', 6),
  femininePast: Word('прибирала', 6),
  neuterPast: Word('прибирало', 6),
  pluralPast: Word('прибирали', 6),
  imperativeInformal: Word('прибирай', 6),
  imperativeFormal: Word('прибирайте', 6),
  imperfect: [],
};

perfectVerbs.set(прибирать.name.text, прибирать);

export { прибирать };