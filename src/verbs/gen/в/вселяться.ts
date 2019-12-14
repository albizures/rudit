import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вселяться: PerfectVerb = {
  name: Word('вселяться', 4),
  singular1stPerson: Word('вселяюсь', 4),
  singular2ndPerson: Word('вселяешься', 4),
  singular3rdPerson: Word('вселяется', 4),
  plural1stPerson: Word('вселяемся', 4),
  plural2ndPerson: Word('вселяетесь', 4),
  plural3rdPerson: Word('вселяются', 4),
  masculinePast: Word('вселялся', 4),
  femininePast: Word('вселялась', 4),
  neuterPast: Word('вселялось', 4),
  pluralPast: Word('вселялись', 4),
  imperativeInformal: Word('вселяйся', 4),
  imperativeFormal: Word('вселяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вселяться.name.text, вселяться);

export { вселяться };