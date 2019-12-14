import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врезаться: PerfectVerb = {
  name: Word('врезаться', 2),
  singular1stPerson: Word('врежусь', 2),
  singular2ndPerson: Word('врежешься', 2),
  singular3rdPerson: Word('врежется', 2),
  plural1stPerson: Word('врежемся', 2),
  plural2ndPerson: Word('врежетесь', 2),
  plural3rdPerson: Word('врежутся', 2),
  masculinePast: Word('врезался', 2),
  femininePast: Word('врезалась', 2),
  neuterPast: Word('врезалось', 2),
  pluralPast: Word('врезались', 2),
  imperativeInformal: Word('врежься', 2),
  imperativeFormal: Word('врежьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(врезаться.name.text, врезаться);

export { врезаться };