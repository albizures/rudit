import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбочениться: PerfectVerb = {
  name: Word('подбочениться', 6),
  singular1stPerson: Word('подбоченюсь', 6),
  singular2ndPerson: Word('подбоченишься', 6),
  singular3rdPerson: Word('подбоченится', 6),
  plural1stPerson: Word('подбоченимся', 6),
  plural2ndPerson: Word('подбоченитесь', 6),
  plural3rdPerson: Word('подбоченятся', 6),
  masculinePast: Word('подбоченился', 6),
  femininePast: Word('подбоченилась', 6),
  neuterPast: Word('подбоченилось', 6),
  pluralPast: Word('подбоченились', 6),
  imperativeInformal: Word('подбоченься', 6),
  imperativeFormal: Word('подбоченьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подбочениться.name.text, подбочениться);

export { подбочениться };