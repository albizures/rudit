import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уползти: PerfectVerb = {
  name: Word('уползти', 6),
  singular1stPerson: Word('уползу', 5),
  singular2ndPerson: Word('уползёшь', 2),
  singular3rdPerson: Word('уползёт', 2),
  plural1stPerson: Word('уползём', 2),
  plural2ndPerson: Word('уползёте', 7),
  plural3rdPerson: Word('уползут', 5),
  masculinePast: Word('уполз', 2),
  femininePast: Word('уползла', 6),
  neuterPast: Word('уползло', 6),
  pluralPast: Word('уползли', 6),
  imperativeInformal: Word('уползи', 5),
  imperativeFormal: Word('уползите', 5),
  imperfect: [],
};

perfectVerbs.set(уползти.name.text, уползти);

export { уползти };