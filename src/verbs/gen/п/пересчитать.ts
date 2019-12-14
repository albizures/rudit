import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересчитать: PerfectVerb = {
  name: Word('пересчитать', 8),
  singular1stPerson: Word('пересчитаю', 8),
  singular2ndPerson: Word('пересчитаешь', 8),
  singular3rdPerson: Word('пересчитает', 8),
  plural1stPerson: Word('пересчитаем', 8),
  plural2ndPerson: Word('пересчитаете', 8),
  plural3rdPerson: Word('пересчитают', 8),
  masculinePast: Word('пересчитал', 8),
  femininePast: Word('пересчитала', 8),
  neuterPast: Word('пересчитало', 8),
  pluralPast: Word('пересчитали', 8),
  imperativeInformal: Word('пересчитай', 8),
  imperativeFormal: Word('пересчитайте', 8),
  imperfect: [],
};

perfectVerbs.set(пересчитать.name.text, пересчитать);

export { пересчитать };