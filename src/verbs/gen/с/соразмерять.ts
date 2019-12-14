import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соразмерять: PerfectVerb = {
  name: Word('соразмерять', 8),
  singular1stPerson: Word('соразмеряю', 8),
  singular2ndPerson: Word('соразмеряешь', 8),
  singular3rdPerson: Word('соразмеряет', 8),
  plural1stPerson: Word('соразмеряем', 8),
  plural2ndPerson: Word('соразмеряете', 8),
  plural3rdPerson: Word('соразмеряют', 8),
  masculinePast: Word('соразмерял', 8),
  femininePast: Word('соразмеряла', 8),
  neuterPast: Word('соразмеряло', 8),
  pluralPast: Word('соразмеряли', 8),
  imperativeInformal: Word('соразмеряй', 8),
  imperativeFormal: Word('соразмеряйте', 8),
  imperfect: [],
};

perfectVerbs.set(соразмерять.name.text, соразмерять);

export { соразмерять };