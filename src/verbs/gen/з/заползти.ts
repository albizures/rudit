import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заползти: PerfectVerb = {
  name: Word('заползти', 7),
  singular1stPerson: Word('заползу', 6),
  singular2ndPerson: Word('заползёшь', 1),
  singular3rdPerson: Word('заползёт', 1),
  plural1stPerson: Word('заползём', 1),
  plural2ndPerson: Word('заползёте', 1),
  plural3rdPerson: Word('заползут', 6),
  masculinePast: Word('заполз', 3),
  femininePast: Word('заползла', 7),
  neuterPast: Word('заползло', 7),
  pluralPast: Word('заползли', 7),
  imperativeInformal: Word('заползи', 6),
  imperativeFormal: Word('заползите', 6),
  imperfect: [],
};

perfectVerbs.set(заползти.name.text, заползти);

export { заползти };