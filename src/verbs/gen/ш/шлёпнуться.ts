import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпнуться: PerfectVerb = {
  name: Word('шлёпнуться', 2),
  singular1stPerson: Word('шлёпнусь', 2),
  singular2ndPerson: Word('шлёпнешься', 2),
  singular3rdPerson: Word('шлёпнется', 2),
  plural1stPerson: Word('шлёпнемся', 2),
  plural2ndPerson: Word('шлёпнетесь', 2),
  plural3rdPerson: Word('шлёпнутся', 2),
  masculinePast: Word('шлёпнулся', 2),
  femininePast: Word('шлёпнулась', 2),
  neuterPast: Word('шлёпнулось', 2),
  pluralPast: Word('шлёпнулись', 2),
  imperativeInformal: Word('шлёпнись', 2),
  imperativeFormal: Word('шлёпнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(шлёпнуться.name.text, шлёпнуться);

export { шлёпнуться };