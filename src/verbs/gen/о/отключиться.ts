import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отключиться: PerfectVerb = {
  name: Word('отключиться', 6),
  singular1stPerson: Word('отключусь', 6),
  singular2ndPerson: Word('отключишься', 6),
  singular3rdPerson: Word('отключится', 6),
  plural1stPerson: Word('отключимся', 6),
  plural2ndPerson: Word('отключитесь', 6),
  plural3rdPerson: Word('отключатся', 6),
  masculinePast: Word('отключился', 6),
  femininePast: Word('отключилась', 6),
  neuterPast: Word('отключилось', 6),
  pluralPast: Word('отключились', 6),
  imperativeInformal: Word('отключись', 6),
  imperativeFormal: Word('отключитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отключиться.name.text, отключиться);

export { отключиться };