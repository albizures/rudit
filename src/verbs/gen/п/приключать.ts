import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приключать: PerfectVerb = {
  name: Word('приключать', 7),
  singular1stPerson: Word('приключаю', 7),
  singular2ndPerson: Word('приключаешь', 7),
  singular3rdPerson: Word('приключает', 7),
  plural1stPerson: Word('приключаем', 7),
  plural2ndPerson: Word('приключаете', 7),
  plural3rdPerson: Word('приключают', 7),
  masculinePast: Word('приключал', 7),
  femininePast: Word('приключала', 7),
  neuterPast: Word('приключало', 7),
  pluralPast: Word('приключали', 7),
  imperativeInformal: Word('приключай', 7),
  imperativeFormal: Word('приключайте', 7),
  imperfect: [],
};

perfectVerbs.set(приключать.name.text, приключать);

export { приключать };