import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассасывать: PerfectVerb = {
  name: Word('рассасывать', 4),
  singular1stPerson: Word('рассасываю', 4),
  singular2ndPerson: Word('рассасываешь', 4),
  singular3rdPerson: Word('рассасывает', 4),
  plural1stPerson: Word('рассасываем', 4),
  plural2ndPerson: Word('рассасываете', 4),
  plural3rdPerson: Word('рассасывают', 4),
  masculinePast: Word('рассасывал', 4),
  femininePast: Word('рассасывала', 4),
  neuterPast: Word('рассасывало', 4),
  pluralPast: Word('рассасывали', 4),
  imperativeInformal: Word('рассасывай', 4),
  imperativeFormal: Word('рассасывайте', 4),
  imperfect: [],
};

perfectVerbs.set(рассасывать.name.text, рассасывать);

export { рассасывать };