import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отразиться: PerfectVerb = {
  name: Word('отразиться', 5),
  singular1stPerson: Word('отражусь', 5),
  singular2ndPerson: Word('отразишься', 5),
  singular3rdPerson: Word('отразится', 5),
  plural1stPerson: Word('отразимся', 5),
  plural2ndPerson: Word('отразитесь', 5),
  plural3rdPerson: Word('отразятся', 5),
  masculinePast: Word('отразился', 5),
  femininePast: Word('отразилась', 5),
  neuterPast: Word('отразилось', 5),
  pluralPast: Word('отразились', 5),
  imperativeInformal: Word('отразись', 5),
  imperativeFormal: Word('отразитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отразиться.name.text, отразиться);

export { отразиться };