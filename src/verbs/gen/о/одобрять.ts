import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одобрять: PerfectVerb = {
  name: Word('одобрять', 5),
  singular1stPerson: Word('одобряю', 5),
  singular2ndPerson: Word('одобряешь', 5),
  singular3rdPerson: Word('одобряет', 5),
  plural1stPerson: Word('одобряем', 5),
  plural2ndPerson: Word('одобряете', 5),
  plural3rdPerson: Word('одобряют', 5),
  masculinePast: Word('одобрял', 5),
  femininePast: Word('одобряла', 5),
  neuterPast: Word('одобряло', 5),
  pluralPast: Word('одобряли', 5),
  imperativeInformal: Word('одобряй', 5),
  imperativeFormal: Word('одобряйте', 5),
  imperfect: ['одобрить'],
};

perfectVerbs.set(одобрять.name.text, одобрять);

export { одобрять };