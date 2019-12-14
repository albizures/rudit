import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набухать: PerfectVerb = {
  name: Word('набухать', 3),
  singular1stPerson: Word('набухаю', 3),
  singular2ndPerson: Word('набухаешь', 3),
  singular3rdPerson: Word('набухает', 3),
  plural1stPerson: Word('набухаем', 3),
  plural2ndPerson: Word('набухаете', 3),
  plural3rdPerson: Word('набухают', 3),
  masculinePast: Word('набухал', 3),
  femininePast: Word('набухала', 3),
  neuterPast: Word('набухало', 3),
  pluralPast: Word('набухали', 3),
  imperativeInformal: Word('набухай', 3),
  imperativeFormal: Word('набухайте', 3),
  imperfect: [],
};

perfectVerbs.set(набухать.name.text, набухать);

export { набухать };