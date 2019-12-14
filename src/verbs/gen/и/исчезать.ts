import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчезать: PerfectVerb = {
  name: Word('исчезать', 5),
  singular1stPerson: Word('исчезаю', 5),
  singular2ndPerson: Word('исчезаешь', 5),
  singular3rdPerson: Word('исчезает', 5),
  plural1stPerson: Word('исчезаем', 5),
  plural2ndPerson: Word('исчезаете', 5),
  plural3rdPerson: Word('исчезают', 5),
  masculinePast: Word('исчезал', 5),
  femininePast: Word('исчезала', 5),
  neuterPast: Word('исчезало', 5),
  pluralPast: Word('исчезали', 5),
  imperativeInformal: Word('исчезай', 5),
  imperativeFormal: Word('исчезайте', 5),
  imperfect: ['исчезнуть'],
};

perfectVerbs.set(исчезать.name.text, исчезать);

export { исчезать };