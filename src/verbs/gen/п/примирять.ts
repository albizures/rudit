import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примирять: PerfectVerb = {
  name: Word('примирять', 6),
  singular1stPerson: Word('примиряю', 6),
  singular2ndPerson: Word('примиряешь', 6),
  singular3rdPerson: Word('примиряет', 6),
  plural1stPerson: Word('примиряем', 6),
  plural2ndPerson: Word('примиряете', 6),
  plural3rdPerson: Word('примиряют', 6),
  masculinePast: Word('примирял', 6),
  femininePast: Word('примиряла', 6),
  neuterPast: Word('примиряло', 6),
  pluralPast: Word('примиряли', 6),
  imperativeInformal: Word('примиряй', 6),
  imperativeFormal: Word('примиряйте', 6),
  imperfect: [],
};

perfectVerbs.set(примирять.name.text, примирять);

export { примирять };