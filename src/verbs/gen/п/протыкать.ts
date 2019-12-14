import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протыкать: PerfectVerb = {
  name: Word('протыкать', 4),
  singular1stPerson: Word('протыкаю', 4),
  singular2ndPerson: Word('протыкаешь', 4),
  singular3rdPerson: Word('протыкает', 4),
  plural1stPerson: Word('протыкаем', 4),
  plural2ndPerson: Word('протыкаете', 4),
  plural3rdPerson: Word('протыкают', 4),
  masculinePast: Word('протыкал', 4),
  femininePast: Word('протыкала', 4),
  neuterPast: Word('протыкало', 4),
  pluralPast: Word('протыкали', 4),
  imperativeInformal: Word('протыкай', 4),
  imperativeFormal: Word('протыкайте', 4),
  imperfect: [],
};

perfectVerbs.set(протыкать.name.text, протыкать);

export { протыкать };