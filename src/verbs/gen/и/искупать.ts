import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искупать: PerfectVerb = {
  name: Word('искупать', 5),
  singular1stPerson: Word('искупаю', 5),
  singular2ndPerson: Word('искупаешь', 5),
  singular3rdPerson: Word('искупает', 5),
  plural1stPerson: Word('искупаем', 5),
  plural2ndPerson: Word('искупаете', 5),
  plural3rdPerson: Word('искупают', 5),
  masculinePast: Word('искупал', 5),
  femininePast: Word('искупала', 5),
  neuterPast: Word('искупало', 5),
  pluralPast: Word('искупали', 5),
  imperativeInformal: Word('искупай', 5),
  imperativeFormal: Word('искупайте', 5),
  imperfect: ['купать'],
};

perfectVerbs.set(искупать.name.text, искупать);

export { искупать };