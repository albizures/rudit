import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стукнуться: PerfectVerb = {
  name: Word('стукнуться', 2),
  singular1stPerson: Word('стукнусь', 2),
  singular2ndPerson: Word('стукнешься', 2),
  singular3rdPerson: Word('стукнется', 2),
  plural1stPerson: Word('стукнемся', 2),
  plural2ndPerson: Word('стукнетесь', 2),
  plural3rdPerson: Word('стукнутся', 2),
  masculinePast: Word('стукнулся', 2),
  femininePast: Word('стукнулась', 2),
  neuterPast: Word('стукнулось', 2),
  pluralPast: Word('стукнулись', 2),
  imperativeInformal: Word('стукнись', 2),
  imperativeFormal: Word('стукнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(стукнуться.name.text, стукнуться);

export { стукнуться };