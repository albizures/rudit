import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглядеть: PerfectVerb = {
  name: Word('оглядеть', 5),
  singular1stPerson: Word('огляжу', 5),
  singular2ndPerson: Word('оглядишь', 5),
  singular3rdPerson: Word('оглядит', 5),
  plural1stPerson: Word('оглядим', 5),
  plural2ndPerson: Word('оглядите', 5),
  plural3rdPerson: Word('оглядят', 5),
  masculinePast: Word('оглядел', 5),
  femininePast: Word('оглядела', 5),
  neuterPast: Word('оглядело', 5),
  pluralPast: Word('оглядели', 5),
  imperativeInformal: Word('огляди', 5),
  imperativeFormal: Word('оглядите', 5),
  imperfect: [],
};

perfectVerbs.set(оглядеть.name.text, оглядеть);

export { оглядеть };