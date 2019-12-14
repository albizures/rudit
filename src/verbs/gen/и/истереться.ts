import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истереться: PerfectVerb = {
  name: Word('истереться', 5),
  singular1stPerson: Word('изотрусь', 5),
  singular2ndPerson: Word('изотрёшься', 0),
  singular3rdPerson: Word('изотрётся', 0),
  plural1stPerson: Word('изотрёмся', 0),
  plural2ndPerson: Word('изотрётесь', 7),
  plural3rdPerson: Word('изотрутся', 5),
  masculinePast: Word('истёрся', 0),
  femininePast: Word('истёрлась', 6),
  neuterPast: Word('истёрлось', 0),
  pluralPast: Word('истёрлись', 0),
  imperativeInformal: Word('изотрись', 5),
  imperativeFormal: Word('изотритесь', 5),
  imperfect: [],
};

perfectVerbs.set(истереться.name.text, истереться);

export { истереться };