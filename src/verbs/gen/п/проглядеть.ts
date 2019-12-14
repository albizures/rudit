import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проглядеть: PerfectVerb = {
  name: Word('проглядеть', 7),
  singular1stPerson: Word('прогляжу', 7),
  singular2ndPerson: Word('проглядишь', 7),
  singular3rdPerson: Word('проглядит', 7),
  plural1stPerson: Word('проглядим', 7),
  plural2ndPerson: Word('проглядите', 7),
  plural3rdPerson: Word('проглядят', 7),
  masculinePast: Word('проглядел', 7),
  femininePast: Word('проглядела', 7),
  neuterPast: Word('проглядело', 7),
  pluralPast: Word('проглядели', 7),
  imperativeInformal: Word('прогляди', 7),
  imperativeFormal: Word('проглядите', 7),
  imperfect: [],
};

perfectVerbs.set(проглядеть.name.text, проглядеть);

export { проглядеть };