import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упереться: PerfectVerb = {
  name: Word('упереться', 4),
  singular1stPerson: Word('упрусь', 3),
  singular2ndPerson: Word('упрёшься', 3),
  singular3rdPerson: Word('упрётся', 3),
  plural1stPerson: Word('упрёмся', 3),
  plural2ndPerson: Word('упрётесь', 3),
  plural3rdPerson: Word('упрутся', 3),
  masculinePast: Word('упёрся', 2),
  femininePast: Word('упёрлась', 2),
  neuterPast: Word('упёрлось', 2),
  pluralPast: Word('упёрлись', 2),
  imperativeInformal: Word('упрись', 3),
  imperativeFormal: Word('упритесь', 3),
  imperfect: ['упираться'],
};

perfectVerbs.set(упереться.name.text, упереться);

export { упереться };