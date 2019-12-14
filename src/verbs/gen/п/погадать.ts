import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погадать: PerfectVerb = {
  name: Word('погадать', 5),
  singular1stPerson: Word('погадаю', 5),
  singular2ndPerson: Word('погадаешь', 5),
  singular3rdPerson: Word('погадает', 5),
  plural1stPerson: Word('погадаем', 5),
  plural2ndPerson: Word('погадаете', 5),
  plural3rdPerson: Word('погадают', 5),
  masculinePast: Word('погадал', 5),
  femininePast: Word('погадала', 5),
  neuterPast: Word('погадало', 5),
  pluralPast: Word('погадали', 5),
  imperativeInformal: Word('погадай', 5),
  imperativeFormal: Word('погадайте', 5),
  imperfect: [],
};

perfectVerbs.set(погадать.name.text, погадать);

export { погадать };