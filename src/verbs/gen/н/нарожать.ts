import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарожать: PerfectVerb = {
  name: Word('нарожать', 5),
  singular1stPerson: Word('нарожаю', 5),
  singular2ndPerson: Word('нарожаешь', 5),
  singular3rdPerson: Word('нарожает', 5),
  plural1stPerson: Word('нарожаем', 5),
  plural2ndPerson: Word('нарожаете', 5),
  plural3rdPerson: Word('нарожают', 5),
  masculinePast: Word('нарожал', 5),
  femininePast: Word('нарожала', 5),
  neuterPast: Word('нарожало', 5),
  pluralPast: Word('нарожали', 5),
  imperativeInformal: Word('нарожай', 5),
  imperativeFormal: Word('нарожайте', 5),
  imperfect: [],
};

perfectVerbs.set(нарожать.name.text, нарожать);

export { нарожать };