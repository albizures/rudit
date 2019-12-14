import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распорядиться: PerfectVerb = {
  name: Word('распорядиться', 8),
  singular1stPerson: Word('распоряжусь', 8),
  singular2ndPerson: Word('распорядишься', 8),
  singular3rdPerson: Word('распорядится', 8),
  plural1stPerson: Word('распорядимся', 8),
  plural2ndPerson: Word('распорядитесь', 8),
  plural3rdPerson: Word('распорядятся', 8),
  masculinePast: Word('распорядился', 8),
  femininePast: Word('распорядилась', 8),
  neuterPast: Word('распорядилось', 8),
  pluralPast: Word('распорядились', 8),
  imperativeInformal: Word('распорядись', 8),
  imperativeFormal: Word('распорядитесь', 8),
  imperfect: [],
};

perfectVerbs.set(распорядиться.name.text, распорядиться);

export { распорядиться };