import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разобрать: PerfectVerb = {
  name: Word('разобрать', 6),
  singular1stPerson: Word('разберу', 6),
  singular2ndPerson: Word('разберёшь', 1),
  singular3rdPerson: Word('разберёт', 1),
  plural1stPerson: Word('разберём', 1),
  plural2ndPerson: Word('разберёте', 1),
  plural3rdPerson: Word('разберут', 6),
  masculinePast: Word('разобрал', 6),
  femininePast: Word('разобрала', 8),
  neuterPast: Word('разобрало', 6),
  pluralPast: Word('разобрали', 6),
  imperativeInformal: Word('разбери', 6),
  imperativeFormal: Word('разберите', 6),
  imperfect: [],
};

perfectVerbs.set(разобрать.name.text, разобрать);

export { разобрать };