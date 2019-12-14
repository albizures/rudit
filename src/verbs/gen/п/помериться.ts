import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помериться: PerfectVerb = {
  name: Word('помериться', 3),
  singular1stPerson: Word('померюсь', 3),
  singular2ndPerson: Word('померишься', 3),
  singular3rdPerson: Word('померится', 3),
  plural1stPerson: Word('померимся', 3),
  plural2ndPerson: Word('померитесь', 3),
  plural3rdPerson: Word('померятся', 3),
  masculinePast: Word('померился', 3),
  femininePast: Word('померилась', 3),
  neuterPast: Word('померилось', 3),
  pluralPast: Word('померились', 3),
  imperativeInformal: Word('померься', 3),
  imperativeFormal: Word('померьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(помериться.name.text, помериться);

export { помериться };