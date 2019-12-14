import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передвинуться: PerfectVerb = {
  name: Word('передвинуться', 6),
  singular1stPerson: Word('передвинусь', 6),
  singular2ndPerson: Word('передвинешься', 6),
  singular3rdPerson: Word('передвинется', 6),
  plural1stPerson: Word('передвинемся', 6),
  plural2ndPerson: Word('передвинетесь', 6),
  plural3rdPerson: Word('передвинутся', 6),
  masculinePast: Word('передвинулся', 6),
  femininePast: Word('передвинулась', 6),
  neuterPast: Word('передвинулось', 6),
  pluralPast: Word('передвинулись', 6),
  imperativeInformal: Word('передвинься', 6),
  imperativeFormal: Word('передвиньтесь', 6),
  imperfect: [],
};

perfectVerbs.set(передвинуться.name.text, передвинуться);

export { передвинуться };