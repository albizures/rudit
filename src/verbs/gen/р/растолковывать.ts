import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растолковывать: PerfectVerb = {
  name: Word('растолковывать', 7),
  singular1stPerson: Word('растолковываю', 7),
  singular2ndPerson: Word('растолковываешь', 7),
  singular3rdPerson: Word('растолковывает', 7),
  plural1stPerson: Word('растолковываем', 7),
  plural2ndPerson: Word('растолковываете', 7),
  plural3rdPerson: Word('растолковывают', 7),
  masculinePast: Word('растолковывал', 7),
  femininePast: Word('растолковывала', 7),
  neuterPast: Word('растолковывало', 7),
  pluralPast: Word('растолковывали', 7),
  imperativeInformal: Word('растолковывай', 7),
  imperativeFormal: Word('растолковывайте', 7),
  imperfect: [],
};

perfectVerbs.set(растолковывать.name.text, растолковывать);

export { растолковывать };