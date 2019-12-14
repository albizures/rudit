import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дичиться: PerfectVerb = {
  name: Word('дичиться', 3),
  singular1stPerson: Word('дичусь', 3),
  singular2ndPerson: Word('дичишься', 3),
  singular3rdPerson: Word('дичится', 3),
  plural1stPerson: Word('дичимся', 3),
  plural2ndPerson: Word('дичитесь', 3),
  plural3rdPerson: Word('дичатся', 3),
  masculinePast: Word('дичился', 3),
  femininePast: Word('дичилась', 3),
  neuterPast: Word('дичилось', 3),
  pluralPast: Word('дичились', 3),
  imperativeInformal: Word('дичись', 3),
  imperativeFormal: Word('дичитесь', 3),
  imperfect: [],
};

perfectVerbs.set(дичиться.name.text, дичиться);

export { дичиться };