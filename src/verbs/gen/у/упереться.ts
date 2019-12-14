import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упереться: PerfectVerb = {
  name: Word('упереться', 4),
  singular1stPerson: Word('упрусь', 3),
  singular2ndPerson: Word('упрёшься', 7),
  singular3rdPerson: Word('упрётся', 6),
  plural1stPerson: Word('упрёмся', 6),
  plural2ndPerson: Word('упрётесь', 5),
  plural3rdPerson: Word('упрутся', 3),
  masculinePast: Word('упёрся', 5),
  femininePast: Word('упёрлась', 5),
  neuterPast: Word('упёрлось', 5),
  pluralPast: Word('упёрлись', 5),
  imperativeInformal: Word('упрись', 3),
  imperativeFormal: Word('упритесь', 3),
  imperfect: ['упираться'],
};

perfectVerbs.set(упереться.name.text, упереться);

export { упереться };