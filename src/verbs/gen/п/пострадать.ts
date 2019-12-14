import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пострадать: PerfectVerb = {
  name: Word('пострадать', 7),
  singular1stPerson: Word('пострадаю', 7),
  singular2ndPerson: Word('пострадаешь', 7),
  singular3rdPerson: Word('пострадает', 7),
  plural1stPerson: Word('пострадаем', 7),
  plural2ndPerson: Word('пострадаете', 7),
  plural3rdPerson: Word('пострадают', 7),
  masculinePast: Word('пострадал', 7),
  femininePast: Word('пострадала', 7),
  neuterPast: Word('пострадало', 7),
  pluralPast: Word('пострадали', 7),
  imperativeInformal: Word('пострадай', 7),
  imperativeFormal: Word('пострадайте', 7),
  imperfect: [],
};

perfectVerbs.set(пострадать.name.text, пострадать);

export { пострадать };