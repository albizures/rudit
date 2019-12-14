import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чокнуться: PerfectVerb = {
  name: Word('чокнуться', 1),
  singular1stPerson: Word('чокнусь', 1),
  singular2ndPerson: Word('чокнешься', 1),
  singular3rdPerson: Word('чокнется', 1),
  plural1stPerson: Word('чокнемся', 1),
  plural2ndPerson: Word('чокнетесь', 1),
  plural3rdPerson: Word('чокнутся', 1),
  masculinePast: Word('чокнулся', 1),
  femininePast: Word('чокнулась', 1),
  neuterPast: Word('чокнулось', 1),
  pluralPast: Word('чокнулись', 1),
  imperativeInformal: Word('чокнись', 1),
  imperativeFormal: Word('чокнитесь', 1),
  imperfect: ['чокаться'],
};

perfectVerbs.set(чокнуться.name.text, чокнуться);

export { чокнуться };