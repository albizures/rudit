import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ободрать: PerfectVerb = {
  name: Word('ободрать', 5),
  singular1stPerson: Word('обдеру', 5),
  singular2ndPerson: Word('обдерёшь', 5),
  singular3rdPerson: Word('обдерёт', 5),
  plural1stPerson: Word('обдерём', 5),
  plural2ndPerson: Word('обдерёте', 5),
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