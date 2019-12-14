import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продвинуться: PerfectVerb = {
  name: Word('продвинуться', 5),
  singular1stPerson: Word('продвинусь', 5),
  singular2ndPerson: Word('продвинешься', 5),
  singular3rdPerson: Word('продвинется', 5),
  plural1stPerson: Word('продвинемся', 5),
  plural2ndPerson: Word('продвинетесь', 5),
  plural3rdPerson: Word('продвинутся', 5),
  masculinePast: Word('продвинулся', 5),
  femininePast: Word('продвинулась', 5),
  neuterPast: Word('продвинулось', 5),
  pluralPast: Word('продвинулись', 5),
  imperativeInformal: Word('продвинься', 5),
  imperativeFormal: Word('продвиньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(продвинуться.name.text, продвинуться);

export { продвинуться };