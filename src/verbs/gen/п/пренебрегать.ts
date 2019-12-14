import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пренебрегать: PerfectVerb = {
  name: Word('пренебрегать', 9),
  singular1stPerson: Word('пренебрегаю', 9),
  singular2ndPerson: Word('пренебрегаешь', 9),
  singular3rdPerson: Word('пренебрегает', 9),
  plural1stPerson: Word('пренебрегаем', 9),
  plural2ndPerson: Word('пренебрегаете', 9),
  plural3rdPerson: Word('пренебрегают', 9),
  masculinePast: Word('пренебрегал', 9),
  femininePast: Word('пренебрегала', 9),
  neuterPast: Word('пренебрегало', 9),
  pluralPast: Word('пренебрегали', 9),
  imperativeInformal: Word('пренебрегай', 9),
  imperativeFormal: Word('пренебрегайте', 9),
  imperfect: ['пренебречь'],
};

perfectVerbs.set(пренебрегать.name.text, пренебрегать);

export { пренебрегать };