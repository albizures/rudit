import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надеть: PerfectVerb = {
  name: Word('надеть', 3),
  singular1stPerson: Word('надену', 3),
  singular2ndPerson: Word('наденешь', 3),
  singular3rdPerson: Word('наденет', 3),
  plural1stPerson: Word('наденем', 3),
  plural2ndPerson: Word('наденете', 3),
  plural3rdPerson: Word('наденут', 3),
  masculinePast: Word('надел', 3),
  femininePast: Word('надела', 3),
  neuterPast: Word('надело', 3),
  pluralPast: Word('надели', 3),
  imperativeInformal: Word('надень', 3),
  imperativeFormal: Word('наденьте', 3),
  imperfect: ['надевать'],
};

perfectVerbs.set(надеть.name.text, надеть);

export { надеть };