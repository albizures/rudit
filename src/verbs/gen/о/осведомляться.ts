import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осведомляться: PerfectVerb = {
  name: Word('осведомляться', 8),
  singular1stPerson: Word('осведомляюсь', 8),
  singular2ndPerson: Word('осведомляешься', 8),
  singular3rdPerson: Word('осведомляется', 8),
  plural1stPerson: Word('осведомляемся', 8),
  plural2ndPerson: Word('осведомляетесь', 8),
  plural3rdPerson: Word('осведомляются', 8),
  masculinePast: Word('осведомлялся', 8),
  femininePast: Word('осведомлялась', 8),
  neuterPast: Word('осведомлялось', 8),
  pluralPast: Word('осведомлялись', 8),
  imperativeInformal: Word('осведомляйся', 8),
  imperativeFormal: Word('осведомляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(осведомляться.name.text, осведомляться);

export { осведомляться };