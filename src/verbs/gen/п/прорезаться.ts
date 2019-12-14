import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорезаться: PerfectVerb = {
  name: Word('прорезаться', 4),
  singular1stPerson: Word('прорежусь', 4),
  singular2ndPerson: Word('прорежешься', 4),
  singular3rdPerson: Word('прорежется', 4),
  plural1stPerson: Word('прорежемся', 4),
  plural2ndPerson: Word('прорежетесь', 4),
  plural3rdPerson: Word('прорежутся', 4),
  masculinePast: Word('прорезался', 4),
  femininePast: Word('прорезалась', 4),
  neuterPast: Word('прорезалось', 4),
  pluralPast: Word('прорезались', 4),
  imperativeInformal: Word('прорежься', 4),
  imperativeFormal: Word('прорежьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прорезаться.name.text, прорезаться);

export { прорезаться };