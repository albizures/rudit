import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокатывать: PerfectVerb = {
  name: Word('прокатывать', 4),
  singular1stPerson: Word('прокатываю', 4),
  singular2ndPerson: Word('прокатываешь', 4),
  singular3rdPerson: Word('прокатывает', 4),
  plural1stPerson: Word('прокатываем', 4),
  plural2ndPerson: Word('прокатываете', 4),
  plural3rdPerson: Word('прокатывают', 4),
  masculinePast: Word('прокатывал', 4),
  femininePast: Word('прокатывала', 4),
  neuterPast: Word('прокатывало', 4),
  pluralPast: Word('прокатывали', 4),
  imperativeInformal: Word('прокатывай', 4),
  imperativeFormal: Word('прокатывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокатывать.name.text, прокатывать);

export { прокатывать };