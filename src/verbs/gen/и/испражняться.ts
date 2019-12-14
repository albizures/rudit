import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испражняться: PerfectVerb = {
  name: Word('испражняться', 7),
  singular1stPerson: Word('испражняюсь', 7),
  singular2ndPerson: Word('испражняешься', 7),
  singular3rdPerson: Word('испражняется', 7),
  plural1stPerson: Word('испражняемся', 7),
  plural2ndPerson: Word('испражняетесь', 7),
  plural3rdPerson: Word('испражняются', 7),
  masculinePast: Word('испражнялся', 7),
  femininePast: Word('испражнялась', 7),
  neuterPast: Word('испражнялось', 7),
  pluralPast: Word('испражнялись', 7),
  imperativeInformal: Word('испражняйся', 7),
  imperativeFormal: Word('испражняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(испражняться.name.text, испражняться);

export { испражняться };