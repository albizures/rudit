import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предпринять: PerfectVerb = {
  name: Word('предпринять', 8),
  singular1stPerson: Word('предприму', 8),
  singular2ndPerson: Word('предпримешь', 6),
  singular3rdPerson: Word('предпримет', 6),
  plural1stPerson: Word('предпримем', 6),
  plural2ndPerson: Word('предпримете', 6),
  plural3rdPerson: Word('предпримут', 6),
  masculinePast: Word('предпринял', 6),
  femininePast: Word('предприняла', 10),
  neuterPast: Word('предприняло', 6),
  pluralPast: Word('предприняли', 6),
  imperativeInformal: Word('предприми', 8),
  imperativeFormal: Word('предпримите', 8),
  imperfect: [],
};

perfectVerbs.set(предпринять.name.text, предпринять);

export { предпринять };