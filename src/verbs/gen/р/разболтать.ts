import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разболтать: PerfectVerb = {
  name: Word('разболтать', 7),
  singular1stPerson: Word('разболтаю', 7),
  singular2ndPerson: Word('разболтаешь', 7),
  singular3rdPerson: Word('разболтает', 7),
  plural1stPerson: Word('разболтаем', 7),
  plural2ndPerson: Word('разболтаете', 7),
  plural3rdPerson: Word('разболтают', 7),
  masculinePast: Word('разболтал', 7),
  femininePast: Word('разболтала', 7),
  neuterPast: Word('разболтало', 7),
  pluralPast: Word('разболтали', 7),
  imperativeInformal: Word('разболтай', 7),
  imperativeFormal: Word('разболтайте', 7),
  imperfect: [],
};

perfectVerbs.set(разболтать.name.text, разболтать);

export { разболтать };