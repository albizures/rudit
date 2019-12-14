import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережимать: PerfectVerb = {
  name: Word('пережимать', 7),
  singular1stPerson: Word('пережимаю', 7),
  singular2ndPerson: Word('пережимаешь', 7),
  singular3rdPerson: Word('пережимает', 7),
  plural1stPerson: Word('пережимаем', 7),
  plural2ndPerson: Word('пережимаете', 7),
  plural3rdPerson: Word('пережимают', 7),
  masculinePast: Word('пережимал', 7),
  femininePast: Word('пережимала', 7),
  neuterPast: Word('пережимало', 7),
  pluralPast: Word('пережимали', 7),
  imperativeInformal: Word('пережимай', 7),
  imperativeFormal: Word('пережимайте', 7),
  imperfect: [],
};

perfectVerbs.set(пережимать.name.text, пережимать);

export { пережимать };