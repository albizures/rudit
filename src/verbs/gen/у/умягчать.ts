import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умягчать: PerfectVerb = {
  name: Word('умягчать', 5),
  singular1stPerson: Word('умягчаю', 5),
  singular2ndPerson: Word('умягчаешь', 5),
  singular3rdPerson: Word('умягчает', 5),
  plural1stPerson: Word('умягчаем', 5),
  plural2ndPerson: Word('умягчаете', 5),
  plural3rdPerson: Word('умягчают', 5),
  masculinePast: Word('умягчал', 5),
  femininePast: Word('умягчала', 5),
  neuterPast: Word('умягчало', 5),
  pluralPast: Word('умягчали', 5),
  imperativeInformal: Word('умягчай', 5),
  imperativeFormal: Word('умягчайте', 5),
  imperfect: [],
};

perfectVerbs.set(умягчать.name.text, умягчать);

export { умягчать };