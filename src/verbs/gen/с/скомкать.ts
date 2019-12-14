import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скомкать: PerfectVerb = {
  name: Word('скомкать', 2),
  singular1stPerson: Word('скомкаю', 2),
  singular2ndPerson: Word('скомкаешь', 2),
  singular3rdPerson: Word('скомкает', 2),
  plural1stPerson: Word('скомкаем', 2),
  plural2ndPerson: Word('скомкаете', 2),
  plural3rdPerson: Word('скомкают', 2),
  masculinePast: Word('скомкал', 2),
  femininePast: Word('скомкала', 2),
  neuterPast: Word('скомкало', 2),
  pluralPast: Word('скомкали', 2),
  imperativeInformal: Word('скомкай', 2),
  imperativeFormal: Word('скомкайте', 2),
  imperfect: [],
};

perfectVerbs.set(скомкать.name.text, скомкать);

export { скомкать };