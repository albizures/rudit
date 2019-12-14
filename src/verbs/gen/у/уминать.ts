import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уминать: PerfectVerb = {
  name: Word('уминать', 4),
  singular1stPerson: Word('уминаю', 4),
  singular2ndPerson: Word('уминаешь', 4),
  singular3rdPerson: Word('уминает', 4),
  plural1stPerson: Word('уминаем', 4),
  plural2ndPerson: Word('уминаете', 4),
  plural3rdPerson: Word('уминают', 4),
  masculinePast: Word('уминал', 4),
  femininePast: Word('уминала', 4),
  neuterPast: Word('уминало', 4),
  pluralPast: Word('уминали', 4),
  imperativeInformal: Word('уминай', 4),
  imperativeFormal: Word('уминайте', 4),
  imperfect: [],
};

perfectVerbs.set(уминать.name.text, уминать);

export { уминать };