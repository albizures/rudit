import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драматизировать: PerfectVerb = {
  name: Word('драматизировать', 8),
  singular1stPerson: Word('драматизирую', 8),
  singular2ndPerson: Word('драматизируешь', 8),
  singular3rdPerson: Word('драматизирует', 8),
  plural1stPerson: Word('драматизируем', 8),
  plural2ndPerson: Word('драматизируете', 8),
  plural3rdPerson: Word('драматизируют', 8),
  masculinePast: Word('драматизировал', 8),
  femininePast: Word('драматизировала', 8),
  neuterPast: Word('драматизировало', 8),
  pluralPast: Word('драматизировали', 8),
  imperativeInformal: Word('драматизируй', 8),
  imperativeFormal: Word('драматизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(драматизировать.name.text, драматизировать);

export { драматизировать };