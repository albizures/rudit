import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронимать: PerfectVerb = {
  name: Word('пронимать', 6),
  singular1stPerson: Word('пронимаю', 6),
  singular2ndPerson: Word('пронимаешь', 6),
  singular3rdPerson: Word('пронимает', 6),
  plural1stPerson: Word('пронимаем', 6),
  plural2ndPerson: Word('пронимаете', 6),
  plural3rdPerson: Word('пронимают', 6),
  masculinePast: Word('пронимал', 6),
  femininePast: Word('пронимала', 6),
  neuterPast: Word('пронимало', 6),
  pluralPast: Word('пронимали', 6),
  imperativeInformal: Word('пронимай', 6),
  imperativeFormal: Word('пронимайте', 6),
  imperfect: [],
};

perfectVerbs.set(пронимать.name.text, пронимать);

export { пронимать };