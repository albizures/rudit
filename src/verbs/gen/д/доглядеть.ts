import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доглядеть: PerfectVerb = {
  name: Word('доглядеть', 6),
  singular1stPerson: Word('догляжу', 6),
  singular2ndPerson: Word('доглядишь', 6),
  singular3rdPerson: Word('доглядит', 6),
  plural1stPerson: Word('доглядим', 6),
  plural2ndPerson: Word('доглядите', 6),
  plural3rdPerson: Word('доглядят', 6),
  masculinePast: Word('доглядел', 6),
  femininePast: Word('доглядела', 6),
  neuterPast: Word('доглядело', 6),
  pluralPast: Word('доглядели', 6),
  imperativeInformal: Word('догляди', 6),
  imperativeFormal: Word('доглядите', 6),
  imperfect: [],
};

perfectVerbs.set(доглядеть.name.text, доглядеть);

export { доглядеть };