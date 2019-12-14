import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскутывать: PerfectVerb = {
  name: Word('раскутывать', 4),
  singular1stPerson: Word('раскутываю', 4),
  singular2ndPerson: Word('раскутываешь', 4),
  singular3rdPerson: Word('раскутывает', 4),
  plural1stPerson: Word('раскутываем', 4),
  plural2ndPerson: Word('раскутываете', 4),
  plural3rdPerson: Word('раскутывают', 4),
  masculinePast: Word('раскутывал', 4),
  femininePast: Word('раскутывала', 4),
  neuterPast: Word('раскутывало', 4),
  pluralPast: Word('раскутывали', 4),
  imperativeInformal: Word('раскутывай', 4),
  imperativeFormal: Word('раскутывайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскутывать.name.text, раскутывать);

export { раскутывать };