import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занести: PerfectVerb = {
  name: Word('занести', 6),
  singular1stPerson: Word('занесу', 5),
  singular2ndPerson: Word('занесёшь', 5),
  singular3rdPerson: Word('занесёт', 5),
  plural1stPerson: Word('занесём', 5),
  plural2ndPerson: Word('занесёте', 5),
  plural3rdPerson: Word('занесут', 5),
  masculinePast: Word('занёс', 3),
  femininePast: Word('занесла', 6),
  neuterPast: Word('занесло', 6),
  pluralPast: Word('занесли', 6),
  imperativeInformal: Word('занеси', 5),
  imperativeFormal: Word('занесите', 5),
  imperfect: [],
};

perfectVerbs.set(занести.name.text, занести);

export { занести };