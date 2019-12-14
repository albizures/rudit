import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обобрать: PerfectVerb = {
  name: Word('обобрать', 5),
  singular1stPerson: Word('оберу', 4),
  singular2ndPerson: Word('оберёшь', 2),
  singular3rdPerson: Word('оберёт', 2),
  plural1stPerson: Word('оберём', 2),
  plural2ndPerson: Word('оберёте', 2),
  plural3rdPerson: Word('оберут', 4),
  masculinePast: Word('обобрал', 5),
  femininePast: Word('обобрала', 7),
  neuterPast: Word('обобрало', 5),
  pluralPast: Word('обобрали', 5),
  imperativeInformal: Word('обери', 4),
  imperativeFormal: Word('оберите', 4),
  imperfect: [],
};

perfectVerbs.set(обобрать.name.text, обобрать);

export { обобрать };