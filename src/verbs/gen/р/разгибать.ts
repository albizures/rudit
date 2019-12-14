import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгибать: PerfectVerb = {
  name: Word('разгибать', 6),
  singular1stPerson: Word('разгибаю', 6),
  singular2ndPerson: Word('разгибаешь', 6),
  singular3rdPerson: Word('разгибает', 6),
  plural1stPerson: Word('разгибаем', 6),
  plural2ndPerson: Word('разгибаете', 6),
  plural3rdPerson: Word('разгибают', 6),
  masculinePast: Word('разгибал', 6),
  femininePast: Word('разгибала', 6),
  neuterPast: Word('разгибало', 6),
  pluralPast: Word('разгибали', 6),
  imperativeInformal: Word('разгибай', 6),
  imperativeFormal: Word('разгибайте', 6),
  imperfect: [],
};

perfectVerbs.set(разгибать.name.text, разгибать);

export { разгибать };