import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внимать: PerfectVerb = {
  name: Word('внимать', 4),
  singular1stPerson: Word('внимаю', 4),
  singular2ndPerson: Word('внимаешь', 4),
  singular3rdPerson: Word('внимает', 4),
  plural1stPerson: Word('внимаем', 4),
  plural2ndPerson: Word('внимаете', 4),
  plural3rdPerson: Word('внимают', 4),
  masculinePast: Word('внимал', 4),
  femininePast: Word('внимала', 4),
  neuterPast: Word('внимало', 4),
  pluralPast: Word('внимали', 4),
  imperativeInformal: Word('внимай', 4),
  imperativeFormal: Word('внимайте', 4),
  imperfect: [],
};

perfectVerbs.set(внимать.name.text, внимать);

export { внимать };