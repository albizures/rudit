import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побриться: PerfectVerb = {
  name: Word('побриться', 4),
  singular1stPerson: Word('побреюсь', 4),
  singular2ndPerson: Word('побреешься', 4),
  singular3rdPerson: Word('побреется', 4),
  plural1stPerson: Word('побреемся', 4),
  plural2ndPerson: Word('побреетесь', 4),
  plural3rdPerson: Word('побреются', 4),
  masculinePast: Word('побрился', 4),
  femininePast: Word('побрилась', 4),
  neuterPast: Word('побрилось', 4),
  pluralPast: Word('побрились', 4),
  imperativeInformal: Word('побрейся', 4),
  imperativeFormal: Word('побрейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(побриться.name.text, побриться);

export { побриться };