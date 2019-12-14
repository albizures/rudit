import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглядеть: PerfectVerb = {
  name: Word('поглядеть', 6),
  singular1stPerson: Word('погляжу', 6),
  singular2ndPerson: Word('поглядишь', 6),
  singular3rdPerson: Word('поглядит', 6),
  plural1stPerson: Word('поглядим', 6),
  plural2ndPerson: Word('поглядите', 6),
  plural3rdPerson: Word('поглядят', 6),
  masculinePast: Word('поглядел', 6),
  femininePast: Word('поглядела', 6),
  neuterPast: Word('поглядело', 6),
  pluralPast: Word('поглядели', 6),
  imperativeInformal: Word('погляди', 6),
  imperativeFormal: Word('поглядите', 6),
  imperfect: ['глядеть'],
};

perfectVerbs.set(поглядеть.name.text, поглядеть);

export { поглядеть };