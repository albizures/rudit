import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отягчать: PerfectVerb = {
  name: Word('отягчать', 5),
  singular1stPerson: Word('отягчаю', 5),
  singular2ndPerson: Word('отягчаешь', 5),
  singular3rdPerson: Word('отягчает', 5),
  plural1stPerson: Word('отягчаем', 5),
  plural2ndPerson: Word('отягчаете', 5),
  plural3rdPerson: Word('отягчают', 5),
  masculinePast: Word('отягчал', 5),
  femininePast: Word('отягчала', 5),
  neuterPast: Word('отягчало', 5),
  pluralPast: Word('отягчали', 5),
  imperativeInformal: Word('отягчай', 5),
  imperativeFormal: Word('отягчайте', 5),
  imperfect: [],
};

perfectVerbs.set(отягчать.name.text, отягчать);

export { отягчать };