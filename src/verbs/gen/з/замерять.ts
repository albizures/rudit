import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замерять: PerfectVerb = {
  name: Word('замерять', 5),
  singular1stPerson: Word('замеряю', 5),
  singular2ndPerson: Word('замеряешь', 5),
  singular3rdPerson: Word('замеряет', 5),
  plural1stPerson: Word('замеряем', 5),
  plural2ndPerson: Word('замеряете', 5),
  plural3rdPerson: Word('замеряют', 5),
  masculinePast: Word('замерял', 5),
  femininePast: Word('замеряла', 5),
  neuterPast: Word('замеряло', 5),
  pluralPast: Word('замеряли', 5),
  imperativeInformal: Word('замеряй', 5),
  imperativeFormal: Word('замеряйте', 5),
  imperfect: [],
};

perfectVerbs.set(замерять.name.text, замерять);

export { замерять };