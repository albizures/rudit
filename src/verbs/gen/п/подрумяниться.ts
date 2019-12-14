import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрумяниться: PerfectVerb = {
  name: Word('подрумяниться', 6),
  singular1stPerson: Word('подрумянюсь', 6),
  singular2ndPerson: Word('подрумянишься', 6),
  singular3rdPerson: Word('подрумянится', 6),
  plural1stPerson: Word('подрумянимся', 6),
  plural2ndPerson: Word('подрумянитесь', 6),
  plural3rdPerson: Word('подрумянятся', 6),
  masculinePast: Word('подрумянился', 6),
  femininePast: Word('подрумянилась', 6),
  neuterPast: Word('подрумянилось', 6),
  pluralPast: Word('подрумянились', 6),
  imperativeInformal: Word('подрумянься', 6),
  imperativeFormal: Word('подрумяньтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подрумяниться.name.text, подрумяниться);

export { подрумяниться };