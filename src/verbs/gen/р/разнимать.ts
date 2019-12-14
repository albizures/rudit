import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнимать: PerfectVerb = {
  name: Word('разнимать', 6),
  singular1stPerson: Word('разнимаю', 6),
  singular2ndPerson: Word('разнимаешь', 6),
  singular3rdPerson: Word('разнимает', 6),
  plural1stPerson: Word('разнимаем', 6),
  plural2ndPerson: Word('разнимаете', 6),
  plural3rdPerson: Word('разнимают', 6),
  masculinePast: Word('разнимал', 6),
  femininePast: Word('разнимала', 6),
  neuterPast: Word('разнимало', 6),
  pluralPast: Word('разнимали', 6),
  imperativeInformal: Word('разнимай', 6),
  imperativeFormal: Word('разнимайте', 6),
  imperfect: [],
};

perfectVerbs.set(разнимать.name.text, разнимать);

export { разнимать };