import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощупать: PerfectVerb = {
  name: Word('ощупать', 2),
  singular1stPerson: Word('ощупаю', 2),
  singular2ndPerson: Word('ощупаешь', 2),
  singular3rdPerson: Word('ощупает', 2),
  plural1stPerson: Word('ощупаем', 2),
  plural2ndPerson: Word('ощупаете', 2),
  plural3rdPerson: Word('ощупают', 2),
  masculinePast: Word('ощупал', 2),
  femininePast: Word('ощупала', 2),
  neuterPast: Word('ощупало', 2),
  pluralPast: Word('ощупали', 2),
  imperativeInformal: Word('ощупай', 2),
  imperativeFormal: Word('ощупайте', 2),
  imperfect: [],
};

perfectVerbs.set(ощупать.name.text, ощупать);

export { ощупать };