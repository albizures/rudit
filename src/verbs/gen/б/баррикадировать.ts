import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баррикадировать: PerfectVerb = {
  name: Word('баррикадировать', 8),
  singular1stPerson: Word('баррикадирую', 8),
  singular2ndPerson: Word('баррикадируешь', 8),
  singular3rdPerson: Word('баррикадирует', 8),
  plural1stPerson: Word('баррикадируем', 8),
  plural2ndPerson: Word('баррикадируете', 8),
  plural3rdPerson: Word('баррикадируют', 8),
  masculinePast: Word('баррикадировал', 8),
  femininePast: Word('баррикадировала', 8),
  neuterPast: Word('баррикадировало', 8),
  pluralPast: Word('баррикадировали', 8),
  imperativeInformal: Word('баррикадируй', 8),
  imperativeFormal: Word('баррикадируйте', 8),
  imperfect: [],
};

perfectVerbs.set(баррикадировать.name.text, баррикадировать);

export { баррикадировать };