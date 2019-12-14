import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разузнать: PerfectVerb = {
  name: Word('разузнать', 6),
  singular1stPerson: Word('разузнаю', 6),
  singular2ndPerson: Word('разузнаешь', 6),
  singular3rdPerson: Word('разузнает', 6),
  plural1stPerson: Word('разузнаем', 6),
  plural2ndPerson: Word('разузнаете', 6),
  plural3rdPerson: Word('разузнают', 6),
  masculinePast: Word('разузнал', 6),
  femininePast: Word('разузнала', 6),
  neuterPast: Word('разузнало', 6),
  pluralPast: Word('разузнали', 6),
  imperativeInformal: Word('разузнай', 6),
  imperativeFormal: Word('разузнайте', 6),
  imperfect: [],
};

perfectVerbs.set(разузнать.name.text, разузнать);

export { разузнать };