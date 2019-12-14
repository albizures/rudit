import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочитать: PerfectVerb = {
  name: Word('прочитать', 6),
  singular1stPerson: Word('прочитаю', 6),
  singular2ndPerson: Word('прочитаешь', 6),
  singular3rdPerson: Word('прочитает', 6),
  plural1stPerson: Word('прочитаем', 6),
  plural2ndPerson: Word('прочитаете', 6),
  plural3rdPerson: Word('прочитают', 6),
  masculinePast: Word('прочитал', 6),
  femininePast: Word('прочитала', 6),
  neuterPast: Word('прочитало', 6),
  pluralPast: Word('прочитали', 6),
  imperativeInformal: Word('прочитай', 6),
  imperativeFormal: Word('прочитайте', 6),
  imperfect: ['читать'],
};

perfectVerbs.set(прочитать.name.text, прочитать);

export { прочитать };