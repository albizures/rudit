import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарезаться: PerfectVerb = {
  name: Word('зарезаться', 3),
  singular1stPerson: Word('зарежусь', 3),
  singular2ndPerson: Word('зарежешься', 3),
  singular3rdPerson: Word('зарежется', 3),
  plural1stPerson: Word('зарежемся', 3),
  plural2ndPerson: Word('зарежетесь', 3),
  plural3rdPerson: Word('зарежутся', 3),
  masculinePast: Word('зарезался', 3),
  femininePast: Word('зарезалась', 3),
  neuterPast: Word('зарезалось', 3),
  pluralPast: Word('зарезались', 3),
  imperativeInformal: Word('зарежься', 3),
  imperativeFormal: Word('зарежьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(зарезаться.name.text, зарезаться);

export { зарезаться };