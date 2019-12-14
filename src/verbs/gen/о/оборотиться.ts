import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборотиться: PerfectVerb = {
  name: Word('оборотиться', 6),
  singular1stPerson: Word('оборочусь', 6),
  singular2ndPerson: Word('оборотишься', 4),
  singular3rdPerson: Word('оборотится', 4),
  plural1stPerson: Word('оборотимся', 4),
  plural2ndPerson: Word('оборотитесь', 4),
  plural3rdPerson: Word('оборотятся', 4),
  masculinePast: Word('оборотился', 6),
  femininePast: Word('оборотилась', 6),
  neuterPast: Word('оборотилось', 6),
  pluralPast: Word('оборотились', 6),
  imperativeInformal: Word('оборотись', 6),
  imperativeFormal: Word('оборотитесь', 6),
  imperfect: [],
};

perfectVerbs.set(оборотиться.name.text, оборотиться);

export { оборотиться };