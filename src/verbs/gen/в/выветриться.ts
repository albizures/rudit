import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выветриться: PerfectVerb = {
  name: Word('выветриться', 1),
  singular1stPerson: Word('выветрюсь', 1),
  singular2ndPerson: Word('выветришься', 1),
  singular3rdPerson: Word('выветрится', 1),
  plural1stPerson: Word('выветримся', 1),
  plural2ndPerson: Word('выветритесь', 1),
  plural3rdPerson: Word('выветрятся', 1),
  masculinePast: Word('выветрился', 1),
  femininePast: Word('выветрилась', 1),
  neuterPast: Word('выветрилось', 1),
  pluralPast: Word('выветрились', 1),
  imperativeInformal: Word('выветрись', 1),
  imperativeFormal: Word('выветритесь', 1),
  imperfect: [],
};

perfectVerbs.set(выветриться.name.text, выветриться);

export { выветриться };