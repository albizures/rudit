import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изумиться: PerfectVerb = {
  name: Word('изумиться', 4),
  singular1stPerson: Word('изумлюсь', 5),
  singular2ndPerson: Word('изумишься', 4),
  singular3rdPerson: Word('изумится', 4),
  plural1stPerson: Word('изумимся', 4),
  plural2ndPerson: Word('изумитесь', 4),
  plural3rdPerson: Word('изумятся', 4),
  masculinePast: Word('изумился', 4),
  femininePast: Word('изумилась', 4),
  neuterPast: Word('изумилось', 4),
  pluralPast: Word('изумились', 4),
  imperativeInformal: Word('изумись', 4),
  imperativeFormal: Word('изумитесь', 4),
  imperfect: [],
};

perfectVerbs.set(изумиться.name.text, изумиться);

export { изумиться };