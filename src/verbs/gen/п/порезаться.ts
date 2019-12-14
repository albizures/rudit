import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порезаться: PerfectVerb = {
  name: Word('порезаться', 3),
  singular1stPerson: Word('порежусь', 3),
  singular2ndPerson: Word('порежешься', 3),
  singular3rdPerson: Word('порежется', 3),
  plural1stPerson: Word('порежемся', 3),
  plural2ndPerson: Word('порежетесь', 3),
  plural3rdPerson: Word('порежутся', 3),
  masculinePast: Word('порезался', 3),
  femininePast: Word('порезалась', 3),
  neuterPast: Word('порезалось', 3),
  pluralPast: Word('порезались', 3),
  imperativeInformal: Word('порежься', 3),
  imperativeFormal: Word('порежьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(порезаться.name.text, порезаться);

export { порезаться };