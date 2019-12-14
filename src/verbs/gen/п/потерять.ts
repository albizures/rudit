import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потерять: PerfectVerb = {
  name: Word('потерять', 5),
  singular1stPerson: Word('потеряю', 5),
  singular2ndPerson: Word('потеряешь', 5),
  singular3rdPerson: Word('потеряет', 5),
  plural1stPerson: Word('потеряем', 5),
  plural2ndPerson: Word('потеряете', 5),
  plural3rdPerson: Word('потеряют', 5),
  masculinePast: Word('потерял', 5),
  femininePast: Word('потеряла', 5),
  neuterPast: Word('потеряло', 5),
  pluralPast: Word('потеряли', 5),
  imperativeInformal: Word('потеряй', 5),
  imperativeFormal: Word('потеряйте', 5),
  imperfect: ['терять'],
};

perfectVerbs.set(потерять.name.text, потерять);

export { потерять };