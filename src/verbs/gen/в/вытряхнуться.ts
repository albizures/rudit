import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытряхнуться: PerfectVerb = {
  name: Word('вытряхнуться', 1),
  singular1stPerson: Word('вытряхнусь', 1),
  singular2ndPerson: Word('вытряхнешься', 1),
  singular3rdPerson: Word('вытряхнется', 1),
  plural1stPerson: Word('вытряхнемся', 1),
  plural2ndPerson: Word('вытряхнетесь', 1),
  plural3rdPerson: Word('вытряхнутся', 1),
  masculinePast: Word('вытряхнулся', 1),
  femininePast: Word('вытряхнулась', 1),
  neuterPast: Word('вытряхнулось', 1),
  pluralPast: Word('вытряхнулись', 1),
  imperativeInformal: Word('вытряхнись', 1),
  imperativeFormal: Word('вытряхнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вытряхнуться.name.text, вытряхнуться);

export { вытряхнуться };