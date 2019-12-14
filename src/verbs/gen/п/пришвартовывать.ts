import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришвартовывать: PerfectVerb = {
  name: Word('пришвартовывать', 8),
  singular1stPerson: Word('пришвартовываю', 8),
  singular2ndPerson: Word('пришвартовываешь', 8),
  singular3rdPerson: Word('пришвартовывает', 8),
  plural1stPerson: Word('пришвартовываем', 8),
  plural2ndPerson: Word('пришвартовываете', 8),
  plural3rdPerson: Word('пришвартовывают', 8),
  masculinePast: Word('пришвартовывал', 8),
  femininePast: Word('пришвартовывала', 8),
  neuterPast: Word('пришвартовывало', 8),
  pluralPast: Word('пришвартовывали', 8),
  imperativeInformal: Word('пришвартовывай', 8),
  imperativeFormal: Word('пришвартовывайте', 8),
  imperfect: [],
};

perfectVerbs.set(пришвартовывать.name.text, пришвартовывать);

export { пришвартовывать };