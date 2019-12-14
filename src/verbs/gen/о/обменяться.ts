import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обменяться: PerfectVerb = {
  name: Word('обменяться', 5),
  singular1stPerson: Word('обменяюсь', 5),
  singular2ndPerson: Word('обменяешься', 5),
  singular3rdPerson: Word('обменяется', 5),
  plural1stPerson: Word('обменяемся', 5),
  plural2ndPerson: Word('обменяетесь', 5),
  plural3rdPerson: Word('обменяются', 5),
  masculinePast: Word('обменялся', 5),
  femininePast: Word('обменялась', 5),
  neuterPast: Word('обменялось', 5),
  pluralPast: Word('обменялись', 5),
  imperativeInformal: Word('обменяйся', 5),
  imperativeFormal: Word('обменяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обменяться.name.text, обменяться);

export { обменяться };