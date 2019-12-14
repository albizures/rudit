import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглотиться: PerfectVerb = {
  name: Word('поглотиться', 6),
  singular1stPerson: Word('поглощусь', 6),
  singular2ndPerson: Word('поглотишься', 6),
  singular3rdPerson: Word('поглотится', 6),
  plural1stPerson: Word('поглотимся', 6),
  plural2ndPerson: Word('поглотитесь', 6),
  plural3rdPerson: Word('поглотятся', 6),
  masculinePast: Word('поглотился', 6),
  femininePast: Word('поглотилась', 6),
  neuterPast: Word('поглотилось', 6),
  pluralPast: Word('поглотились', 6),
  imperativeInformal: Word('поглотись', 6),
  imperativeFormal: Word('поглотитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поглотиться.name.text, поглотиться);

export { поглотиться };