import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхватать: PerfectVerb = {
  name: Word('расхватать', 7),
  singular1stPerson: Word('расхватаю', 7),
  singular2ndPerson: Word('расхватаешь', 7),
  singular3rdPerson: Word('расхватает', 7),
  plural1stPerson: Word('расхватаем', 7),
  plural2ndPerson: Word('расхватаете', 7),
  plural3rdPerson: Word('расхватают', 7),
  masculinePast: Word('расхватал', 7),
  femininePast: Word('расхватала', 7),
  neuterPast: Word('расхватало', 7),
  pluralPast: Word('расхватали', 7),
  imperativeInformal: Word('расхватай', 7),
  imperativeFormal: Word('расхватайте', 7),
  imperfect: [],
};

perfectVerbs.set(расхватать.name.text, расхватать);

export { расхватать };