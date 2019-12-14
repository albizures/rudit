import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкувырнуться: PerfectVerb = {
  name: Word('выкувырнуться', 1),
  singular1stPerson: Word('выкувырнусь', 1),
  singular2ndPerson: Word('выкувырнешься', 1),
  singular3rdPerson: Word('выкувырнется', 1),
  plural1stPerson: Word('выкувырнемся', 1),
  plural2ndPerson: Word('выкувырнетесь', 1),
  plural3rdPerson: Word('выкувырнутся', 1),
  masculinePast: Word('выкувырнулся', 1),
  femininePast: Word('выкувырнулась', 1),
  neuterPast: Word('выкувырнулось', 1),
  pluralPast: Word('выкувырнулись', 1),
  imperativeInformal: Word('выкувырнись', 1),
  imperativeFormal: Word('выкувырнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкувырнуться.name.text, выкувырнуться);

export { выкувырнуться };