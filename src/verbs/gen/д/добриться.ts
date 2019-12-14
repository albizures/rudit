import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добриться: PerfectVerb = {
  name: Word('добриться', 4),
  singular1stPerson: Word('добреюсь', 4),
  singular2ndPerson: Word('добреешься', 4),
  singular3rdPerson: Word('добреется', 4),
  plural1stPerson: Word('добреемся', 4),
  plural2ndPerson: Word('добреетесь', 4),
  plural3rdPerson: Word('добреются', 4),
  masculinePast: Word('добрился', 4),
  femininePast: Word('добрилась', 4),
  neuterPast: Word('добрилось', 4),
  pluralPast: Word('добрились', 4),
  imperativeInformal: Word('добрейся', 4),
  imperativeFormal: Word('добрейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(добриться.name.text, добриться);

export { добриться };