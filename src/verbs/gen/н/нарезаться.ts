import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарезаться: PerfectVerb = {
  name: Word('нарезаться', 3),
  singular1stPerson: Word('нарежусь', 3),
  singular2ndPerson: Word('нарежешься', 3),
  singular3rdPerson: Word('нарежется', 3),
  plural1stPerson: Word('нарежемся', 3),
  plural2ndPerson: Word('нарежетесь', 3),
  plural3rdPerson: Word('нарежутся', 3),
  masculinePast: Word('нарезался', 3),
  femininePast: Word('нарезалась', 3),
  neuterPast: Word('нарезалось', 3),
  pluralPast: Word('нарезались', 3),
  imperativeInformal: Word('нарежься', 3),
  imperativeFormal: Word('нарежьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нарезаться.name.text, нарезаться);

export { нарезаться };