import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекинуться: PerfectVerb = {
  name: Word('перекинуться', 5),
  singular1stPerson: Word('перекинусь', 5),
  singular2ndPerson: Word('перекинешься', 5),
  singular3rdPerson: Word('перекинется', 5),
  plural1stPerson: Word('перекинемся', 5),
  plural2ndPerson: Word('перекинетесь', 5),
  plural3rdPerson: Word('перекинутся', 5),
  masculinePast: Word('перекинулся', 5),
  femininePast: Word('перекинулась', 5),
  neuterPast: Word('перекинулось', 5),
  pluralPast: Word('перекинулись', 5),
  imperativeInformal: Word('перекинься', 5),
  imperativeFormal: Word('перекиньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перекинуться.name.text, перекинуться);

export { перекинуться };