import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отодрать: PerfectVerb = {
  name: Word('отодрать', 5),
  singular1stPerson: Word('отдеру', 5),
  singular2ndPerson: Word('отдерёшь', 3),
  singular3rdPerson: Word('отдерёт', 3),
  plural1stPerson: Word('отдерём', 3),
  plural2ndPerson: Word('отдерёте', 3),
  plural3rdPerson: Word('отдерут', 5),
  masculinePast: Word('отодрал', 5),
  femininePast: Word('отодрала', 7),
  neuterPast: Word('отодрало', 5),
  pluralPast: Word('отодрали', 5),
  imperativeInformal: Word('отдери', 5),
  imperativeFormal: Word('отдерите', 5),
  imperfect: [],
};

perfectVerbs.set(отодрать.name.text, отодрать);

export { отодрать };