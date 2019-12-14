import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отнимать: PerfectVerb = {
  name: Word('отнимать', 5),
  singular1stPerson: Word('отнимаю', 5),
  singular2ndPerson: Word('отнимаешь', 5),
  singular3rdPerson: Word('отнимает', 5),
  plural1stPerson: Word('отнимаем', 5),
  plural2ndPerson: Word('отнимаете', 5),
  plural3rdPerson: Word('отнимают', 5),
  masculinePast: Word('отнимал', 5),
  femininePast: Word('отнимала', 5),
  neuterPast: Word('отнимало', 5),
  pluralPast: Word('отнимали', 5),
  imperativeInformal: Word('отнимай', 5),
  imperativeFormal: Word('отнимайте', 5),
  imperfect: ['отнять'],
};

perfectVerbs.set(отнимать.name.text, отнимать);

export { отнимать };