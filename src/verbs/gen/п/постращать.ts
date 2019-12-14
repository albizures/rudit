import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постращать: PerfectVerb = {
  name: Word('постращать', 7),
  singular1stPerson: Word('постращаю', 7),
  singular2ndPerson: Word('постращаешь', 7),
  singular3rdPerson: Word('постращает', 7),
  plural1stPerson: Word('постращаем', 7),
  plural2ndPerson: Word('постращаете', 7),
  plural3rdPerson: Word('постращают', 7),
  masculinePast: Word('постращал', 7),
  femininePast: Word('постращала', 7),
  neuterPast: Word('постращало', 7),
  pluralPast: Word('постращали', 7),
  imperativeInformal: Word('постращай', 7),
  imperativeFormal: Word('постращайте', 7),
  imperfect: [],
};

perfectVerbs.set(постращать.name.text, постращать);

export { постращать };