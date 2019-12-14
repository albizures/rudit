import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покорять: PerfectVerb = {
  name: Word('покорять', 5),
  singular1stPerson: Word('покоряю', 5),
  singular2ndPerson: Word('покоряешь', 5),
  singular3rdPerson: Word('покоряет', 5),
  plural1stPerson: Word('покоряем', 5),
  plural2ndPerson: Word('покоряете', 5),
  plural3rdPerson: Word('покоряют', 5),
  masculinePast: Word('покорял', 5),
  femininePast: Word('покоряла', 5),
  neuterPast: Word('покоряло', 5),
  pluralPast: Word('покоряли', 5),
  imperativeInformal: Word('покоряй', 5),
  imperativeFormal: Word('покоряйте', 5),
  imperfect: [],
};

perfectVerbs.set(покорять.name.text, покорять);

export { покорять };