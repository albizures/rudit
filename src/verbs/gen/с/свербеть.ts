import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свербеть: PerfectVerb = {
  name: Word('свербеть', 5),
  singular1stPerson: Word('сверблю', 6),
  singular2ndPerson: Word('свербишь', 5),
  singular3rdPerson: Word('свербит', 5),
  plural1stPerson: Word('свербим', 5),
  plural2ndPerson: Word('свербите', 5),
  plural3rdPerson: Word('свербят', 5),
  masculinePast: Word('свербел', 5),
  femininePast: Word('свербела', 5),
  neuterPast: Word('свербело', 5),
  pluralPast: Word('свербели', 5),
  imperativeInformal: Word('сверби', 5),
  imperativeFormal: Word('свербите', 5),
  imperfect: [],
};

perfectVerbs.set(свербеть.name.text, свербеть);

export { свербеть };