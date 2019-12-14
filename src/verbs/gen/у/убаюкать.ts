import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убаюкать: PerfectVerb = {
  name: Word('убаюкать', 3),
  singular1stPerson: Word('убаюкаю', 3),
  singular2ndPerson: Word('убаюкаешь', 3),
  singular3rdPerson: Word('убаюкает', 3),
  plural1stPerson: Word('убаюкаем', 3),
  plural2ndPerson: Word('убаюкаете', 3),
  plural3rdPerson: Word('убаюкают', 3),
  masculinePast: Word('убаюкал', 3),
  femininePast: Word('убаюкала', 3),
  neuterPast: Word('убаюкало', 3),
  pluralPast: Word('убаюкали', 3),
  imperativeInformal: Word('убаюкай', 3),
  imperativeFormal: Word('убаюкайте', 3),
  imperfect: ['баюкать'],
};

perfectVerbs.set(убаюкать.name.text, убаюкать);

export { убаюкать };