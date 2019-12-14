import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокалывать: PerfectVerb = {
  name: Word('прокалывать', 4),
  singular1stPerson: Word('прокалываю', 4),
  singular2ndPerson: Word('прокалываешь', 4),
  singular3rdPerson: Word('прокалывает', 4),
  plural1stPerson: Word('прокалываем', 4),
  plural2ndPerson: Word('прокалываете', 4),
  plural3rdPerson: Word('прокалывают', 4),
  masculinePast: Word('прокалывал', 4),
  femininePast: Word('прокалывала', 4),
  neuterPast: Word('прокалывало', 4),
  pluralPast: Word('прокалывали', 4),
  imperativeInformal: Word('прокалывай', 4),
  imperativeFormal: Word('прокалывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокалывать.name.text, прокалывать);

export { прокалывать };