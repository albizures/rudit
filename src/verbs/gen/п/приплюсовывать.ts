import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплюсовывать: PerfectVerb = {
  name: Word('приплюсовывать', 7),
  singular1stPerson: Word('приплюсовываю', 7),
  singular2ndPerson: Word('приплюсовываешь', 7),
  singular3rdPerson: Word('приплюсовывает', 7),
  plural1stPerson: Word('приплюсовываем', 7),
  plural2ndPerson: Word('приплюсовываете', 7),
  plural3rdPerson: Word('приплюсовывают', 7),
  masculinePast: Word('приплюсовывал', 7),
  femininePast: Word('приплюсовывала', 7),
  neuterPast: Word('приплюсовывало', 7),
  pluralPast: Word('приплюсовывали', 7),
  imperativeInformal: Word('приплюсовывай', 7),
  imperativeFormal: Word('приплюсовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(приплюсовывать.name.text, приплюсовывать);

export { приплюсовывать };