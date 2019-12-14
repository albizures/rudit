import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растерять: PerfectVerb = {
  name: Word('растерять', 6),
  singular1stPerson: Word('растеряю', 6),
  singular2ndPerson: Word('растеряешь', 6),
  singular3rdPerson: Word('растеряет', 6),
  plural1stPerson: Word('растеряем', 6),
  plural2ndPerson: Word('растеряете', 6),
  plural3rdPerson: Word('растеряют', 6),
  masculinePast: Word('растерял', 6),
  femininePast: Word('растеряла', 6),
  neuterPast: Word('растеряло', 6),
  pluralPast: Word('растеряли', 6),
  imperativeInformal: Word('растеряй', 6),
  imperativeFormal: Word('растеряйте', 6),
  imperfect: [],
};

perfectVerbs.set(растерять.name.text, растерять);

export { растерять };