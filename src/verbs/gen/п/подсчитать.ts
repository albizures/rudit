import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсчитать: PerfectVerb = {
  name: Word('подсчитать', 7),
  singular1stPerson: Word('подсчитаю', 7),
  singular2ndPerson: Word('подсчитаешь', 7),
  singular3rdPerson: Word('подсчитает', 7),
  plural1stPerson: Word('подсчитаем', 7),
  plural2ndPerson: Word('подсчитаете', 7),
  plural3rdPerson: Word('подсчитают', 7),
  masculinePast: Word('подсчитал', 7),
  femininePast: Word('подсчитала', 7),
  neuterPast: Word('подсчитало', 7),
  pluralPast: Word('подсчитали', 7),
  imperativeInformal: Word('подсчитай', 7),
  imperativeFormal: Word('подсчитайте', 7),
  imperfect: ['подсчитывать'],
};

perfectVerbs.set(подсчитать.name.text, подсчитать);

export { подсчитать };