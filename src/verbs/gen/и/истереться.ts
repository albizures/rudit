import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истереться: PerfectVerb = {
  name: Word('истереться', 5),
  singular1stPerson: Word('изотрусь', 5),
  singular2ndPerson: Word('изотрёшься', 5),
  singular3rdPerson: Word('изотрётся', 5),
  plural1stPerson: Word('изотрёмся', 5),
  plural2ndPerson: Word('изотрётесь', 5),
  plural3rdPerson: Word('изотрутся', 5),
  masculinePast: Word('истёрся', 3),
  femininePast: Word('истёрлась', 3),
  neuterPast: Word('истёрлось', 3),
  pluralPast: Word('истёрлись', 3),
  imperativeInformal: Word('изотрись', 5),
  imperativeFormal: Word('изотритесь', 5),
  imperfect: [],
};

perfectVerbs.set(истереться.name.text, истереться);

export { истереться };