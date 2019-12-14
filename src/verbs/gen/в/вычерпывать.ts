import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычерпывать: PerfectVerb = {
  name: Word('вычерпывать', 3),
  singular1stPerson: Word('вычерпываю', 3),
  singular2ndPerson: Word('вычерпываешь', 3),
  singular3rdPerson: Word('вычерпывает', 3),
  plural1stPerson: Word('вычерпываем', 3),
  plural2ndPerson: Word('вычерпываете', 3),
  plural3rdPerson: Word('вычерпывают', 3),
  masculinePast: Word('вычерпывал', 3),
  femininePast: Word('вычерпывала', 3),
  neuterPast: Word('вычерпывало', 3),
  pluralPast: Word('вычерпывали', 3),
  imperativeInformal: Word('вычерпывай', 3),
  imperativeFormal: Word('вычерпывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вычерпывать.name.text, вычерпывать);

export { вычерпывать };