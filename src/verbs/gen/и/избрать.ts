import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избрать: PerfectVerb = {
  name: Word('избрать', 4),
  singular1stPerson: Word('изберу', 5),
  singular2ndPerson: Word('изберёшь', 3),
  singular3rdPerson: Word('изберёт', 3),
  plural1stPerson: Word('изберём', 3),
  plural2ndPerson: Word('изберёте', 3),
  plural3rdPerson: Word('изберут', 5),
  masculinePast: Word('избрал', 4),
  femininePast: Word('избрала', 4),
  neuterPast: Word('избрало', 4),
  pluralPast: Word('избрали', 4),
  imperativeInformal: Word('избери', 5),
  imperativeFormal: Word('изберите', 5),
  imperfect: ['избирать'],
};

perfectVerbs.set(избрать.name.text, избрать);

export { избрать };