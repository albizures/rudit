import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ползти: PerfectVerb = {
  name: Word('ползти', 5),
  singular1stPerson: Word('ползу', 4),
  singular2ndPerson: Word('ползёшь', 1),
  singular3rdPerson: Word('ползёт', 1),
  plural1stPerson: Word('ползём', 1),
  plural2ndPerson: Word('ползёте', 6),
  plural3rdPerson: Word('ползут', 4),
  masculinePast: Word('полз', 1),
  femininePast: Word('ползла', 5),
  neuterPast: Word('ползло', 5),
  pluralPast: Word('ползли', 5),
  imperativeInformal: Word('ползи', 4),
  imperativeFormal: Word('ползите', 4),
  imperfect: ['поползти'],
};

perfectVerbs.set(ползти.name.text, ползти);

export { ползти };