import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втирать: PerfectVerb = {
  name: Word('втирать', 4),
  singular1stPerson: Word('втираю', 4),
  singular2ndPerson: Word('втираешь', 4),
  singular3rdPerson: Word('втирает', 4),
  plural1stPerson: Word('втираем', 4),
  plural2ndPerson: Word('втираете', 4),
  plural3rdPerson: Word('втирают', 4),
  masculinePast: Word('втирал', 4),
  femininePast: Word('втирала', 4),
  neuterPast: Word('втирало', 4),
  pluralPast: Word('втирали', 4),
  imperativeInformal: Word('втирай', 4),
  imperativeFormal: Word('втирайте', 4),
  imperfect: [],
};

perfectVerbs.set(втирать.name.text, втирать);

export { втирать };