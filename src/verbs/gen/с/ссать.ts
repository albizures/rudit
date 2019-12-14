import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссать: PerfectVerb = {
  name: Word('ссать', 2),
  singular1stPerson: Word('ссу', 2),
  singular2ndPerson: Word('ссышь', 2),
  singular3rdPerson: Word('ссыт', 2),
  plural1stPerson: Word('ссым', 2),
  plural2ndPerson: Word('ссыте', 2),
  plural3rdPerson: Word('ссут', 2),
  masculinePast: Word('ссал', 2),
  femininePast: Word('ссала', 2),
  neuterPast: Word('ссало', 2),
  pluralPast: Word('ссали', 2),
  imperativeInformal: Word('ссы', 2),
  imperativeFormal: Word('ссыте', 2),
  imperfect: ['поссать'],
};

perfectVerbs.set(ссать.name.text, ссать);

export { ссать };