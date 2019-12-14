import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычитать: PerfectVerb = {
  name: Word('вычитать', 1),
  singular1stPerson: Word('вычитаю', 1),
  singular2ndPerson: Word('вычитаешь', 1),
  singular3rdPerson: Word('вычитает', 1),
  plural1stPerson: Word('вычитаем', 1),
  plural2ndPerson: Word('вычитаете', 1),
  plural3rdPerson: Word('вычитают', 1),
  masculinePast: Word('вычитал', 1),
  femininePast: Word('вычитала', 1),
  neuterPast: Word('вычитало', 1),
  pluralPast: Word('вычитали', 1),
  imperativeInformal: Word('вычитай', 1),
  imperativeFormal: Word('вычитайте', 1),
  imperfect: [],
};

perfectVerbs.set(вычитать.name.text, вычитать);

export { вычитать };