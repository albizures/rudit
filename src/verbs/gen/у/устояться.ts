import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устояться: PerfectVerb = {
  name: Word('устояться', 4),
  singular1stPerson: Word('устоюсь', 4),
  singular2ndPerson: Word('устоишься', 4),
  singular3rdPerson: Word('устоится', 4),
  plural1stPerson: Word('устоимся', 4),
  plural2ndPerson: Word('устоитесь', 4),
  plural3rdPerson: Word('устоятся', 4),
  masculinePast: Word('устоялся', 4),
  femininePast: Word('устоялась', 4),
  neuterPast: Word('устоялось', 4),
  pluralPast: Word('устоялись', 4),
  imperativeInformal: Word('устойся', 3),
  imperativeFormal: Word('устойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(устояться.name.text, устояться);

export { устояться };