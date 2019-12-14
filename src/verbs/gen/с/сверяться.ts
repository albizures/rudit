import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сверяться: PerfectVerb = {
  name: Word('сверяться', 4),
  singular1stPerson: Word('сверяюсь', 4),
  singular2ndPerson: Word('сверяешься', 4),
  singular3rdPerson: Word('сверяется', 4),
  plural1stPerson: Word('сверяемся', 4),
  plural2ndPerson: Word('сверяетесь', 4),
  plural3rdPerson: Word('сверяются', 4),
  masculinePast: Word('сверялся', 4),
  femininePast: Word('сверялась', 4),
  neuterPast: Word('сверялось', 4),
  pluralPast: Word('сверялись', 4),
  imperativeInformal: Word('сверяйся', 4),
  imperativeFormal: Word('сверяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сверяться.name.text, сверяться);

export { сверяться };