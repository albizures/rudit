import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приарендовывать: PerfectVerb = {
  name: Word('приарендовывать', 8),
  singular1stPerson: Word('приарендовываю', 8),
  singular2ndPerson: Word('приарендовываешь', 8),
  singular3rdPerson: Word('приарендовывает', 8),
  plural1stPerson: Word('приарендовываем', 8),
  plural2ndPerson: Word('приарендовываете', 8),
  plural3rdPerson: Word('приарендовывают', 8),
  masculinePast: Word('приарендовывал', 8),
  femininePast: Word('приарендовывала', 8),
  neuterPast: Word('приарендовывало', 8),
  pluralPast: Word('приарендовывали', 8),
  imperativeInformal: Word('приарендовывай', 8),
  imperativeFormal: Word('приарендовывайте', 8),
  imperfect: [],
};

perfectVerbs.set(приарендовывать.name.text, приарендовывать);

export { приарендовывать };