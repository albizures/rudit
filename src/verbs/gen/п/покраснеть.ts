import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покраснеть: PerfectVerb = {
  name: Word('покраснеть', 7),
  singular1stPerson: Word('покраснею', 7),
  singular2ndPerson: Word('покраснеешь', 7),
  singular3rdPerson: Word('покраснеет', 7),
  plural1stPerson: Word('покраснеем', 7),
  plural2ndPerson: Word('покраснеете', 7),
  plural3rdPerson: Word('покраснеют', 7),
  masculinePast: Word('покраснел', 7),
  femininePast: Word('покраснела', 7),
  neuterPast: Word('покраснело', 7),
  pluralPast: Word('покраснели', 7),
  imperativeInformal: Word('покрасней', 7),
  imperativeFormal: Word('покраснейте', 7),
  imperfect: [],
};

perfectVerbs.set(покраснеть.name.text, покраснеть);

export { покраснеть };