import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выискаться: PerfectVerb = {
  name: Word('выискаться', 1),
  singular1stPerson: Word('выищусь', 1),
  singular2ndPerson: Word('выищешься', 1),
  singular3rdPerson: Word('выищется', 1),
  plural1stPerson: Word('выищемся', 1),
  plural2ndPerson: Word('выищетесь', 1),
  plural3rdPerson: Word('выищутся', 1),
  masculinePast: Word('выискался', 1),
  femininePast: Word('выискалась', 1),
  neuterPast: Word('выискалось', 1),
  pluralPast: Word('выискались', 1),
  imperativeInformal: Word('выищись', 1),
  imperativeFormal: Word('выищитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выискаться.name.text, выискаться);

export { выискаться };