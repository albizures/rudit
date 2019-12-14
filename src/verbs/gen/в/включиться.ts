import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const включиться: PerfectVerb = {
  name: Word('включиться', 5),
  singular1stPerson: Word('включусь', 5),
  singular2ndPerson: Word('включишься', 5),
  singular3rdPerson: Word('включится', 5),
  plural1stPerson: Word('включимся', 5),
  plural2ndPerson: Word('включитесь', 5),
  plural3rdPerson: Word('включатся', 5),
  masculinePast: Word('включился', 5),
  femininePast: Word('включилась', 5),
  neuterPast: Word('включилось', 5),
  pluralPast: Word('включились', 5),
  imperativeInformal: Word('включись', 5),
  imperativeFormal: Word('включитесь', 5),
  imperfect: [],
};

perfectVerbs.set(включиться.name.text, включиться);

export { включиться };