import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подшибать: PerfectVerb = {
  name: Word('подшибать', 6),
  singular1stPerson: Word('подшибаю', 6),
  singular2ndPerson: Word('подшибаешь', 6),
  singular3rdPerson: Word('подшибает', 6),
  plural1stPerson: Word('подшибаем', 6),
  plural2ndPerson: Word('подшибаете', 6),
  plural3rdPerson: Word('подшибают', 6),
  masculinePast: Word('подшибал', 6),
  femininePast: Word('подшибала', 6),
  neuterPast: Word('подшибало', 6),
  pluralPast: Word('подшибали', 6),
  imperativeInformal: Word('подшибай', 6),
  imperativeFormal: Word('подшибайте', 6),
  imperfect: [],
};

perfectVerbs.set(подшибать.name.text, подшибать);

export { подшибать };