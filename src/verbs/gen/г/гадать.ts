import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гадать: PerfectVerb = {
  name: Word('гадать', 3),
  singular1stPerson: Word('гадаю', 3),
  singular2ndPerson: Word('гадаешь', 3),
  singular3rdPerson: Word('гадает', 3),
  plural1stPerson: Word('гадаем', 3),
  plural2ndPerson: Word('гадаете', 3),
  plural3rdPerson: Word('гадают', 3),
  masculinePast: Word('гадал', 3),
  femininePast: Word('гадала', 3),
  neuterPast: Word('гадало', 3),
  pluralPast: Word('гадали', 3),
  imperativeInformal: Word('гадай', 3),
  imperativeFormal: Word('гадайте', 3),
  imperfect: ['погадать'],
};

perfectVerbs.set(гадать.name.text, гадать);

export { гадать };