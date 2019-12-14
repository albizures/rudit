import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухать: PerfectVerb = {
  name: Word('ухать', 0),
  singular1stPerson: Word('ухаю', 0),
  singular2ndPerson: Word('ухаешь', 0),
  singular3rdPerson: Word('ухает', 0),
  plural1stPerson: Word('ухаем', 0),
  plural2ndPerson: Word('ухаете', 0),
  plural3rdPerson: Word('ухают', 0),
  masculinePast: Word('ухал', 0),
  femininePast: Word('ухала', 0),
  neuterPast: Word('ухало', 0),
  pluralPast: Word('ухали', 0),
  imperativeInformal: Word('ухай', 0),
  imperativeFormal: Word('ухайте', 0),
  imperfect: [],
};

perfectVerbs.set(ухать.name.text, ухать);

export { ухать };