import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачерпывать: PerfectVerb = {
  name: Word('зачерпывать', 3),
  singular1stPerson: Word('зачерпываю', 3),
  singular2ndPerson: Word('зачерпываешь', 3),
  singular3rdPerson: Word('зачерпывает', 3),
  plural1stPerson: Word('зачерпываем', 3),
  plural2ndPerson: Word('зачерпываете', 3),
  plural3rdPerson: Word('зачерпывают', 3),
  masculinePast: Word('зачерпывал', 3),
  femininePast: Word('зачерпывала', 3),
  neuterPast: Word('зачерпывало', 3),
  pluralPast: Word('зачерпывали', 3),
  imperativeInformal: Word('зачерпывай', 3),
  imperativeFormal: Word('зачерпывайте', 3),
  imperfect: [],
};

perfectVerbs.set(зачерпывать.name.text, зачерпывать);

export { зачерпывать };