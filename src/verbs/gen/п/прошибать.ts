import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошибать: PerfectVerb = {
  name: Word('прошибать', 6),
  singular1stPerson: Word('прошибаю', 6),
  singular2ndPerson: Word('прошибаешь', 6),
  singular3rdPerson: Word('прошибает', 6),
  plural1stPerson: Word('прошибаем', 6),
  plural2ndPerson: Word('прошибаете', 6),
  plural3rdPerson: Word('прошибают', 6),
  masculinePast: Word('прошибал', 6),
  femininePast: Word('прошибала', 6),
  neuterPast: Word('прошибало', 6),
  pluralPast: Word('прошибали', 6),
  imperativeInformal: Word('прошибай', 6),
  imperativeFormal: Word('прошибайте', 6),
  imperfect: [],
};

perfectVerbs.set(прошибать.name.text, прошибать);

export { прошибать };