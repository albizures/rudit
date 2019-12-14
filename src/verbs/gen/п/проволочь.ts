import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проволочь: PerfectVerb = {
  name: Word('проволочь', 6),
  singular1stPerson: Word('проволоку', 8),
  singular2ndPerson: Word('проволочёшь', 8),
  singular3rdPerson: Word('проволочёт', 8),
  plural1stPerson: Word('проволочём', 8),
  plural2ndPerson: Word('проволочёте', 8),
  plural3rdPerson: Word('проволокут', 8),
  masculinePast: Word('проволок', 6),
  femininePast: Word('проволокла', 9),
  neuterPast: Word('проволокло', 9),
  pluralPast: Word('проволокли', 9),
  imperativeInformal: Word('проволоки', 8),
  imperativeFormal: Word('проволоките', 8),
  imperfect: [],
};

perfectVerbs.set(проволочь.name.text, проволочь);

export { проволочь };