import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вторгнуться: PerfectVerb = {
  name: Word('вторгнуться', 2),
  singular1stPerson: Word('вторгнусь', 2),
  singular2ndPerson: Word('вторгнешься', 2),
  singular3rdPerson: Word('вторгнется', 2),
  plural1stPerson: Word('вторгнемся', 2),
  plural2ndPerson: Word('вторгнетесь', 2),
  plural3rdPerson: Word('вторгнутся', 2),
  masculinePast: Word('вторгся,вто'ргнулся', 2),
  femininePast: Word('вторглась,вто'ргнулась', 2),
  neuterPast: Word('вторглось,вто'ргнулось', 2),
  pluralPast: Word('вторглись,вто'ргнулись', 2),
  imperativeInformal: Word('вторгнись', 2),
  imperativeFormal: Word('вторгнитесь', 2),
  imperfect: ['вторгаться'],
};

perfectVerbs.set(вторгнуться.name.text, вторгнуться);

export { вторгнуться };