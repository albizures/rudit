import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проклюнуться: PerfectVerb = {
  name: Word('проклюнуться', 5),
  singular1stPerson: Word('проклюнусь', 5),
  singular2ndPerson: Word('проклюнешься', 5),
  singular3rdPerson: Word('проклюнется', 5),
  plural1stPerson: Word('проклюнемся', 5),
  plural2ndPerson: Word('проклюнетесь', 5),
  plural3rdPerson: Word('проклюнутся', 5),
  masculinePast: Word('проклюнулся', 5),
  femininePast: Word('проклюнулась', 5),
  neuterPast: Word('проклюнулось', 5),
  pluralPast: Word('проклюнулись', 5),
  imperativeInformal: Word('проклюнься', 5),
  imperativeFormal: Word('проклюньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(проклюнуться.name.text, проклюнуться);

export { проклюнуться };