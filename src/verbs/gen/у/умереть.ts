import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умереть: PerfectVerb = {
  name: Word('умереть', 4),
  singular1stPerson: Word('умру', 3),
  singular2ndPerson: Word('умрёшь', 0),
  singular3rdPerson: Word('умрёт', 0),
  plural1stPerson: Word('умрём', 0),
  plural2ndPerson: Word('умрёте', 5),
  plural3rdPerson: Word('умрут', 3),
  masculinePast: Word('умер', 0),
  femininePast: Word('умерла', 0),
  neuterPast: Word('умерло', 0),
  pluralPast: Word('умерли', 0),
  imperativeInformal: Word('умри', 3),
  imperativeFormal: Word('умрите', 3),
  imperfect: ['умирать'],
};

perfectVerbs.set(умереть.name.text, умереть);

export { умереть };