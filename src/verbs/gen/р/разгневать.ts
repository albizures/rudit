import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгневать: PerfectVerb = {
  name: Word('разгневать', 5),
  singular1stPerson: Word('разгневаю', 5),
  singular2ndPerson: Word('разгневаешь', 5),
  singular3rdPerson: Word('разгневает', 5),
  plural1stPerson: Word('разгневаем', 5),
  plural2ndPerson: Word('разгневаете', 5),
  plural3rdPerson: Word('разгневают', 5),
  masculinePast: Word('разгневал', 5),
  femininePast: Word('разгневала', 5),
  neuterPast: Word('разгневало', 5),
  pluralPast: Word('разгневали', 5),
  imperativeInformal: Word('разгневай', 5),
  imperativeFormal: Word('разгневайте', 5),
  imperfect: [],
};

perfectVerbs.set(разгневать.name.text, разгневать);

export { разгневать };