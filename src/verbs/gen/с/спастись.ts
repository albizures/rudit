import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спастись: PerfectVerb = {
  name: Word('спастись', 5),
  singular1stPerson: Word('спасусь', 4),
  singular2ndPerson: Word('спасёшься', 2),
  singular3rdPerson: Word('спасётся', 2),
  plural1stPerson: Word('спасёмся', 2),
  plural2ndPerson: Word('спасётесь', 2),
  plural3rdPerson: Word('спасутся', 4),
  masculinePast: Word('спасся', 2),
  femininePast: Word('спаслась', 5),
  neuterPast: Word('спаслось', 5),
  pluralPast: Word('спаслись', 5),
  imperativeInformal: Word('спасись', 4),
  imperativeFormal: Word('спаситесь', 4),
  imperfect: [],
};

perfectVerbs.set(спастись.name.text, спастись);

export { спастись };