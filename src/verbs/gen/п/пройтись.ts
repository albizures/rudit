import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пройтись: PerfectVerb = {
  name: Word('пройтись', 5),
  singular1stPerson: Word('пройдусь', 5),
  singular2ndPerson: Word('пройдёшься', 2),
  singular3rdPerson: Word('пройдётся', 2),
  plural1stPerson: Word('пройдёмся', 2),
  plural2ndPerson: Word('пройдётесь', 7),
  plural3rdPerson: Word('пройдутся', 5),
  masculinePast: Word('прошёлся', 2),
  femininePast: Word('прошлась', 5),
  neuterPast: Word('прошлось', 5),
  pluralPast: Word('прошлись', 5),
  imperativeInformal: Word('пройдись', 5),
  imperativeFormal: Word('пройдитесь', 5),
  imperfect: [],
};

perfectVerbs.set(пройтись.name.text, пройтись);

export { пройтись };