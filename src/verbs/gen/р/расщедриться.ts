import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расщедриться: PerfectVerb = {
  name: Word('расщедриться', 4),
  singular1stPerson: Word('расщедрюсь', 4),
  singular2ndPerson: Word('расщедришься', 4),
  singular3rdPerson: Word('расщедрится', 4),
  plural1stPerson: Word('расщедримся', 4),
  plural2ndPerson: Word('расщедритесь', 4),
  plural3rdPerson: Word('расщедрятся', 4),
  masculinePast: Word('расщедрился', 4),
  femininePast: Word('расщедрилась', 4),
  neuterPast: Word('расщедрилось', 4),
  pluralPast: Word('расщедрились', 4),
  imperativeInformal: Word('расщедрись', 4),
  imperativeFormal: Word('расщедритесь', 4),
  imperfect: [],
};

perfectVerbs.set(расщедриться.name.text, расщедриться);

export { расщедриться };