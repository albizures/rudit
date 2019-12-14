import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отличиться: PerfectVerb = {
  name: Word('отличиться', 5),
  singular1stPerson: Word('отличусь', 5),
  singular2ndPerson: Word('отличишься', 5),
  singular3rdPerson: Word('отличится', 5),
  plural1stPerson: Word('отличимся', 5),
  plural2ndPerson: Word('отличитесь', 5),
  plural3rdPerson: Word('отличатся', 5),
  masculinePast: Word('отличился', 5),
  femininePast: Word('отличилась', 5),
  neuterPast: Word('отличилось', 5),
  pluralPast: Word('отличились', 5),
  imperativeInformal: Word('отличись', 5),
  imperativeFormal: Word('отличитесь', 5),
  imperfect: ['отличаться'],
};

perfectVerbs.set(отличиться.name.text, отличиться);

export { отличиться };