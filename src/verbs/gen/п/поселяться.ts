import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поселяться: PerfectVerb = {
  name: Word('поселяться', 5),
  singular1stPerson: Word('поселяюсь', 5),
  singular2ndPerson: Word('поселяешься', 5),
  singular3rdPerson: Word('поселяется', 5),
  plural1stPerson: Word('поселяемся', 5),
  plural2ndPerson: Word('поселяетесь', 5),
  plural3rdPerson: Word('поселяются', 5),
  masculinePast: Word('поселялся', 5),
  femininePast: Word('поселялась', 5),
  neuterPast: Word('поселялось', 5),
  pluralPast: Word('поселялись', 5),
  imperativeInformal: Word('поселяйся', 5),
  imperativeFormal: Word('поселяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поселяться.name.text, поселяться);

export { поселяться };