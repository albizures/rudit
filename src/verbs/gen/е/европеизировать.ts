import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const европеизировать: PerfectVerb = {
  name: Word('европеизировать', 8),
  singular1stPerson: Word('европеизирую', 8),
  singular2ndPerson: Word('европеизируешь', 8),
  singular3rdPerson: Word('европеизирует', 8),
  plural1stPerson: Word('европеизируем', 8),
  plural2ndPerson: Word('европеизируете', 8),
  plural3rdPerson: Word('европеизируют', 8),
  masculinePast: Word('европеизировал', 8),
  femininePast: Word('европеизировала', 8),
  neuterPast: Word('европеизировало', 8),
  pluralPast: Word('европеизировали', 8),
  imperativeInformal: Word('европеизируй', 8),
  imperativeFormal: Word('европеизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(европеизировать.name.text, европеизировать);

export { европеизировать };