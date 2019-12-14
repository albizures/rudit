import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озарять: PerfectVerb = {
  name: Word('озарять', 4),
  singular1stPerson: Word('озаряю', 4),
  singular2ndPerson: Word('озаряешь', 4),
  singular3rdPerson: Word('озаряет', 4),
  plural1stPerson: Word('озаряем', 4),
  plural2ndPerson: Word('озаряете', 4),
  plural3rdPerson: Word('озаряют', 4),
  masculinePast: Word('озарял', 4),
  femininePast: Word('озаряла', 4),
  neuterPast: Word('озаряло', 4),
  pluralPast: Word('озаряли', 4),
  imperativeInformal: Word('озаряй', 4),
  imperativeFormal: Word('озаряйте', 4),
  imperfect: ['озарить'],
};

perfectVerbs.set(озарять.name.text, озарять);

export { озарять };