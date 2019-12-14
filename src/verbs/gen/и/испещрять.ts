import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испещрять: PerfectVerb = {
  name: Word('испещрять', 6),
  singular1stPerson: Word('испещряю', 6),
  singular2ndPerson: Word('испещряешь', 6),
  singular3rdPerson: Word('испещряет', 6),
  plural1stPerson: Word('испещряем', 6),
  plural2ndPerson: Word('испещряете', 6),
  plural3rdPerson: Word('испещряют', 6),
  masculinePast: Word('испещрял', 6),
  femininePast: Word('испещряла', 6),
  neuterPast: Word('испещряло', 6),
  pluralPast: Word('испещряли', 6),
  imperativeInformal: Word('испещряй', 6),
  imperativeFormal: Word('испещряйте', 6),
  imperfect: [],
};

perfectVerbs.set(испещрять.name.text, испещрять);

export { испещрять };