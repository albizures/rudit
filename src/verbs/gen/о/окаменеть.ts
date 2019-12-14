import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окаменеть: PerfectVerb = {
  name: Word('окаменеть', 6),
  singular1stPerson: Word('окаменею', 6),
  singular2ndPerson: Word('окаменеешь', 6),
  singular3rdPerson: Word('окаменеет', 6),
  plural1stPerson: Word('окаменеем', 6),
  plural2ndPerson: Word('окаменеете', 6),
  plural3rdPerson: Word('окаменеют', 6),
  masculinePast: Word('окаменел', 6),
  femininePast: Word('окаменела', 6),
  neuterPast: Word('окаменело', 6),
  pluralPast: Word('окаменели', 6),
  imperativeInformal: Word('окаменей', 6),
  imperativeFormal: Word('окаменейте', 6),
  imperfect: [],
};

perfectVerbs.set(окаменеть.name.text, окаменеть);

export { окаменеть };