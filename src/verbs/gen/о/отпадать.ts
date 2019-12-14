import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпадать: PerfectVerb = {
  name: Word('отпадать', 5),
  singular1stPerson: Word('отпадаю', 5),
  singular2ndPerson: Word('отпадаешь', 5),
  singular3rdPerson: Word('отпадает', 5),
  plural1stPerson: Word('отпадаем', 5),
  plural2ndPerson: Word('отпадаете', 5),
  plural3rdPerson: Word('отпадают', 5),
  masculinePast: Word('отпадал', 5),
  femininePast: Word('отпадала', 5),
  neuterPast: Word('отпадало', 5),
  pluralPast: Word('отпадали', 5),
  imperativeInformal: Word('отпадай', 5),
  imperativeFormal: Word('отпадайте', 5),
  imperfect: [],
};

perfectVerbs.set(отпадать.name.text, отпадать);

export { отпадать };