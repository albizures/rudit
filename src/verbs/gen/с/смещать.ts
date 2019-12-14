import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смещать: PerfectVerb = {
  name: Word('смещать', 4),
  singular1stPerson: Word('смещаю', 4),
  singular2ndPerson: Word('смещаешь', 4),
  singular3rdPerson: Word('смещает', 4),
  plural1stPerson: Word('смещаем', 4),
  plural2ndPerson: Word('смещаете', 4),
  plural3rdPerson: Word('смещают', 4),
  masculinePast: Word('смещал', 4),
  femininePast: Word('смещала', 4),
  neuterPast: Word('смещало', 4),
  pluralPast: Word('смещали', 4),
  imperativeInformal: Word('смещай', 4),
  imperativeFormal: Word('смещайте', 4),
  imperfect: [],
};

perfectVerbs.set(смещать.name.text, смещать);

export { смещать };