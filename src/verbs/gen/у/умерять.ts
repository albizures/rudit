import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умерять: PerfectVerb = {
  name: Word('умерять', 4),
  singular1stPerson: Word('умеряю', 4),
  singular2ndPerson: Word('умеряешь', 4),
  singular3rdPerson: Word('умеряет', 4),
  plural1stPerson: Word('умеряем', 4),
  plural2ndPerson: Word('умеряете', 4),
  plural3rdPerson: Word('умеряют', 4),
  masculinePast: Word('умерял', 4),
  femininePast: Word('умеряла', 4),
  neuterPast: Word('умеряло', 4),
  pluralPast: Word('умеряли', 4),
  imperativeInformal: Word('умеряй', 4),
  imperativeFormal: Word('умеряйте', 4),
  imperfect: [],
};

perfectVerbs.set(умерять.name.text, умерять);

export { умерять };