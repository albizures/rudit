import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обглядеть: PerfectVerb = {
  name: Word('обглядеть', 6),
  singular1stPerson: Word('обгляжу', 6),
  singular2ndPerson: Word('обглядишь', 6),
  singular3rdPerson: Word('обглядит', 6),
  plural1stPerson: Word('обглядим', 6),
  plural2ndPerson: Word('обглядите', 6),
  plural3rdPerson: Word('обглядят', 6),
  masculinePast: Word('обглядел', 6),
  femininePast: Word('обглядела', 6),
  neuterPast: Word('обглядело', 6),
  pluralPast: Word('обглядели', 6),
  imperativeInformal: Word('обгляди', 6),
  imperativeFormal: Word('обглядите', 6),
  imperfect: [],
};

perfectVerbs.set(обглядеть.name.text, обглядеть);

export { обглядеть };