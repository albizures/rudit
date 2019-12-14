import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иммунизировать: PerfectVerb = {
  name: Word('иммунизировать', 7),
  singular1stPerson: Word('иммунизирую', 7),
  singular2ndPerson: Word('иммунизируешь', 7),
  singular3rdPerson: Word('иммунизирует', 7),
  plural1stPerson: Word('иммунизируем', 7),
  plural2ndPerson: Word('иммунизируете', 7),
  plural3rdPerson: Word('иммунизируют', 7),
  masculinePast: Word('иммунизировал', 7),
  femininePast: Word('иммунизировала', 7),
  neuterPast: Word('иммунизировало', 7),
  pluralPast: Word('иммунизировали', 7),
  imperativeInformal: Word('иммунизируй', 7),
  imperativeFormal: Word('иммунизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(иммунизировать.name.text, иммунизировать);

export { иммунизировать };