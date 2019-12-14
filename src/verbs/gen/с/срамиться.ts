import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срамиться: PerfectVerb = {
  name: Word('срамиться', 4),
  singular1stPerson: Word('срамлюсь', 5),
  singular2ndPerson: Word('срамишься', 4),
  singular3rdPerson: Word('срамится', 4),
  plural1stPerson: Word('срамимся', 4),
  plural2ndPerson: Word('срамитесь', 4),
  plural3rdPerson: Word('срамятся', 4),
  masculinePast: Word('срамился', 4),
  femininePast: Word('срамилась', 4),
  neuterPast: Word('срамилось', 4),
  pluralPast: Word('срамились', 4),
  imperativeInformal: Word('срамись', 4),
  imperativeFormal: Word('срамитесь', 4),
  imperfect: [],
};

perfectVerbs.set(срамиться.name.text, срамиться);

export { срамиться };