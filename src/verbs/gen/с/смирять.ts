import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смирять: PerfectVerb = {
  name: Word('смирять', 4),
  singular1stPerson: Word('смиряю', 4),
  singular2ndPerson: Word('смиряешь', 4),
  singular3rdPerson: Word('смиряет', 4),
  plural1stPerson: Word('смиряем', 4),
  plural2ndPerson: Word('смиряете', 4),
  plural3rdPerson: Word('смиряют', 4),
  masculinePast: Word('смирял', 4),
  femininePast: Word('смиряла', 4),
  neuterPast: Word('смиряло', 4),
  pluralPast: Word('смиряли', 4),
  imperativeInformal: Word('смиряй', 4),
  imperativeFormal: Word('смиряйте', 4),
  imperfect: [],
};

perfectVerbs.set(смирять.name.text, смирять);

export { смирять };