import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подоспеть: PerfectVerb = {
  name: Word('подоспеть', 6),
  singular1stPerson: Word('подоспею', 6),
  singular2ndPerson: Word('подоспеешь', 6),
  singular3rdPerson: Word('подоспеет', 6),
  plural1stPerson: Word('подоспеем', 6),
  plural2ndPerson: Word('подоспеете', 6),
  plural3rdPerson: Word('подоспеют', 6),
  masculinePast: Word('подоспел', 6),
  femininePast: Word('подоспела', 6),
  neuterPast: Word('подоспело', 6),
  pluralPast: Word('подоспели', 6),
  imperativeInformal: Word('подоспей', 6),
  imperativeFormal: Word('подоспейте', 6),
  imperfect: [],
};

perfectVerbs.set(подоспеть.name.text, подоспеть);

export { подоспеть };