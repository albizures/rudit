import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const углядеть: PerfectVerb = {
  name: Word('углядеть', 5),
  singular1stPerson: Word('угляжу', 5),
  singular2ndPerson: Word('углядишь', 5),
  singular3rdPerson: Word('углядит', 5),
  plural1stPerson: Word('углядим', 5),
  plural2ndPerson: Word('углядите', 5),
  plural3rdPerson: Word('углядят', 5),
  masculinePast: Word('углядел', 5),
  femininePast: Word('углядела', 5),
  neuterPast: Word('углядело', 5),
  pluralPast: Word('углядели', 5),
  imperativeInformal: Word('угляди', 5),
  imperativeFormal: Word('углядите', 5),
  imperfect: [],
};

perfectVerbs.set(углядеть.name.text, углядеть);

export { углядеть };