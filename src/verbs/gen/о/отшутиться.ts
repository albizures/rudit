import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшутиться: PerfectVerb = {
  name: Word('отшутиться', 5),
  singular1stPerson: Word('отшучусь', 5),
  singular2ndPerson: Word('отшутишься', 3),
  singular3rdPerson: Word('отшутится', 3),
  plural1stPerson: Word('отшутимся', 3),
  plural2ndPerson: Word('отшутитесь', 3),
  plural3rdPerson: Word('отшутятся', 3),
  masculinePast: Word('отшутился', 5),
  femininePast: Word('отшутилась', 5),
  neuterPast: Word('отшутилось', 5),
  pluralPast: Word('отшутились', 5),
  imperativeInformal: Word('отшутись', 5),
  imperativeFormal: Word('отшутитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отшутиться.name.text, отшутиться);

export { отшутиться };