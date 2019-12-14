import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const латинизировать: PerfectVerb = {
  name: Word('латинизировать', 7),
  singular1stPerson: Word('латинизирую', 7),
  singular2ndPerson: Word('латинизируешь', 7),
  singular3rdPerson: Word('латинизирует', 7),
  plural1stPerson: Word('латинизируем', 7),
  plural2ndPerson: Word('латинизируете', 7),
  plural3rdPerson: Word('латинизируют', 7),
  masculinePast: Word('латинизировал', 7),
  femininePast: Word('латинизировала', 7),
  neuterPast: Word('латинизировало', 7),
  pluralPast: Word('латинизировали', 7),
  imperativeInformal: Word('латинизируй', 7),
  imperativeFormal: Word('латинизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(латинизировать.name.text, латинизировать);

export { латинизировать };