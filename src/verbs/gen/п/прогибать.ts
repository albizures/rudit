import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогибать: PerfectVerb = {
  name: Word('прогибать', 6),
  singular1stPerson: Word('прогибаю', 6),
  singular2ndPerson: Word('прогибаешь', 6),
  singular3rdPerson: Word('прогибает', 6),
  plural1stPerson: Word('прогибаем', 6),
  plural2ndPerson: Word('прогибаете', 6),
  plural3rdPerson: Word('прогибают', 6),
  masculinePast: Word('прогибал', 6),
  femininePast: Word('прогибала', 6),
  neuterPast: Word('прогибало', 6),
  pluralPast: Word('прогибали', 6),
  imperativeInformal: Word('прогибай', 6),
  imperativeFormal: Word('прогибайте', 6),
  imperfect: [],
};

perfectVerbs.set(прогибать.name.text, прогибать);

export { прогибать };