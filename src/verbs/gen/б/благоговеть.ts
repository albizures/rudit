import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благоговеть: PerfectVerb = {
  name: Word('благоговеть', 8),
  singular1stPerson: Word('благоговею', 8),
  singular2ndPerson: Word('благоговеешь', 8),
  singular3rdPerson: Word('благоговеет', 8),
  plural1stPerson: Word('благоговеем', 8),
  plural2ndPerson: Word('благоговеете', 8),
  plural3rdPerson: Word('благоговеют', 8),
  masculinePast: Word('благоговел', 8),
  femininePast: Word('благоговела', 8),
  neuterPast: Word('благоговело', 8),
  pluralPast: Word('благоговели', 8),
  imperativeInformal: Word('благоговей', 8),
  imperativeFormal: Word('благоговейте', 8),
  imperfect: [],
};

perfectVerbs.set(благоговеть.name.text, благоговеть);

export { благоговеть };