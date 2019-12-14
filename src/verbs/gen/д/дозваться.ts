import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дозваться: PerfectVerb = {
  name: Word('дозваться', 4),
  singular1stPerson: Word('дозовусь', 1),
  singular2ndPerson: Word('дозовешься', 5),
  singular3rdPerson: Word('дозовется', 5),
  plural1stPerson: Word('дозовемся', 5),
  plural2ndPerson: Word('дозоветесь', 5),
  plural3rdPerson: Word('дозовутся', 1),
  masculinePast: Word('дозвался', 4),
  femininePast: Word('дозвалась', 4),
  neuterPast: Word('дозвалось', 4),
  pluralPast: Word('дозвались', 4),
  imperativeInformal: Word('дозовься', 1),
  imperativeFormal: Word('дозовьтесь', 7),
  imperfect: [],
};

perfectVerbs.set(дозваться.name.text, дозваться);

export { дозваться };