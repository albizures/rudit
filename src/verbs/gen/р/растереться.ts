import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растереться: PerfectVerb = {
  name: Word('растереться', 6),
  singular1stPerson: Word('разотрусь', 6),
  singular2ndPerson: Word('разотрёшься', 6),
  singular3rdPerson: Word('разотрётся', 6),
  plural1stPerson: Word('разотрёмся', 6),
  plural2ndPerson: Word('разотрётесь', 6),
  plural3rdPerson: Word('разотрутся', 6),
  masculinePast: Word('растёрся', 4),
  femininePast: Word('растёрлась', 4),
  neuterPast: Word('растёрлось', 4),
  pluralPast: Word('растёрлись', 4),
  imperativeInformal: Word('разотрись', 6),
  imperativeFormal: Word('разотритесь', 6),
  imperfect: [],
};

perfectVerbs.set(растереться.name.text, растереться);

export { растереться };