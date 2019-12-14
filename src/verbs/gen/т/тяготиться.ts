import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тяготиться: PerfectVerb = {
  name: Word('тяготиться', 5),
  singular1stPerson: Word('тягощусь', 5),
  singular2ndPerson: Word('тяготишься', 5),
  singular3rdPerson: Word('тяготится', 5),
  plural1stPerson: Word('тяготимся', 5),
  plural2ndPerson: Word('тяготитесь', 5),
  plural3rdPerson: Word('тяготятся', 5),
  masculinePast: Word('тяготился', 5),
  femininePast: Word('тяготилась', 5),
  neuterPast: Word('тяготилось', 5),
  pluralPast: Word('тяготились', 5),
  imperativeInformal: Word('тяготись', 5),
  imperativeFormal: Word('тяготитесь', 5),
  imperfect: [],
};

perfectVerbs.set(тяготиться.name.text, тяготиться);

export { тяготиться };