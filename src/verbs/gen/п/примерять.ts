import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примерять: PerfectVerb = {
  name: Word('примерять', 6),
  singular1stPerson: Word('примеряю', 6),
  singular2ndPerson: Word('примеряешь', 6),
  singular3rdPerson: Word('примеряет', 6),
  plural1stPerson: Word('примеряем', 6),
  plural2ndPerson: Word('примеряете', 6),
  plural3rdPerson: Word('примеряют', 6),
  masculinePast: Word('примерял', 6),
  femininePast: Word('примеряла', 6),
  neuterPast: Word('примеряло', 6),
  pluralPast: Word('примеряли', 6),
  imperativeInformal: Word('примеряй', 6),
  imperativeFormal: Word('примеряйте', 6),
  imperfect: ['примерить'],
};

perfectVerbs.set(примерять.name.text, примерять);

export { примерять };