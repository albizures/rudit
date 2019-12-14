import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мужать: PerfectVerb = {
  name: Word('мужать', 3),
  singular1stPerson: Word('мужаю', 3),
  singular2ndPerson: Word('мужаешь', 3),
  singular3rdPerson: Word('мужает', 3),
  plural1stPerson: Word('мужаем', 3),
  plural2ndPerson: Word('мужаете', 3),
  plural3rdPerson: Word('мужают', 3),
  masculinePast: Word('мужал', 3),
  femininePast: Word('мужала', 3),
  neuterPast: Word('мужало', 3),
  pluralPast: Word('мужали', 3),
  imperativeInformal: Word('мужай', 3),
  imperativeFormal: Word('мужайте', 3),
  imperfect: [],
};

perfectVerbs.set(мужать.name.text, мужать);

export { мужать };