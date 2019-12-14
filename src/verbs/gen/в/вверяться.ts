import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вверяться: PerfectVerb = {
  name: Word('вверяться', 4),
  singular1stPerson: Word('вверяюсь', 4),
  singular2ndPerson: Word('вверяешься', 4),
  singular3rdPerson: Word('вверяется', 4),
  plural1stPerson: Word('вверяемся', 4),
  plural2ndPerson: Word('вверяетесь', 4),
  plural3rdPerson: Word('вверяются', 4),
  masculinePast: Word('вверялся', 4),
  femininePast: Word('вверялась', 4),
  neuterPast: Word('вверялось', 4),
  pluralPast: Word('вверялись', 4),
  imperativeInformal: Word('вверяйся', 4),
  imperativeFormal: Word('вверяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вверяться.name.text, вверяться);

export { вверяться };