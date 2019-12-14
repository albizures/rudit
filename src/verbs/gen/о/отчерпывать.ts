import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчерпывать: PerfectVerb = {
  name: Word('отчерпывать', 3),
  singular1stPerson: Word('отчерпываю', 3),
  singular2ndPerson: Word('отчерпываешь', 3),
  singular3rdPerson: Word('отчерпывает', 3),
  plural1stPerson: Word('отчерпываем', 3),
  plural2ndPerson: Word('отчерпываете', 3),
  plural3rdPerson: Word('отчерпывают', 3),
  masculinePast: Word('отчерпывал', 3),
  femininePast: Word('отчерпывала', 3),
  neuterPast: Word('отчерпывало', 3),
  pluralPast: Word('отчерпывали', 3),
  imperativeInformal: Word('отчерпывай', 3),
  imperativeFormal: Word('отчерпывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отчерпывать.name.text, отчерпывать);

export { отчерпывать };