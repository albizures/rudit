import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поощрять: PerfectVerb = {
  name: Word('поощрять', 5),
  singular1stPerson: Word('поощряю', 5),
  singular2ndPerson: Word('поощряешь', 5),
  singular3rdPerson: Word('поощряет', 5),
  plural1stPerson: Word('поощряем', 5),
  plural2ndPerson: Word('поощряете', 5),
  plural3rdPerson: Word('поощряют', 5),
  masculinePast: Word('поощрял', 5),
  femininePast: Word('поощряла', 5),
  neuterPast: Word('поощряло', 5),
  pluralPast: Word('поощряли', 5),
  imperativeInformal: Word('поощряй', 5),
  imperativeFormal: Word('поощряйте', 5),
  imperfect: ['поощрить'],
};

perfectVerbs.set(поощрять.name.text, поощрять);

export { поощрять };