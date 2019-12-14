import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придвинуться: PerfectVerb = {
  name: Word('придвинуться', 5),
  singular1stPerson: Word('придвинусь', 5),
  singular2ndPerson: Word('придвинешься', 5),
  singular3rdPerson: Word('придвинется', 5),
  plural1stPerson: Word('придвинемся', 5),
  plural2ndPerson: Word('придвинетесь', 5),
  plural3rdPerson: Word('придвинутся', 5),
  masculinePast: Word('придвинулся', 5),
  femininePast: Word('придвинулась', 5),
  neuterPast: Word('придвинулось', 5),
  pluralPast: Word('придвинулись', 5),
  imperativeInformal: Word('придвинься', 5),
  imperativeFormal: Word('придвиньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(придвинуться.name.text, придвинуться);

export { придвинуться };