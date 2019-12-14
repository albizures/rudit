import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлопывать: PerfectVerb = {
  name: Word('захлопывать', 4),
  singular1stPerson: Word('захлопываю', 4),
  singular2ndPerson: Word('захлопываешь', 4),
  singular3rdPerson: Word('захлопывает', 4),
  plural1stPerson: Word('захлопываем', 4),
  plural2ndPerson: Word('захлопываете', 4),
  plural3rdPerson: Word('захлопывают', 4),
  masculinePast: Word('захлопывал', 4),
  femininePast: Word('захлопывала', 4),
  neuterPast: Word('захлопывало', 4),
  pluralPast: Word('захлопывали', 4),
  imperativeInformal: Word('захлопывай', 4),
  imperativeFormal: Word('захлопывайте', 4),
  imperfect: [],
};

perfectVerbs.set(захлопывать.name.text, захлопывать);

export { захлопывать };