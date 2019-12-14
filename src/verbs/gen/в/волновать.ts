import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const волновать: PerfectVerb = {
  name: Word('волновать', 6),
  singular1stPerson: Word('волную', 4),
  singular2ndPerson: Word('волнуешь', 4),
  singular3rdPerson: Word('волнует', 4),
  plural1stPerson: Word('волнуем', 4),
  plural2ndPerson: Word('волнуете', 4),
  plural3rdPerson: Word('волнуют', 4),
  masculinePast: Word('волновал', 6),
  femininePast: Word('волновала', 6),
  neuterPast: Word('волновало', 6),
  pluralPast: Word('волновали', 6),
  imperativeInformal: Word('волнуй', 4),
  imperativeFormal: Word('волнуйте', 4),
  imperfect: ['взволновать'],
};

perfectVerbs.set(волновать.name.text, волновать);

export { волновать };