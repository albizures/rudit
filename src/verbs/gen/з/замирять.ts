import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замирять: PerfectVerb = {
  name: Word('замирять', 5),
  singular1stPerson: Word('замиряю', 5),
  singular2ndPerson: Word('замиряешь', 5),
  singular3rdPerson: Word('замиряет', 5),
  plural1stPerson: Word('замиряем', 5),
  plural2ndPerson: Word('замиряете', 5),
  plural3rdPerson: Word('замиряют', 5),
  masculinePast: Word('замирял', 5),
  femininePast: Word('замиряла', 5),
  neuterPast: Word('замиряло', 5),
  pluralPast: Word('замиряли', 5),
  imperativeInformal: Word('замиряй', 5),
  imperativeFormal: Word('замиряйте', 5),
  imperfect: [],
};

perfectVerbs.set(замирять.name.text, замирять);

export { замирять };