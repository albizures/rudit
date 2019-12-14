import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занимать: PerfectVerb = {
  name: Word('занимать', 5),
  singular1stPerson: Word('занимаю', 5),
  singular2ndPerson: Word('занимаешь', 5),
  singular3rdPerson: Word('занимает', 5),
  plural1stPerson: Word('занимаем', 5),
  plural2ndPerson: Word('занимаете', 5),
  plural3rdPerson: Word('занимают', 5),
  masculinePast: Word('занимал', 5),
  femininePast: Word('занимала', 5),
  neuterPast: Word('занимало', 5),
  pluralPast: Word('занимали', 5),
  imperativeInformal: Word('занимай', 5),
  imperativeFormal: Word('занимайте', 5),
  imperfect: ['занять'],
};

perfectVerbs.set(занимать.name.text, занимать);

export { занимать };