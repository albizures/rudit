import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const даться: PerfectVerb = {
  name: Word('даться', 1),
  singular1stPerson: Word('дамся', 1),
  singular2ndPerson: Word('дашься', 1),
  singular3rdPerson: Word('дастся', 1),
  plural1stPerson: Word('дадимся', 3),
  plural2ndPerson: Word('дадитесь', 3),
  plural3rdPerson: Word('дадутся', 3),
  masculinePast: Word('дался', 1),
  femininePast: Word('далась', 3),
  neuterPast: Word('далось//дало'сь', 1),
  pluralPast: Word('дались//дали'сь', 1),
  imperativeInformal: Word('дайся', 1),
  imperativeFormal: Word('дайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(даться.name.text, даться);

export { даться };