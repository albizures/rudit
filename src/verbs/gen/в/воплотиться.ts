import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воплотиться: PerfectVerb = {
  name: Word('воплотиться', 6),
  singular1stPerson: Word('воплощусь', 6),
  singular2ndPerson: Word('воплотишься', 6),
  singular3rdPerson: Word('воплотится', 6),
  plural1stPerson: Word('воплотимся', 6),
  plural2ndPerson: Word('воплотитесь', 6),
  plural3rdPerson: Word('воплотятся', 6),
  masculinePast: Word('воплотился', 6),
  femininePast: Word('воплотилась', 6),
  neuterPast: Word('воплотилось', 6),
  pluralPast: Word('воплотились', 6),
  imperativeInformal: Word('воплотись', 6),
  imperativeFormal: Word('воплотитесь', 6),
  imperfect: [],
};

perfectVerbs.set(воплотиться.name.text, воплотиться);

export { воплотиться };