import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воевать: PerfectVerb = {
  name: Word('воевать', 4),
  singular1stPerson: Word('воюю', 2),
  singular2ndPerson: Word('воюешь', 2),
  singular3rdPerson: Word('воюет', 2),
  plural1stPerson: Word('воюем', 2),
  plural2ndPerson: Word('воюете', 2),
  plural3rdPerson: Word('воюют', 2),
  masculinePast: Word('воевал', 4),
  femininePast: Word('воевала', 4),
  neuterPast: Word('воевало', 4),
  pluralPast: Word('воевали', 4),
  imperativeInformal: Word('воюй', 2),
  imperativeFormal: Word('воюйте', 2),
  imperfect: ['повоевать'],
};

perfectVerbs.set(воевать.name.text, воевать);

export { воевать };