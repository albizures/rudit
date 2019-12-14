import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const черпать: PerfectVerb = {
  name: Word('черпать', 1),
  singular1stPerson: Word('черпаю', 1),
  singular2ndPerson: Word('черпаешь', 1),
  singular3rdPerson: Word('черпает', 1),
  plural1stPerson: Word('черпаем', 1),
  plural2ndPerson: Word('черпаете', 1),
  plural3rdPerson: Word('черпают', 1),
  masculinePast: Word('черпал', 1),
  femininePast: Word('черпала', 1),
  neuterPast: Word('черпало', 1),
  pluralPast: Word('черпали', 1),
  imperativeInformal: Word('черпай', 1),
  imperativeFormal: Word('черпайте', 1),
  imperfect: [],
};

perfectVerbs.set(черпать.name.text, черпать);

export { черпать };