import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зайтись: PerfectVerb = {
  name: Word('зайтись', 4),
  singular1stPerson: Word('зайдусь', 4),
  singular2ndPerson: Word('зайдёшься', 1),
  singular3rdPerson: Word('зайдётся', 1),
  plural1stPerson: Word('зайдёмся', 1),
  plural2ndPerson: Word('зайдётесь', 1),
  plural3rdPerson: Word('зайдутся', 4),
  masculinePast: Word('зашёлся', 1),
  femininePast: Word('зашлась', 4),
  neuterPast: Word('зашлось', 4),
  pluralPast: Word('зашлись', 4),
  imperativeInformal: Word('зайдись', 4),
  imperativeFormal: Word('зайдитесь', 4),
  imperfect: [],
};

perfectVerbs.set(зайтись.name.text, зайтись);

export { зайтись };