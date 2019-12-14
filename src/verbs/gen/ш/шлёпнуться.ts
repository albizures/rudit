import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпнуться: PerfectVerb = {
  name: Word('шлёпнуться', 9),
  singular1stPerson: Word('шлёпнусь', 5),
  singular2ndPerson: Word('шлёпнешься', 5),
  singular3rdPerson: Word('шлёпнется', 5),
  plural1stPerson: Word('шлёпнемся', 5),
  plural2ndPerson: Word('шлёпнетесь', 5),
  plural3rdPerson: Word('шлёпнутся', 8),
  masculinePast: Word('шлёпнулся', 8),
  femininePast: Word('шлёпнулась', 7),
  neuterPast: Word('шлёпнулось', 7),
  pluralPast: Word('шлёпнулись', 7),
  imperativeInformal: Word('шлёпнись', 5),
  imperativeFormal: Word('шлёпнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(шлёпнуться.name.text, шлёпнуться);

export { шлёпнуться };