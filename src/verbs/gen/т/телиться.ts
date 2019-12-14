import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const телиться: PerfectVerb = {
  name: Word('телиться', 3),
  singular1stPerson: Word('телюсь', 3),
  singular2ndPerson: Word('телишься', 1),
  singular3rdPerson: Word('телится', 1),
  plural1stPerson: Word('телимся', 1),
  plural2ndPerson: Word('телитесь', 1),
  plural3rdPerson: Word('телятся', 1),
  masculinePast: Word('телился', 3),
  femininePast: Word('телилась', 3),
  neuterPast: Word('телилось', 3),
  pluralPast: Word('телились', 3),
  imperativeInformal: Word('телись', 3),
  imperativeFormal: Word('телитесь', 3),
  imperfect: [],
};

perfectVerbs.set(телиться.name.text, телиться);

export { телиться };