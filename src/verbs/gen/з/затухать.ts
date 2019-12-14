import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затухать: PerfectVerb = {
  name: Word('затухать', 5),
  singular1stPerson: Word('затухаю', 5),
  singular2ndPerson: Word('затухаешь', 5),
  singular3rdPerson: Word('затухает', 5),
  plural1stPerson: Word('затухаем', 5),
  plural2ndPerson: Word('затухаете', 5),
  plural3rdPerson: Word('затухают', 5),
  masculinePast: Word('затухал', 5),
  femininePast: Word('затухала', 5),
  neuterPast: Word('затухало', 5),
  pluralPast: Word('затухали', 5),
  imperativeInformal: Word('затухай', 5),
  imperativeFormal: Word('затухайте', 5),
  imperfect: [],
};

perfectVerbs.set(затухать.name.text, затухать);

export { затухать };