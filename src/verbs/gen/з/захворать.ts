import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захворать: PerfectVerb = {
  name: Word('захворать', 6),
  singular1stPerson: Word('захвораю', 6),
  singular2ndPerson: Word('захвораешь', 6),
  singular3rdPerson: Word('захворает', 6),
  plural1stPerson: Word('захвораем', 6),
  plural2ndPerson: Word('захвораете', 6),
  plural3rdPerson: Word('захворают', 6),
  masculinePast: Word('захворал', 6),
  femininePast: Word('захворала', 6),
  neuterPast: Word('захворало', 6),
  pluralPast: Word('захворали', 6),
  imperativeInformal: Word('захворай', 6),
  imperativeFormal: Word('захворайте', 6),
  imperfect: [],
};

perfectVerbs.set(захворать.name.text, захворать);

export { захворать };