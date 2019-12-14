import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спасться: PerfectVerb = {
  name: Word('спасться', 2),
  singular1stPerson: Word('спадусь', 4),
  singular2ndPerson: Word('спадёшься', 4),
  singular3rdPerson: Word('спадётся', 4),
  plural1stPerson: Word('спадёмся', 4),
  plural2ndPerson: Word('спадётесь', 4),
  plural3rdPerson: Word('спадутся', 4),
  masculinePast: Word('спался', 2),
  femininePast: Word('спалась', 2),
  neuterPast: Word('спалось', 2),
  pluralPast: Word('спались', 2),
  imperativeInformal: Word('спадись', 4),
  imperativeFormal: Word('спадитесь', 4),
  imperfect: [],
};

perfectVerbs.set(спасться.name.text, спасться);

export { спасться };