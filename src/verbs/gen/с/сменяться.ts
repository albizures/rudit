import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сменяться: PerfectVerb = {
  name: Word('сменяться', 4),
  singular1stPerson: Word('сменяюсь', 4),
  singular2ndPerson: Word('сменяешься', 4),
  singular3rdPerson: Word('сменяется', 4),
  plural1stPerson: Word('сменяемся', 4),
  plural2ndPerson: Word('сменяетесь', 4),
  plural3rdPerson: Word('сменяются', 4),
  masculinePast: Word('сменялся', 4),
  femininePast: Word('сменялась', 4),
  neuterPast: Word('сменялось', 4),
  pluralPast: Word('сменялись', 4),
  imperativeInformal: Word('сменяйся', 4),
  imperativeFormal: Word('сменяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сменяться.name.text, сменяться);

export { сменяться };