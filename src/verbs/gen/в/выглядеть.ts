import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выглядеть: PerfectVerb = {
  name: Word('выглядеть', 1),
  singular1stPerson: Word('выгляжу', 1),
  singular2ndPerson: Word('выглядишь', 1),
  singular3rdPerson: Word('выглядит', 1),
  plural1stPerson: Word('выглядим', 1),
  plural2ndPerson: Word('выглядите', 1),
  plural3rdPerson: Word('выглядят', 1),
  masculinePast: Word('выглядел', 1),
  femininePast: Word('выглядела', 1),
  neuterPast: Word('выглядело', 1),
  pluralPast: Word('выглядели', 1),
  imperativeInformal: Word('выгляди', 1),
  imperativeFormal: Word('выглядите', 1),
  imperfect: [],
};

perfectVerbs.set(выглядеть.name.text, выглядеть);

export { выглядеть };