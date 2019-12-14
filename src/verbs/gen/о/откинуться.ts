import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откинуться: PerfectVerb = {
  name: Word('откинуться', 3),
  singular1stPerson: Word('откинусь', 3),
  singular2ndPerson: Word('откинешься', 3),
  singular3rdPerson: Word('откинется', 3),
  plural1stPerson: Word('откинемся', 3),
  plural2ndPerson: Word('откинетесь', 3),
  plural3rdPerson: Word('откинутся', 3),
  masculinePast: Word('откинулся', 3),
  femininePast: Word('откинулась', 3),
  neuterPast: Word('откинулось', 3),
  pluralPast: Word('откинулись', 3),
  imperativeInformal: Word('откинься', 3),
  imperativeFormal: Word('откиньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(откинуться.name.text, откинуться);

export { откинуться };