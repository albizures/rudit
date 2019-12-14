import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const краситься: PerfectVerb = {
  name: Word('краситься', 2),
  singular1stPerson: Word('крашусь', 2),
  singular2ndPerson: Word('красишься', 2),
  singular3rdPerson: Word('красится', 2),
  plural1stPerson: Word('красимся', 2),
  plural2ndPerson: Word('краситесь', 2),
  plural3rdPerson: Word('красятся', 2),
  masculinePast: Word('красился', 2),
  femininePast: Word('красилась', 2),
  neuterPast: Word('красилось', 2),
  pluralPast: Word('красились', 2),
  imperativeInformal: Word('красься', 2),
  imperativeFormal: Word('красьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(краситься.name.text, краситься);

export { краситься };