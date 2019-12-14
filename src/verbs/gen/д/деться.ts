import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деться: PerfectVerb = {
  name: Word('деться', 1),
  singular1stPerson: Word('денусь', 1),
  singular2ndPerson: Word('денешься', 1),
  singular3rdPerson: Word('денется', 1),
  plural1stPerson: Word('денемся', 1),
  plural2ndPerson: Word('денетесь', 1),
  plural3rdPerson: Word('денутся', 1),
  masculinePast: Word('делся', 1),
  femininePast: Word('делась', 1),
  neuterPast: Word('делось', 1),
  pluralPast: Word('делись', 1),
  imperativeInformal: Word('денься', 1),
  imperativeFormal: Word('деньтесь', 1),
  imperfect: [],
};

perfectVerbs.set(деться.name.text, деться);

export { деться };