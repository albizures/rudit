import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заразиться: PerfectVerb = {
  name: Word('заразиться', 5),
  singular1stPerson: Word('заражусь', 5),
  singular2ndPerson: Word('заразишься', 5),
  singular3rdPerson: Word('заразится', 5),
  plural1stPerson: Word('заразимся', 5),
  plural2ndPerson: Word('заразитесь', 5),
  plural3rdPerson: Word('заразятся', 5),
  masculinePast: Word('заразился', 5),
  femininePast: Word('заразилась', 5),
  neuterPast: Word('заразилось', 5),
  pluralPast: Word('заразились', 5),
  imperativeInformal: Word('заразись', 5),
  imperativeFormal: Word('заразитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заразиться.name.text, заразиться);

export { заразиться };