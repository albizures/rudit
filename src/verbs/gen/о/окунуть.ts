import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окунуть: PerfectVerb = {
  name: Word('окунуть', 4),
  singular1stPerson: Word('окуну', 4),
  singular2ndPerson: Word('окунёшь', 0),
  singular3rdPerson: Word('окунёт', 0),
  plural1stPerson: Word('окунём', 0),
  plural2ndPerson: Word('окунёте', 6),
  plural3rdPerson: Word('окунут', 4),
  masculinePast: Word('окунул', 4),
  femininePast: Word('окунула', 4),
  neuterPast: Word('окунуло', 4),
  pluralPast: Word('окунули', 4),
  imperativeInformal: Word('окуни', 4),
  imperativeFormal: Word('окуните', 4),
  imperfect: [],
};

perfectVerbs.set(окунуть.name.text, окунуть);

export { окунуть };