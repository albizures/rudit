import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заходиться: PerfectVerb = {
  name: Word('заходиться', 5),
  singular1stPerson: Word('захожусь', 5),
  singular2ndPerson: Word('заходишься', 3),
  singular3rdPerson: Word('заходится', 3),
  plural1stPerson: Word('заходимся', 3),
  plural2ndPerson: Word('заходитесь', 3),
  plural3rdPerson: Word('заходятся', 3),
  masculinePast: Word('заходился', 5),
  femininePast: Word('заходилась', 5),
  neuterPast: Word('заходилось', 5),
  pluralPast: Word('заходились', 5),
  imperativeInformal: Word('заходись', 5),
  imperativeFormal: Word('заходитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заходиться.name.text, заходиться);

export { заходиться };