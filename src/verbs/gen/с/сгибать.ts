import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгибать: PerfectVerb = {
  name: Word('сгибать', 4),
  singular1stPerson: Word('сгибаю', 4),
  singular2ndPerson: Word('сгибаешь', 4),
  singular3rdPerson: Word('сгибает', 4),
  plural1stPerson: Word('сгибаем', 4),
  plural2ndPerson: Word('сгибаете', 4),
  plural3rdPerson: Word('сгибают', 4),
  masculinePast: Word('сгибал', 4),
  femininePast: Word('сгибала', 4),
  neuterPast: Word('сгибало', 4),
  pluralPast: Word('сгибали', 4),
  imperativeInformal: Word('сгибай', 4),
  imperativeFormal: Word('сгибайте', 4),
  imperfect: ['согнуть'],
};

perfectVerbs.set(сгибать.name.text, сгибать);

export { сгибать };