import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const собрать: PerfectVerb = {
  name: Word('собрать', 4),
  singular1stPerson: Word('соберу', 5),
  singular2ndPerson: Word('соберёшь', 3),
  singular3rdPerson: Word('соберёт', 3),
  plural1stPerson: Word('соберём', 3),
  plural2ndPerson: Word('соберёте', 3),
  plural3rdPerson: Word('соберут', 5),
  masculinePast: Word('собрал', 4),
  femininePast: Word('собрала', 6),
  neuterPast: Word('собрало', 4),
  pluralPast: Word('собрали', 4),
  imperativeInformal: Word('собери', 5),
  imperativeFormal: Word('соберите', 5),
  imperfect: ['собирать'],
};

perfectVerbs.set(собрать.name.text, собрать);

export { собрать };