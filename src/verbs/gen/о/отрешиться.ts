import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрешиться: PerfectVerb = {
  name: Word('отрешиться', 5),
  singular1stPerson: Word('отрешусь', 5),
  singular2ndPerson: Word('отрешишься', 5),
  singular3rdPerson: Word('отрешится', 5),
  plural1stPerson: Word('отрешимся', 5),
  plural2ndPerson: Word('отрешитесь', 5),
  plural3rdPerson: Word('отрешатся', 5),
  masculinePast: Word('отрешился', 5),
  femininePast: Word('отрешилась', 5),
  neuterPast: Word('отрешилось', 5),
  pluralPast: Word('отрешились', 5),
  imperativeInformal: Word('отрешись', 5),
  imperativeFormal: Word('отрешитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отрешиться.name.text, отрешиться);

export { отрешиться };