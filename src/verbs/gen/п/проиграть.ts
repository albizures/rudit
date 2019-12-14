import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проиграть: PerfectVerb = {
  name: Word('проиграть', 6),
  singular1stPerson: Word('проиграю', 6),
  singular2ndPerson: Word('проиграешь', 6),
  singular3rdPerson: Word('проиграет', 6),
  plural1stPerson: Word('проиграем', 6),
  plural2ndPerson: Word('проиграете', 6),
  plural3rdPerson: Word('проиграют', 6),
  masculinePast: Word('проиграл', 6),
  femininePast: Word('проиграла', 6),
  neuterPast: Word('проиграло', 6),
  pluralPast: Word('проиграли', 6),
  imperativeInformal: Word('проиграй', 6),
  imperativeFormal: Word('проиграйте', 6),
  imperfect: [],
};

perfectVerbs.set(проиграть.name.text, проиграть);

export { проиграть };