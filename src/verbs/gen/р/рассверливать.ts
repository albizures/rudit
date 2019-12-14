import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассверливать: PerfectVerb = {
  name: Word('рассверливать', 5),
  singular1stPerson: Word('рассверливаю', 5),
  singular2ndPerson: Word('рассверливаешь', 5),
  singular3rdPerson: Word('рассверливает', 5),
  plural1stPerson: Word('рассверливаем', 5),
  plural2ndPerson: Word('рассверливаете', 5),
  plural3rdPerson: Word('рассверливают', 5),
  masculinePast: Word('рассверливал', 5),
  femininePast: Word('рассверливала', 5),
  neuterPast: Word('рассверливало', 5),
  pluralPast: Word('рассверливали', 5),
  imperativeInformal: Word('рассверливай', 5),
  imperativeFormal: Word('рассверливайте', 5),
  imperfect: [],
};

perfectVerbs.set(рассверливать.name.text, рассверливать);

export { рассверливать };