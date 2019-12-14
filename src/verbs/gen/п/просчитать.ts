import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просчитать: PerfectVerb = {
  name: Word('просчитать', 7),
  singular1stPerson: Word('просчитаю', 7),
  singular2ndPerson: Word('просчитаешь', 7),
  singular3rdPerson: Word('просчитает', 7),
  plural1stPerson: Word('просчитаем', 7),
  plural2ndPerson: Word('просчитаете', 7),
  plural3rdPerson: Word('просчитают', 7),
  masculinePast: Word('просчитал', 7),
  femininePast: Word('просчитала', 7),
  neuterPast: Word('просчитало', 7),
  pluralPast: Word('просчитали', 7),
  imperativeInformal: Word('просчитай', 7),
  imperativeFormal: Word('просчитайте', 7),
  imperfect: [],
};

perfectVerbs.set(просчитать.name.text, просчитать);

export { просчитать };