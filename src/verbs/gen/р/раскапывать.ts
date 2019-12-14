import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскапывать: PerfectVerb = {
  name: Word('раскапывать', 4),
  singular1stPerson: Word('раскапываю', 4),
  singular2ndPerson: Word('раскапываешь', 4),
  singular3rdPerson: Word('раскапывает', 4),
  plural1stPerson: Word('раскапываем', 4),
  plural2ndPerson: Word('раскапываете', 4),
  plural3rdPerson: Word('раскапывают', 4),
  masculinePast: Word('раскапывал', 4),
  femininePast: Word('раскапывала', 4),
  neuterPast: Word('раскапывало', 4),
  pluralPast: Word('раскапывали', 4),
  imperativeInformal: Word('раскапывай', 4),
  imperativeFormal: Word('раскапывайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскапывать.name.text, раскапывать);

export { раскапывать };