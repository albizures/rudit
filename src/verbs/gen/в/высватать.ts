import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высватать: PerfectVerb = {
  name: Word('высватать', 1),
  singular1stPerson: Word('высватаю', 1),
  singular2ndPerson: Word('высватаешь', 1),
  singular3rdPerson: Word('высватает', 1),
  plural1stPerson: Word('высватаем', 1),
  plural2ndPerson: Word('высватаете', 1),
  plural3rdPerson: Word('высватают', 1),
  masculinePast: Word('высватал', 1),
  femininePast: Word('высватала', 1),
  neuterPast: Word('высватало', 1),
  pluralPast: Word('высватали', 1),
  imperativeInformal: Word('высватай', 1),
  imperativeFormal: Word('высватайте', 1),
  imperfect: [],
};

perfectVerbs.set(высватать.name.text, высватать);

export { высватать };