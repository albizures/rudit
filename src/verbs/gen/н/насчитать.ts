import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насчитать: PerfectVerb = {
  name: Word('насчитать', 6),
  singular1stPerson: Word('насчитаю', 6),
  singular2ndPerson: Word('насчитаешь', 6),
  singular3rdPerson: Word('насчитает', 6),
  plural1stPerson: Word('насчитаем', 6),
  plural2ndPerson: Word('насчитаете', 6),
  plural3rdPerson: Word('насчитают', 6),
  masculinePast: Word('насчитал', 6),
  femininePast: Word('насчитала', 6),
  neuterPast: Word('насчитало', 6),
  pluralPast: Word('насчитали', 6),
  imperativeInformal: Word('насчитай', 6),
  imperativeFormal: Word('насчитайте', 6),
  imperfect: ['насчитывать'],
};

perfectVerbs.set(насчитать.name.text, насчитать);

export { насчитать };