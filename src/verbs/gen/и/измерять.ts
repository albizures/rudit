import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измерять: PerfectVerb = {
  name: Word('измерять', 5),
  singular1stPerson: Word('измеряю', 5),
  singular2ndPerson: Word('измеряешь', 5),
  singular3rdPerson: Word('измеряет', 5),
  plural1stPerson: Word('измеряем', 5),
  plural2ndPerson: Word('измеряете', 5),
  plural3rdPerson: Word('измеряют', 5),
  masculinePast: Word('измерял', 5),
  femininePast: Word('измеряла', 5),
  neuterPast: Word('измеряло', 5),
  pluralPast: Word('измеряли', 5),
  imperativeInformal: Word('измеряй', 5),
  imperativeFormal: Word('измеряйте', 5),
  imperfect: ['измерить'],
};

perfectVerbs.set(измерять.name.text, измерять);

export { измерять };