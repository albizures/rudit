import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгнуться: PerfectVerb = {
  name: Word('выгнуться', 1),
  singular1stPerson: Word('выгнусь', 1),
  singular2ndPerson: Word('выгнешься', 1),
  singular3rdPerson: Word('выгнется', 1),
  plural1stPerson: Word('выгнемся', 1),
  plural2ndPerson: Word('выгнетесь', 1),
  plural3rdPerson: Word('выгнутся', 1),
  masculinePast: Word('выгнулся', 1),
  femininePast: Word('выгнулась', 1),
  neuterPast: Word('выгнулось', 1),
  pluralPast: Word('выгнулись', 1),
  imperativeInformal: Word('выгнись', 1),
  imperativeFormal: Word('выгнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выгнуться.name.text, выгнуться);

export { выгнуться };