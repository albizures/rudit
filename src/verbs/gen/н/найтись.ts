import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const найтись: PerfectVerb = {
  name: Word('найтись', 4),
  singular1stPerson: Word('найдусь', 4),
  singular2ndPerson: Word('найдёшься', 4),
  singular3rdPerson: Word('найдётся', 4),
  plural1stPerson: Word('найдёмся', 4),
  plural2ndPerson: Word('найдётесь', 4),
  plural3rdPerson: Word('найдутся', 4),
  masculinePast: Word('нашёлся', 3),
  femininePast: Word('нашлась', 4),
  neuterPast: Word('нашлось', 4),
  pluralPast: Word('нашлись', 4),
  imperativeInformal: Word('найдись', 4),
  imperativeFormal: Word('найдитесь', 4),
  imperfect: ['находиться'],
};

perfectVerbs.set(найтись.name.text, найтись);

export { найтись };