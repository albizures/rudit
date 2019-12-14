import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выразиться: PerfectVerb = {
  name: Word('выразиться', 1),
  singular1stPerson: Word('выражусь', 1),
  singular2ndPerson: Word('выразишься', 1),
  singular3rdPerson: Word('выразится', 1),
  plural1stPerson: Word('выразимся', 1),
  plural2ndPerson: Word('выразитесь', 1),
  plural3rdPerson: Word('выразятся', 1),
  masculinePast: Word('выразился', 1),
  femininePast: Word('выразилась', 1),
  neuterPast: Word('выразилось', 1),
  pluralPast: Word('выразились', 1),
  imperativeInformal: Word('выразись', 1),
  imperativeFormal: Word('выразитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выразиться.name.text, выразиться);

export { выразиться };