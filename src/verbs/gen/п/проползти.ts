import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проползти: PerfectVerb = {
  name: Word('проползти', 8),
  singular1stPerson: Word('проползу', 7),
  singular2ndPerson: Word('проползёшь', 2),
  singular3rdPerson: Word('проползёт', 2),
  plural1stPerson: Word('проползём', 2),
  plural2ndPerson: Word('проползёте', 9),
  plural3rdPerson: Word('проползут', 7),
  masculinePast: Word('прополз', 4),
  femininePast: Word('проползла', 8),
  neuterPast: Word('проползло', 8),
  pluralPast: Word('проползли', 8),
  imperativeInformal: Word('проползи', 7),
  imperativeFormal: Word('проползите', 7),
  imperfect: [],
};

perfectVerbs.set(проползти.name.text, проползти);

export { проползти };