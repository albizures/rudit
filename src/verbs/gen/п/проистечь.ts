import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проистечь: PerfectVerb = {
  name: Word('проистечь', 6),
  singular1stPerson: Word('проистеку', 8),
  singular2ndPerson: Word('проистечёшь', 6),
  singular3rdPerson: Word('проистечёт', 6),
  plural1stPerson: Word('проистечём', 6),
  plural2ndPerson: Word('проистечёте', 6),
  plural3rdPerson: Word('проистекут', 8),
  masculinePast: Word('проистек', 6),
  femininePast: Word('проистекла', 9),
  neuterPast: Word('проистекло', 9),
  pluralPast: Word('проистекли', 9),
  imperativeInformal: Word('проистеки', 8),
  imperativeFormal: Word('проистеките', 8),
  imperfect: [],
};

perfectVerbs.set(проистечь.name.text, проистечь);

export { проистечь };