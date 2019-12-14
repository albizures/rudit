import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделать: PerfectVerb = {
  name: Word('разделать', 4),
  singular1stPerson: Word('разделаю', 4),
  singular2ndPerson: Word('разделаешь', 4),
  singular3rdPerson: Word('разделает', 4),
  plural1stPerson: Word('разделаем', 4),
  plural2ndPerson: Word('разделаете', 4),
  plural3rdPerson: Word('разделают', 4),
  masculinePast: Word('разделал', 4),
  femininePast: Word('разделала', 4),
  neuterPast: Word('разделало', 4),
  pluralPast: Word('разделали', 4),
  imperativeInformal: Word('разделай', 4),
  imperativeFormal: Word('разделайте', 4),
  imperfect: [],
};

perfectVerbs.set(разделать.name.text, разделать);

export { разделать };