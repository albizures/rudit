import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откупать: PerfectVerb = {
  name: Word('откупать', 5),
  singular1stPerson: Word('откупаю', 5),
  singular2ndPerson: Word('откупаешь', 5),
  singular3rdPerson: Word('откупает', 5),
  plural1stPerson: Word('откупаем', 5),
  plural2ndPerson: Word('откупаете', 5),
  plural3rdPerson: Word('откупают', 5),
  masculinePast: Word('откупал', 5),
  femininePast: Word('откупала', 5),
  neuterPast: Word('откупало', 5),
  pluralPast: Word('откупали', 5),
  imperativeInformal: Word('откупай', 5),
  imperativeFormal: Word('откупайте', 5),
  imperfect: [],
};

perfectVerbs.set(откупать.name.text, откупать);

export { откупать };