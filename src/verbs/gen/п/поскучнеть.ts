import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскучнеть: PerfectVerb = {
  name: Word('поскучнеть', 7),
  singular1stPerson: Word('поскучнею', 7),
  singular2ndPerson: Word('поскучнеешь', 7),
  singular3rdPerson: Word('поскучнеет', 7),
  plural1stPerson: Word('поскучнеем', 7),
  plural2ndPerson: Word('поскучнеете', 7),
  plural3rdPerson: Word('поскучнеют', 7),
  masculinePast: Word('поскучнел', 7),
  femininePast: Word('поскучнела', 7),
  neuterPast: Word('поскучнело', 7),
  pluralPast: Word('поскучнели', 7),
  imperativeInformal: Word('поскучней', 7),
  imperativeFormal: Word('поскучнейте', 7),
  imperfect: [],
};

perfectVerbs.set(поскучнеть.name.text, поскучнеть);

export { поскучнеть };