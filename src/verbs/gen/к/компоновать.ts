import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const компоновать: PerfectVerb = {
  name: Word('компоновать', 8),
  singular1stPerson: Word('компоную', 6),
  singular2ndPerson: Word('компонуешь', 6),
  singular3rdPerson: Word('компонует', 6),
  plural1stPerson: Word('компонуем', 6),
  plural2ndPerson: Word('компонуете', 6),
  plural3rdPerson: Word('компонуют', 6),
  masculinePast: Word('компоновал', 8),
  femininePast: Word('компоновала', 8),
  neuterPast: Word('компоновало', 8),
  pluralPast: Word('компоновали', 8),
  imperativeInformal: Word('компонуй', 6),
  imperativeFormal: Word('компонуйте', 6),
  imperfect: [],
};

perfectVerbs.set(компоновать.name.text, компоновать);

export { компоновать };