import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отодвинуться: PerfectVerb = {
  name: Word('отодвинуться', 5),
  singular1stPerson: Word('отодвинусь', 5),
  singular2ndPerson: Word('отодвинешься', 5),
  singular3rdPerson: Word('отодвинется', 5),
  plural1stPerson: Word('отодвинемся', 5),
  plural2ndPerson: Word('отодвинетесь', 5),
  plural3rdPerson: Word('отодвинутся', 5),
  masculinePast: Word('отодвинулся', 5),
  femininePast: Word('отодвинулась', 5),
  neuterPast: Word('отодвинулось', 5),
  pluralPast: Word('отодвинулись', 5),
  imperativeInformal: Word('отодвинься', 5),
  imperativeFormal: Word('отодвиньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отодвинуться.name.text, отодвинуться);

export { отодвинуться };