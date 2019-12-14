import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетирать: PerfectVerb = {
  name: Word('перетирать', 7),
  singular1stPerson: Word('перетираю', 7),
  singular2ndPerson: Word('перетираешь', 7),
  singular3rdPerson: Word('перетирает', 7),
  plural1stPerson: Word('перетираем', 7),
  plural2ndPerson: Word('перетираете', 7),
  plural3rdPerson: Word('перетирают', 7),
  masculinePast: Word('перетирал', 7),
  femininePast: Word('перетирала', 7),
  neuterPast: Word('перетирало', 7),
  pluralPast: Word('перетирали', 7),
  imperativeInformal: Word('перетирай', 7),
  imperativeFormal: Word('перетирайте', 7),
  imperfect: [],
};

perfectVerbs.set(перетирать.name.text, перетирать);

export { перетирать };