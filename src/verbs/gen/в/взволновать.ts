import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взволновать: PerfectVerb = {
  name: Word('взволновать', 8),
  singular1stPerson: Word('взволную', 6),
  singular2ndPerson: Word('взволнуешь', 6),
  singular3rdPerson: Word('взволнует', 6),
  plural1stPerson: Word('взволнуем', 6),
  plural2ndPerson: Word('взволнуете', 6),
  plural3rdPerson: Word('взволнуют', 6),
  masculinePast: Word('взволновал', 8),
  femininePast: Word('взволновала', 8),
  neuterPast: Word('взволновало', 8),
  pluralPast: Word('взволновали', 8),
  imperativeInformal: Word('взволнуй', 6),
  imperativeFormal: Word('взволнуйте', 6),
  imperfect: ['волновать'],
};

perfectVerbs.set(взволновать.name.text, взволновать);

export { взволновать };