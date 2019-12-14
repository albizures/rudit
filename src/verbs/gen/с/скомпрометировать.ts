import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скомпрометировать: PerfectVerb = {
  name: Word('скомпрометировать', 10),
  singular1stPerson: Word('скомпрометирую', 10),
  singular2ndPerson: Word('скомпрометируешь', 10),
  singular3rdPerson: Word('скомпрометирует', 10),
  plural1stPerson: Word('скомпрометируем', 10),
  plural2ndPerson: Word('скомпрометируете', 10),
  plural3rdPerson: Word('скомпрометируют', 10),
  masculinePast: Word('скомпрометировал', 10),
  femininePast: Word('скомпрометировала', 10),
  neuterPast: Word('скомпрометировало', 10),
  pluralPast: Word('скомпрометировали', 10),
  imperativeInformal: Word('скомпрометируй', 10),
  imperativeFormal: Word('скомпрометируйте', 10),
  imperfect: [],
};

perfectVerbs.set(скомпрометировать.name.text, скомпрометировать);

export { скомпрометировать };