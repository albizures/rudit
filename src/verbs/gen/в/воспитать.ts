import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспитать: PerfectVerb = {
  name: Word('воспитать', 6),
  singular1stPerson: Word('воспитаю', 6),
  singular2ndPerson: Word('воспитаешь', 6),
  singular3rdPerson: Word('воспитает', 6),
  plural1stPerson: Word('воспитаем', 6),
  plural2ndPerson: Word('воспитаете', 6),
  plural3rdPerson: Word('воспитают', 6),
  masculinePast: Word('воспитал', 6),
  femininePast: Word('воспитала', 6),
  neuterPast: Word('воспитало', 6),
  pluralPast: Word('воспитали', 6),
  imperativeInformal: Word('воспитай', 6),
  imperativeFormal: Word('воспитайте', 6),
  imperfect: ['воспитывать'],
};

perfectVerbs.set(воспитать.name.text, воспитать);

export { воспитать };