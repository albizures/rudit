import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надвинуться: PerfectVerb = {
  name: Word('надвинуться', 4),
  singular1stPerson: Word('надвинусь', 4),
  singular2ndPerson: Word('надвинешься', 4),
  singular3rdPerson: Word('надвинется', 4),
  plural1stPerson: Word('надвинемся', 4),
  plural2ndPerson: Word('надвинетесь', 4),
  plural3rdPerson: Word('надвинутся', 4),
  masculinePast: Word('надвинулся', 4),
  femininePast: Word('надвинулась', 4),
  neuterPast: Word('надвинулось', 4),
  pluralPast: Word('надвинулись', 4),
  imperativeInformal: Word('надвинься', 4),
  imperativeFormal: Word('надвиньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(надвинуться.name.text, надвинуться);

export { надвинуться };