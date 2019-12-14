import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглядеть: PerfectVerb = {
  name: Word('приглядеть', 7),
  singular1stPerson: Word('пригляжу', 7),
  singular2ndPerson: Word('приглядишь', 7),
  singular3rdPerson: Word('приглядит', 7),
  plural1stPerson: Word('приглядим', 7),
  plural2ndPerson: Word('приглядите', 7),
  plural3rdPerson: Word('приглядят', 7),
  masculinePast: Word('приглядел', 7),
  femininePast: Word('приглядела', 7),
  neuterPast: Word('приглядело', 7),
  pluralPast: Word('приглядели', 7),
  imperativeInformal: Word('пригляди', 7),
  imperativeFormal: Word('приглядите', 7),
  imperfect: [],
};

perfectVerbs.set(приглядеть.name.text, приглядеть);

export { приглядеть };