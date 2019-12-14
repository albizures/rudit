import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const куснуть: PerfectVerb = {
  name: Word('куснуть', 4),
  singular1stPerson: Word('кусну', 4),
  singular2ndPerson: Word('куснёшь', 4),
  singular3rdPerson: Word('куснёт', 4),
  plural1stPerson: Word('куснём', 4),
  plural2ndPerson: Word('куснёте', 4),
  plural3rdPerson: Word('куснут', 4),
  masculinePast: Word('куснул', 4),
  femininePast: Word('куснула', 4),
  neuterPast: Word('куснуло', 4),
  pluralPast: Word('куснули', 4),
  imperativeInformal: Word('кусни', 4),
  imperativeFormal: Word('кусните', 4),
  imperfect: [],
};

perfectVerbs.set(куснуть.name.text, куснуть);

export { куснуть };