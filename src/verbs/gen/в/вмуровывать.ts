import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмуровывать: PerfectVerb = {
  name: Word('вмуровывать', 4),
  singular1stPerson: Word('вмуровываю', 4),
  singular2ndPerson: Word('вмуровываешь', 4),
  singular3rdPerson: Word('вмуровывает', 4),
  plural1stPerson: Word('вмуровываем', 4),
  plural2ndPerson: Word('вмуровываете', 4),
  plural3rdPerson: Word('вмуровывают', 4),
  masculinePast: Word('вмуровывал', 4),
  femininePast: Word('вмуровывала', 4),
  neuterPast: Word('вмуровывало', 4),
  pluralPast: Word('вмуровывали', 4),
  imperativeInformal: Word('вмуровывай', 4),
  imperativeFormal: Word('вмуровывайте', 4),
  imperfect: [],
};

perfectVerbs.set(вмуровывать.name.text, вмуровывать);

export { вмуровывать };