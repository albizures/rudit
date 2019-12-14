import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устоять: PerfectVerb = {
  name: Word('устоять', 4),
  singular1stPerson: Word('устою', 4),
  singular2ndPerson: Word('устоишь', 4),
  singular3rdPerson: Word('устоит', 4),
  plural1stPerson: Word('устоим', 4),
  plural2ndPerson: Word('устоите', 4),
  plural3rdPerson: Word('устоят', 4),
  masculinePast: Word('устоял', 4),
  femininePast: Word('устояла', 4),
  neuterPast: Word('устояло', 4),
  pluralPast: Word('устояли', 4),
  imperativeInformal: Word('устой', 3),
  imperativeFormal: Word('устойте', 3),
  imperfect: [],
};

perfectVerbs.set(устоять.name.text, устоять);

export { устоять };