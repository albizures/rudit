import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утопиться: PerfectVerb = {
  name: Word('утопиться', 4),
  singular1stPerson: Word('утоплюсь', 5),
  singular2ndPerson: Word('утопишься', 2),
  singular3rdPerson: Word('утопится', 2),
  plural1stPerson: Word('утопимся', 2),
  plural2ndPerson: Word('утопитесь', 2),
  plural3rdPerson: Word('утопятся', 2),
  masculinePast: Word('утопился', 4),
  femininePast: Word('утопилась', 4),
  neuterPast: Word('утопилось', 4),
  pluralPast: Word('утопились', 4),
  imperativeInformal: Word('утопись', 4),
  imperativeFormal: Word('утопитесь', 4),
  imperfect: [],
};

perfectVerbs.set(утопиться.name.text, утопиться);

export { утопиться };