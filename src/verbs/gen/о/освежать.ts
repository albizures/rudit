import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освежать: PerfectVerb = {
  name: Word('освежать', 5),
  singular1stPerson: Word('освежаю', 5),
  singular2ndPerson: Word('освежаешь', 5),
  singular3rdPerson: Word('освежает', 5),
  plural1stPerson: Word('освежаем', 5),
  plural2ndPerson: Word('освежаете', 5),
  plural3rdPerson: Word('освежают', 5),
  masculinePast: Word('освежал', 5),
  femininePast: Word('освежала', 5),
  neuterPast: Word('освежало', 5),
  pluralPast: Word('освежали', 5),
  imperativeInformal: Word('освежай', 5),
  imperativeFormal: Word('освежайте', 5),
  imperfect: [],
};

perfectVerbs.set(освежать.name.text, освежать);

export { освежать };