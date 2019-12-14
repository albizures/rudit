import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъехаться: PerfectVerb = {
  name: Word('разъехаться', 4),
  singular1stPerson: Word('разъедусь', 4),
  singular2ndPerson: Word('разъедешься', 4),
  singular3rdPerson: Word('разъедется', 4),
  plural1stPerson: Word('разъедемся', 4),
  plural2ndPerson: Word('разъедетесь', 4),
  plural3rdPerson: Word('разъедутся', 4),
  masculinePast: Word('разъехался', 4),
  femininePast: Word('разъехалась', 4),
  neuterPast: Word('разъехалось', 4),
  pluralPast: Word('разъехались', 4),
  imperativeInformal: Word('-ся', 2),
  imperativeFormal: Word('-ся', 2),
  imperfect: [],
};

perfectVerbs.set(разъехаться.name.text, разъехаться);

export { разъехаться };