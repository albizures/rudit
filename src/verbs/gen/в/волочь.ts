import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const волочь: PerfectVerb = {
  name: Word('волочь', 3),
  singular1stPerson: Word('волоку', 5),
  singular2ndPerson: Word('волочёшь', 1),
  singular3rdPerson: Word('волочёт', 1),
  plural1stPerson: Word('волочём', 1),
  plural2ndPerson: Word('волочёте', 7),
  plural3rdPerson: Word('волокут', 5),
  masculinePast: Word('волок', 3),
  femininePast: Word('волокла', 6),
  neuterPast: Word('волокло', 6),
  pluralPast: Word('волокли', 6),
  imperativeInformal: Word('волоки', 5),
  imperativeFormal: Word('волоките', 5),
  imperfect: ['поволочь','приволочь','уволочь'],
};

perfectVerbs.set(волочь.name.text, волочь);

export { волочь };