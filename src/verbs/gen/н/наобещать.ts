import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наобещать: PerfectVerb = {
  name: Word('наобещать', 6),
  singular1stPerson: Word('наобещаю', 6),
  singular2ndPerson: Word('наобещаешь', 6),
  singular3rdPerson: Word('наобещает', 6),
  plural1stPerson: Word('наобещаем', 6),
  plural2ndPerson: Word('наобещаете', 6),
  plural3rdPerson: Word('наобещают', 6),
  masculinePast: Word('наобещал', 6),
  femininePast: Word('наобещала', 6),
  neuterPast: Word('наобещало', 6),
  pluralPast: Word('наобещали', 6),
  imperativeInformal: Word('наобещай', 6),
  imperativeFormal: Word('наобещайте', 6),
  imperfect: [],
};

perfectVerbs.set(наобещать.name.text, наобещать);

export { наобещать };