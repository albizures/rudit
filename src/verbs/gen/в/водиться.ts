import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const водиться: PerfectVerb = {
  name: Word('водиться', 3),
  singular1stPerson: Word('вожусь', 3),
  singular2ndPerson: Word('водишься', 1),
  singular3rdPerson: Word('водится', 1),
  plural1stPerson: Word('водимся', 1),
  plural2ndPerson: Word('водитесь', 1),
  plural3rdPerson: Word('водятся', 1),
  masculinePast: Word('водился', 3),
  femininePast: Word('водилась', 3),
  neuterPast: Word('водилось', 3),
  pluralPast: Word('водились', 3),
  imperativeInformal: Word('водись', 3),
  imperativeFormal: Word('водитесь', 3),
  imperfect: [],
};

perfectVerbs.set(водиться.name.text, водиться);

export { водиться };