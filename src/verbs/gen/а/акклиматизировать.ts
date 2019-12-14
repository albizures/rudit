import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const акклиматизировать: PerfectVerb = {
  name: Word('акклиматизировать', 10),
  singular1stPerson: Word('акклиматизирую', 10),
  singular2ndPerson: Word('акклиматизируешь', 10),
  singular3rdPerson: Word('акклиматизирует', 10),
  plural1stPerson: Word('акклиматизируем', 10),
  plural2ndPerson: Word('акклиматизируете', 10),
  plural3rdPerson: Word('акклиматизируют', 10),
  masculinePast: Word('акклиматизировал', 10),
  femininePast: Word('акклиматизировала', 10),
  neuterPast: Word('акклиматизировало', 10),
  pluralPast: Word('акклиматизировали', 10),
  imperativeInformal: Word('акклиматизируй', 10),
  imperativeFormal: Word('акклиматизируйте', 10),
  imperfect: [],
};

perfectVerbs.set(акклиматизировать.name.text, акклиматизировать);

export { акклиматизировать };