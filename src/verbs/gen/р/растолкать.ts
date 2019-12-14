import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растолкать: PerfectVerb = {
  name: Word('растолкать', 7),
  singular1stPerson: Word('растолкаю', 7),
  singular2ndPerson: Word('растолкаешь', 7),
  singular3rdPerson: Word('растолкает', 7),
  plural1stPerson: Word('растолкаем', 7),
  plural2ndPerson: Word('растолкаете', 7),
  plural3rdPerson: Word('растолкают', 7),
  masculinePast: Word('растолкал', 7),
  femininePast: Word('растолкала', 7),
  neuterPast: Word('растолкало', 7),
  pluralPast: Word('растолкали', 7),
  imperativeInformal: Word('растолкай', 7),
  imperativeFormal: Word('растолкайте', 7),
  imperfect: [],
};

perfectVerbs.set(растолкать.name.text, растолкать);

export { растолкать };