import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хватиться: PerfectVerb = {
  name: Word('хватиться', 4),
  singular1stPerson: Word('хвачусь', 4),
  singular2ndPerson: Word('хватишься', 2),
  singular3rdPerson: Word('хватится', 2),
  plural1stPerson: Word('хватимся', 2),
  plural2ndPerson: Word('хватитесь', 2),
  plural3rdPerson: Word('хватятся', 2),
  masculinePast: Word('хватился', 4),
  femininePast: Word('хватилась', 4),
  neuterPast: Word('хватилось', 4),
  pluralPast: Word('хватились', 4),
  imperativeInformal: Word('хватись', 4),
  imperativeFormal: Word('хватитесь', 4),
  imperfect: [],
};

perfectVerbs.set(хватиться.name.text, хватиться);

export { хватиться };