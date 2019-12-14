import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбирать: PerfectVerb = {
  name: Word('выбирать', 5),
  singular1stPerson: Word('выбираю', 5),
  singular2ndPerson: Word('выбираешь', 5),
  singular3rdPerson: Word('выбирает', 5),
  plural1stPerson: Word('выбираем', 5),
  plural2ndPerson: Word('выбираете', 5),
  plural3rdPerson: Word('выбирают', 5),
  masculinePast: Word('выбирал', 5),
  femininePast: Word('выбирала', 5),
  neuterPast: Word('выбирало', 5),
  pluralPast: Word('выбирали', 5),
  imperativeInformal: Word('выбирай', 5),
  imperativeFormal: Word('выбирайте', 5),
  imperfect: ['выбрать'],
};

perfectVerbs.set(выбирать.name.text, выбирать);

export { выбирать };