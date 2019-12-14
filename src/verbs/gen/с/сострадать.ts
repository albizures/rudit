import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сострадать: PerfectVerb = {
  name: Word('сострадать', 7),
  singular1stPerson: Word('сострадаю', 7),
  singular2ndPerson: Word('сострадаешь', 7),
  singular3rdPerson: Word('сострадает', 7),
  plural1stPerson: Word('сострадаем', 7),
  plural2ndPerson: Word('сострадаете', 7),
  plural3rdPerson: Word('сострадают', 7),
  masculinePast: Word('сострадал', 7),
  femininePast: Word('сострадала', 7),
  neuterPast: Word('сострадало', 7),
  pluralPast: Word('сострадали', 7),
  imperativeInformal: Word('сострадай', 7),
  imperativeFormal: Word('сострадайте', 7),
  imperfect: [],
};

perfectVerbs.set(сострадать.name.text, сострадать);

export { сострадать };