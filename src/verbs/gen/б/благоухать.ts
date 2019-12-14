import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благоухать: PerfectVerb = {
  name: Word('благоухать', 7),
  singular1stPerson: Word('благоухаю', 7),
  singular2ndPerson: Word('благоухаешь', 7),
  singular3rdPerson: Word('благоухает', 7),
  plural1stPerson: Word('благоухаем', 7),
  plural2ndPerson: Word('благоухаете', 7),
  plural3rdPerson: Word('благоухают', 7),
  masculinePast: Word('благоухал', 7),
  femininePast: Word('благоухала', 7),
  neuterPast: Word('благоухало', 7),
  pluralPast: Word('благоухали', 7),
  imperativeInformal: Word('благоухай', 7),
  imperativeFormal: Word('благоухайте', 7),
  imperfect: [],
};

perfectVerbs.set(благоухать.name.text, благоухать);

export { благоухать };