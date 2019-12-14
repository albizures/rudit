import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгонять: PerfectVerb = {
  name: Word('разгонять', 6),
  singular1stPerson: Word('разгоняю', 6),
  singular2ndPerson: Word('разгоняешь', 6),
  singular3rdPerson: Word('разгоняет', 6),
  plural1stPerson: Word('разгоняем', 6),
  plural2ndPerson: Word('разгоняете', 6),
  plural3rdPerson: Word('разгоняют', 6),
  masculinePast: Word('разгонял', 6),
  femininePast: Word('разгоняла', 6),
  neuterPast: Word('разгоняло', 6),
  pluralPast: Word('разгоняли', 6),
  imperativeInformal: Word('разгоняй', 6),
  imperativeFormal: Word('разгоняйте', 6),
  imperfect: [],
};

perfectVerbs.set(разгонять.name.text, разгонять);

export { разгонять };