import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const светиться: PerfectVerb = {
  name: Word('светиться', 4),
  singular1stPerson: Word('свечусь', 4),
  singular2ndPerson: Word('светишься', 2),
  singular3rdPerson: Word('светится', 2),
  plural1stPerson: Word('светимся', 2),
  plural2ndPerson: Word('светитесь', 2),
  plural3rdPerson: Word('светятся', 2),
  masculinePast: Word('светился', 4),
  femininePast: Word('светилась', 4),
  neuterPast: Word('светилось', 4),
  pluralPast: Word('светились', 4),
  imperativeInformal: Word('светись', 4),
  imperativeFormal: Word('светитесь', 4),
  imperfect: [],
};

perfectVerbs.set(светиться.name.text, светиться);

export { светиться };