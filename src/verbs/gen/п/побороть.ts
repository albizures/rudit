import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побороть: PerfectVerb = {
  name: Word('побороть', 5),
  singular1stPerson: Word('поборю', 5),
  singular2ndPerson: Word('поборешь', 3),
  singular3rdPerson: Word('поборет', 3),
  plural1stPerson: Word('поборем', 3),
  plural2ndPerson: Word('поборете', 3),
  plural3rdPerson: Word('поборют', 3),
  masculinePast: Word('поборол', 5),
  femininePast: Word('поборола', 5),
  neuterPast: Word('побороло', 5),
  pluralPast: Word('побороли', 5),
  imperativeInformal: Word('побори', 5),
  imperativeFormal: Word('поборите', 5),
  imperfect: [],
};

perfectVerbs.set(побороть.name.text, побороть);

export { побороть };