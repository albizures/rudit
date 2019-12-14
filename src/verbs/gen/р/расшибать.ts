import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшибать: PerfectVerb = {
  name: Word('расшибать', 6),
  singular1stPerson: Word('расшибаю', 6),
  singular2ndPerson: Word('расшибаешь', 6),
  singular3rdPerson: Word('расшибает', 6),
  plural1stPerson: Word('расшибаем', 6),
  plural2ndPerson: Word('расшибаете', 6),
  plural3rdPerson: Word('расшибают', 6),
  masculinePast: Word('расшибал', 6),
  femininePast: Word('расшибала', 6),
  neuterPast: Word('расшибало', 6),
  pluralPast: Word('расшибали', 6),
  imperativeInformal: Word('расшибай', 6),
  imperativeFormal: Word('расшибайте', 6),
  imperfect: [],
};

perfectVerbs.set(расшибать.name.text, расшибать);

export { расшибать };