import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ободрать: PerfectVerb = {
  name: Word('ободрать', 5),
  singular1stPerson: Word('обдеру', 5),
  singular2ndPerson: Word('обдерёшь', 3),
  singular3rdPerson: Word('обдерёт', 3),
  plural1stPerson: Word('обдерём', 3),
  plural2ndPerson: Word('обдерёте', 3),
  plural3rdPerson: Word('обдерут', 5),
  masculinePast: Word('ободрал', 5),
  femininePast: Word('ободрала', 7),
  neuterPast: Word('ободрало', 5),
  pluralPast: Word('ободрали', 5),
  imperativeInformal: Word('обдери', 5),
  imperativeFormal: Word('обдерите', 5),
  imperfect: [],
};

perfectVerbs.set(ободрать.name.text, ободрать);

export { ободрать };