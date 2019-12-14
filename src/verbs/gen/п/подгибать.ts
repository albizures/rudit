import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгибать: PerfectVerb = {
  name: Word('подгибать', 6),
  singular1stPerson: Word('подгибаю', 6),
  singular2ndPerson: Word('подгибаешь', 6),
  singular3rdPerson: Word('подгибает', 6),
  plural1stPerson: Word('подгибаем', 6),
  plural2ndPerson: Word('подгибаете', 6),
  plural3rdPerson: Word('подгибают', 6),
  masculinePast: Word('подгибал', 6),
  femininePast: Word('подгибала', 6),
  neuterPast: Word('подгибало', 6),
  pluralPast: Word('подгибали', 6),
  imperativeInformal: Word('подгибай', 6),
  imperativeFormal: Word('подгибайте', 6),
  imperfect: [],
};

perfectVerbs.set(подгибать.name.text, подгибать);

export { подгибать };