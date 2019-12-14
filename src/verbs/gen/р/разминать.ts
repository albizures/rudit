import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разминать: PerfectVerb = {
  name: Word('разминать', 6),
  singular1stPerson: Word('разминаю', 6),
  singular2ndPerson: Word('разминаешь', 6),
  singular3rdPerson: Word('разминает', 6),
  plural1stPerson: Word('разминаем', 6),
  plural2ndPerson: Word('разминаете', 6),
  plural3rdPerson: Word('разминают', 6),
  masculinePast: Word('разминал', 6),
  femininePast: Word('разминала', 6),
  neuterPast: Word('разминало', 6),
  pluralPast: Word('разминали', 6),
  imperativeInformal: Word('разминай', 6),
  imperativeFormal: Word('разминайте', 6),
  imperfect: [],
};

perfectVerbs.set(разминать.name.text, разминать);

export { разминать };