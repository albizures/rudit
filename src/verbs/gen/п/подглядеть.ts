import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подглядеть: PerfectVerb = {
  name: Word('подглядеть', 7),
  singular1stPerson: Word('подгляжу', 7),
  singular2ndPerson: Word('подглядишь', 7),
  singular3rdPerson: Word('подглядит', 7),
  plural1stPerson: Word('подглядим', 7),
  plural2ndPerson: Word('подглядите', 7),
  plural3rdPerson: Word('подглядят', 7),
  masculinePast: Word('подглядел', 7),
  femininePast: Word('подглядела', 7),
  neuterPast: Word('подглядело', 7),
  pluralPast: Word('подглядели', 7),
  imperativeInformal: Word('подгляди', 7),
  imperativeFormal: Word('подглядите', 7),
  imperfect: [],
};

perfectVerbs.set(подглядеть.name.text, подглядеть);

export { подглядеть };