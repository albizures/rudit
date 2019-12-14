import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свирепеть: PerfectVerb = {
  name: Word('свирепеть', 6),
  singular1stPerson: Word('свирепею', 6),
  singular2ndPerson: Word('свирепеешь', 6),
  singular3rdPerson: Word('свирепеет', 6),
  plural1stPerson: Word('свирепеем', 6),
  plural2ndPerson: Word('свирепеете', 6),
  plural3rdPerson: Word('свирепеют', 6),
  masculinePast: Word('свирепел', 6),
  femininePast: Word('свирепела', 6),
  neuterPast: Word('свирепело', 6),
  pluralPast: Word('свирепели', 6),
  imperativeInformal: Word('свирепей', 6),
  imperativeFormal: Word('свирепейте', 6),
  imperfect: ['рассвирепеть'],
};

perfectVerbs.set(свирепеть.name.text, свирепеть);

export { свирепеть };