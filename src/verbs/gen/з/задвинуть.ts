import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задвинуть: PerfectVerb = {
  name: Word('задвинуть', 4),
  singular1stPerson: Word('задвину', 4),
  singular2ndPerson: Word('задвинешь', 4),
  singular3rdPerson: Word('задвинет', 4),
  plural1stPerson: Word('задвинем', 4),
  plural2ndPerson: Word('задвинете', 4),
  plural3rdPerson: Word('задвинут', 4),
  masculinePast: Word('задвинул', 4),
  femininePast: Word('задвинула', 4),
  neuterPast: Word('задвинуло', 4),
  pluralPast: Word('задвинули', 4),
  imperativeInformal: Word('задвинь', 4),
  imperativeFormal: Word('задвиньте', 4),
  imperfect: [],
};

perfectVerbs.set(задвинуть.name.text, задвинуть);

export { задвинуть };