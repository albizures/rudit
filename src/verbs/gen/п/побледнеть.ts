import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побледнеть: PerfectVerb = {
  name: Word('побледнеть', 7),
  singular1stPerson: Word('побледнею', 7),
  singular2ndPerson: Word('побледнеешь', 7),
  singular3rdPerson: Word('побледнеет', 7),
  plural1stPerson: Word('побледнеем', 7),
  plural2ndPerson: Word('побледнеете', 7),
  plural3rdPerson: Word('побледнеют', 7),
  masculinePast: Word('побледнел', 7),
  femininePast: Word('побледнела', 7),
  neuterPast: Word('побледнело', 7),
  pluralPast: Word('побледнели', 7),
  imperativeInformal: Word('побледней', 7),
  imperativeFormal: Word('побледнейте', 7),
  imperfect: ['бледнеть'],
};

perfectVerbs.set(побледнеть.name.text, побледнеть);

export { побледнеть };