import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гонять: PerfectVerb = {
  name: Word('гонять', 3),
  singular1stPerson: Word('гоняю', 3),
  singular2ndPerson: Word('гоняешь', 3),
  singular3rdPerson: Word('гоняет', 3),
  plural1stPerson: Word('гоняем', 3),
  plural2ndPerson: Word('гоняете', 3),
  plural3rdPerson: Word('гоняют', 3),
  masculinePast: Word('гонял', 3),
  femininePast: Word('гоняла', 3),
  neuterPast: Word('гоняло', 3),
  pluralPast: Word('гоняли', 3),
  imperativeInformal: Word('гоняй', 3),
  imperativeFormal: Word('гоняйте', 3),
  imperfect: [],
};

perfectVerbs.set(гонять.name.text, гонять);

export { гонять };