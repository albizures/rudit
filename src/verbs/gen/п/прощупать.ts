import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прощупать: PerfectVerb = {
  name: Word('прощупать', 4),
  singular1stPerson: Word('прощупаю', 4),
  singular2ndPerson: Word('прощупаешь', 4),
  singular3rdPerson: Word('прощупает', 4),
  plural1stPerson: Word('прощупаем', 4),
  plural2ndPerson: Word('прощупаете', 4),
  plural3rdPerson: Word('прощупают', 4),
  masculinePast: Word('прощупал', 4),
  femininePast: Word('прощупала', 4),
  neuterPast: Word('прощупало', 4),
  pluralPast: Word('прощупали', 4),
  imperativeInformal: Word('прощупай', 4),
  imperativeFormal: Word('прощупайте', 4),
  imperfect: [],
};

perfectVerbs.set(прощупать.name.text, прощупать);

export { прощупать };