import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разглаживать: PerfectVerb = {
  name: Word('разглаживать', 5),
  singular1stPerson: Word('разглаживаю', 5),
  singular2ndPerson: Word('разглаживаешь', 5),
  singular3rdPerson: Word('разглаживает', 5),
  plural1stPerson: Word('разглаживаем', 5),
  plural2ndPerson: Word('разглаживаете', 5),
  plural3rdPerson: Word('разглаживают', 5),
  masculinePast: Word('разглаживал', 5),
  femininePast: Word('разглаживала', 5),
  neuterPast: Word('разглаживало', 5),
  pluralPast: Word('разглаживали', 5),
  imperativeInformal: Word('разглаживай', 5),
  imperativeFormal: Word('разглаживайте', 5),
  imperfect: [],
};

perfectVerbs.set(разглаживать.name.text, разглаживать);

export { разглаживать };