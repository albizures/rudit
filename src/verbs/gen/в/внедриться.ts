import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внедриться: PerfectVerb = {
  name: Word('внедриться', 5),
  singular1stPerson: Word('внедрюсь', 5),
  singular2ndPerson: Word('внедришься', 5),
  singular3rdPerson: Word('внедрится', 5),
  plural1stPerson: Word('внедримся', 5),
  plural2ndPerson: Word('внедритесь', 5),
  plural3rdPerson: Word('внедрятся', 5),
  masculinePast: Word('внедрился', 5),
  femininePast: Word('внедрилась', 5),
  neuterPast: Word('внедрилось', 5),
  pluralPast: Word('внедрились', 5),
  imperativeInformal: Word('внедрись', 5),
  imperativeFormal: Word('внедритесь', 5),
  imperfect: [],
};

perfectVerbs.set(внедриться.name.text, внедриться);

export { внедриться };