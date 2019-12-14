import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совмещать: PerfectVerb = {
  name: Word('совмещать', 6),
  singular1stPerson: Word('совмещаю', 6),
  singular2ndPerson: Word('совмещаешь', 6),
  singular3rdPerson: Word('совмещает', 6),
  plural1stPerson: Word('совмещаем', 6),
  plural2ndPerson: Word('совмещаете', 6),
  plural3rdPerson: Word('совмещают', 6),
  masculinePast: Word('совмещал', 6),
  femininePast: Word('совмещала', 6),
  neuterPast: Word('совмещало', 6),
  pluralPast: Word('совмещали', 6),
  imperativeInformal: Word('совмещай', 6),
  imperativeFormal: Word('совмещайте', 6),
  imperfect: [],
};

perfectVerbs.set(совмещать.name.text, совмещать);

export { совмещать };