import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const машинизировать: PerfectVerb = {
  name: Word('машинизировать', 7),
  singular1stPerson: Word('машинизирую', 7),
  singular2ndPerson: Word('машинизируешь', 7),
  singular3rdPerson: Word('машинизирует', 7),
  plural1stPerson: Word('машинизируем', 7),
  plural2ndPerson: Word('машинизируете', 7),
  plural3rdPerson: Word('машинизируют', 7),
  masculinePast: Word('машинизировал', 7),
  femininePast: Word('машинизировала', 7),
  neuterPast: Word('машинизировало', 7),
  pluralPast: Word('машинизировали', 7),
  imperativeInformal: Word('машинизируй', 7),
  imperativeFormal: Word('машинизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(машинизировать.name.text, машинизировать);

export { машинизировать };