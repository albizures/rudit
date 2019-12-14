import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наминать: PerfectVerb = {
  name: Word('наминать', 5),
  singular1stPerson: Word('наминаю', 5),
  singular2ndPerson: Word('наминаешь', 5),
  singular3rdPerson: Word('наминает', 5),
  plural1stPerson: Word('наминаем', 5),
  plural2ndPerson: Word('наминаете', 5),
  plural3rdPerson: Word('наминают', 5),
  masculinePast: Word('наминал', 5),
  femininePast: Word('наминала', 5),
  neuterPast: Word('наминало', 5),
  pluralPast: Word('наминали', 5),
  imperativeInformal: Word('наминай', 5),
  imperativeFormal: Word('наминайте', 5),
  imperfect: [],
};

perfectVerbs.set(наминать.name.text, наминать);

export { наминать };