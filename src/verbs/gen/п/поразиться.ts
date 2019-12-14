import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поразиться: PerfectVerb = {
  name: Word('поразиться', 5),
  singular1stPerson: Word('поражусь', 5),
  singular2ndPerson: Word('поразишься', 5),
  singular3rdPerson: Word('поразится', 5),
  plural1stPerson: Word('поразимся', 5),
  plural2ndPerson: Word('поразитесь', 5),
  plural3rdPerson: Word('поразятся', 5),
  masculinePast: Word('поразился', 5),
  femininePast: Word('поразилась', 5),
  neuterPast: Word('поразилось', 5),
  pluralPast: Word('поразились', 5),
  imperativeInformal: Word('поразись', 5),
  imperativeFormal: Word('поразитесь', 5),
  imperfect: [],
};

perfectVerbs.set(поразиться.name.text, поразиться);

export { поразиться };