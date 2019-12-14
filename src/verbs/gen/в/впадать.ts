import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впадать: PerfectVerb = {
  name: Word('впадать', 4),
  singular1stPerson: Word('впадаю', 4),
  singular2ndPerson: Word('впадаешь', 4),
  singular3rdPerson: Word('впадает', 4),
  plural1stPerson: Word('впадаем', 4),
  plural2ndPerson: Word('впадаете', 4),
  plural3rdPerson: Word('впадают', 4),
  masculinePast: Word('впадал', 4),
  femininePast: Word('впадала', 4),
  neuterPast: Word('впадало', 4),
  pluralPast: Word('впадали', 4),
  imperativeInformal: Word('впадай', 4),
  imperativeFormal: Word('впадайте', 4),
  imperfect: [],
};

perfectVerbs.set(впадать.name.text, впадать);

export { впадать };