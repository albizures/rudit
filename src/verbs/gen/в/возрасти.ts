import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возрасти: PerfectVerb = {
  name: Word('возрасти', 7),
  singular1stPerson: Word('возросту', 7),
  singular2ndPerson: Word('возростёшь', 1),
  singular3rdPerson: Word('возростёт', 1),
  plural1stPerson: Word('возростём', 1),
  plural2ndPerson: Word('возростёте', 9),
  plural3rdPerson: Word('возростут', 7),
  masculinePast: Word('возрос', 4),
  femininePast: Word('возросла', 7),
  neuterPast: Word('возросло', 7),
  pluralPast: Word('возросли', 7),
  imperativeInformal: Word('возрости', 7),
  imperativeFormal: Word('возростите', 7),
  imperfect: ['возрастать'],
};

perfectVerbs.set(возрасти.name.text, возрасти);

export { возрасти };