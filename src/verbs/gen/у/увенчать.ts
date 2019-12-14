import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увенчать: PerfectVerb = {
  name: Word('увенчать', 5),
  singular1stPerson: Word('увенчаю', 5),
  singular2ndPerson: Word('увенчаешь', 5),
  singular3rdPerson: Word('увенчает', 5),
  plural1stPerson: Word('увенчаем', 5),
  plural2ndPerson: Word('увенчаете', 5),
  plural3rdPerson: Word('увенчают', 5),
  masculinePast: Word('увенчал', 5),
  femininePast: Word('увенчала', 5),
  neuterPast: Word('увенчало', 5),
  pluralPast: Word('увенчали', 5),
  imperativeInformal: Word('увенчай', 5),
  imperativeFormal: Word('увенчайте', 5),
  imperfect: [],
};

perfectVerbs.set(увенчать.name.text, увенчать);

export { увенчать };