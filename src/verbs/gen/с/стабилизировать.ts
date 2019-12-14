import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стабилизировать: PerfectVerb = {
  name: Word('стабилизировать', 8),
  singular1stPerson: Word('стабилизирую', 8),
  singular2ndPerson: Word('стабилизируешь', 8),
  singular3rdPerson: Word('стабилизирует', 8),
  plural1stPerson: Word('стабилизируем', 8),
  plural2ndPerson: Word('стабилизируете', 8),
  plural3rdPerson: Word('стабилизируют', 8),
  masculinePast: Word('стабилизировал', 8),
  femininePast: Word('стабилизировала', 8),
  neuterPast: Word('стабилизировало', 8),
  pluralPast: Word('стабилизировали', 8),
  imperativeInformal: Word('стабилизируй', 8),
  imperativeFormal: Word('стабилизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(стабилизировать.name.text, стабилизировать);

export { стабилизировать };