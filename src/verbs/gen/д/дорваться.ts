import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорваться: PerfectVerb = {
  name: Word('дорваться', 4),
  singular1stPerson: Word('дорвусь', 4),
  singular2ndPerson: Word('дорвёшься', 4),
  singular3rdPerson: Word('дорвётся', 4),
  plural1stPerson: Word('дорвёмся', 4),
  plural2ndPerson: Word('дорвётесь', 4),
  plural3rdPerson: Word('дорвутся', 4),
  masculinePast: Word('дорвался', 4),
  femininePast: Word('дорвалась', 6),
  neuterPast: Word('дорвалось//дорвало'сь', 4),
  pluralPast: Word('дорвались//дорвали'сь', 4),
  imperativeInformal: Word('дорвись', 4),
  imperativeFormal: Word('дорвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(дорваться.name.text, дорваться);

export { дорваться };