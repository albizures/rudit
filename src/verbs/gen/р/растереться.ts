import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растереться: PerfectVerb = {
  name: Word('растереться', 6),
  singular1stPerson: Word('разотрусь', 6),
  singular2ndPerson: Word('разотрёшься', 1),
  singular3rdPerson: Word('разотрётся', 1),
  plural1stPerson: Word('разотрёмся', 1),
  plural2ndPerson: Word('разотрётесь', 1),
  plural3rdPerson: Word('разотрутся', 6),
  masculinePast: Word('растёрся', 1),
  femininePast: Word('растёрлась', 1),
  neuterPast: Word('растёрлось', 1),
  pluralPast: Word('растёрлись', 1),
  imperativeInformal: Word('разотрись', 6),
  imperativeFormal: Word('разотритесь', 6),
  imperfect: [],
};

perfectVerbs.set(растереться.name.text, растереться);

export { растереться };