import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предать: PerfectVerb = {
  name: Word('предать', 4),
  singular1stPerson: Word('предам', 4),
  singular2ndPerson: Word('предашь', 4),
  singular3rdPerson: Word('предаст', 4),
  plural1stPerson: Word('предадим', 6),
  plural2ndPerson: Word('предадите', 6),
  plural3rdPerson: Word('предадут', 6),
  masculinePast: Word('предал', 4),
  femininePast: Word('предала', 6),
  neuterPast: Word('предало,предало'', 4),
  pluralPast: Word('предали', 4),
  imperativeInformal: Word('предай', 4),
  imperativeFormal: Word('предайте', 4),
  imperfect: ['предавать'],
};

perfectVerbs.set(предать.name.text, предать);

export { предать };