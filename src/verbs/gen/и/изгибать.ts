import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгибать: PerfectVerb = {
  name: Word('изгибать', 5),
  singular1stPerson: Word('изгибаю', 5),
  singular2ndPerson: Word('изгибаешь', 5),
  singular3rdPerson: Word('изгибает', 5),
  plural1stPerson: Word('изгибаем', 5),
  plural2ndPerson: Word('изгибаете', 5),
  plural3rdPerson: Word('изгибают', 5),
  masculinePast: Word('изгибал', 5),
  femininePast: Word('изгибала', 5),
  neuterPast: Word('изгибало', 5),
  pluralPast: Word('изгибали', 5),
  imperativeInformal: Word('изгибай', 5),
  imperativeFormal: Word('изгибайте', 5),
  imperfect: [],
};

perfectVerbs.set(изгибать.name.text, изгибать);

export { изгибать };