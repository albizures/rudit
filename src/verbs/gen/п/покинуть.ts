import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покинуть: PerfectVerb = {
  name: Word('покинуть', 3),
  singular1stPerson: Word('покину', 3),
  singular2ndPerson: Word('покинешь', 3),
  singular3rdPerson: Word('покинет', 3),
  plural1stPerson: Word('покинем', 3),
  plural2ndPerson: Word('покинете', 3),
  plural3rdPerson: Word('покинут', 3),
  masculinePast: Word('покинул', 3),
  femininePast: Word('покинула', 3),
  neuterPast: Word('покинуло', 3),
  pluralPast: Word('покинули', 3),
  imperativeInformal: Word('покинь', 3),
  imperativeFormal: Word('покиньте', 3),
  imperfect: ['покидать'],
};

perfectVerbs.set(покинуть.name.text, покинуть);

export { покинуть };