import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сволочь: PerfectVerb = {
  name: Word('сволочь', 4),
  singular1stPerson: Word('сволоку', 6),
  singular2ndPerson: Word('сволочёшь', 6),
  singular3rdPerson: Word('сволочёт', 6),
  plural1stPerson: Word('сволочём', 6),
  plural2ndPerson: Word('сволочёте', 6),
  plural3rdPerson: Word('сволокут', 6),
  masculinePast: Word('сволок', 4),
  femininePast: Word('сволокла', 7),
  neuterPast: Word('сволокло', 7),
  pluralPast: Word('сволокли', 7),
  imperativeInformal: Word('сволоки', 6),
  imperativeFormal: Word('сволоките', 6),
  imperfect: ['сволакивать'],
};

perfectVerbs.set(сволочь.name.text, сволочь);

export { сволочь };