import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разинуть: PerfectVerb = {
  name: Word('разинуть', 3),
  singular1stPerson: Word('разину', 3),
  singular2ndPerson: Word('разинешь', 3),
  singular3rdPerson: Word('разинет', 3),
  plural1stPerson: Word('разинем', 3),
  plural2ndPerson: Word('разинете', 3),
  plural3rdPerson: Word('разинут', 3),
  masculinePast: Word('разинул', 3),
  femininePast: Word('разинула', 3),
  neuterPast: Word('разинуло', 3),
  pluralPast: Word('разинули', 3),
  imperativeInformal: Word('разинь', 3),
  imperativeFormal: Word('разиньте', 3),
  imperfect: [],
};

perfectVerbs.set(разинуть.name.text, разинуть);

export { разинуть };