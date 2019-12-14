import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышибать: PerfectVerb = {
  name: Word('вышибать', 5),
  singular1stPerson: Word('вышибаю', 5),
  singular2ndPerson: Word('вышибаешь', 5),
  singular3rdPerson: Word('вышибает', 5),
  plural1stPerson: Word('вышибаем', 5),
  plural2ndPerson: Word('вышибаете', 5),
  plural3rdPerson: Word('вышибают', 5),
  masculinePast: Word('вышибал', 5),
  femininePast: Word('вышибала', 5),
  neuterPast: Word('вышибало', 5),
  pluralPast: Word('вышибали', 5),
  imperativeInformal: Word('вышибай', 5),
  imperativeFormal: Word('вышибайте', 5),
  imperfect: ['вышибить'],
};

perfectVerbs.set(вышибать.name.text, вышибать);

export { вышибать };