import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похудеть: PerfectVerb = {
  name: Word('похудеть', 5),
  singular1stPerson: Word('похудею', 5),
  singular2ndPerson: Word('похудеешь', 5),
  singular3rdPerson: Word('похудеет', 5),
  plural1stPerson: Word('похудеем', 5),
  plural2ndPerson: Word('похудеете', 5),
  plural3rdPerson: Word('похудеют', 5),
  masculinePast: Word('похудел', 5),
  femininePast: Word('похудела', 5),
  neuterPast: Word('похудело', 5),
  pluralPast: Word('похудели', 5),
  imperativeInformal: Word('похудей', 5),
  imperativeFormal: Word('похудейте', 5),
  imperfect: [],
};

perfectVerbs.set(похудеть.name.text, похудеть);

export { похудеть };