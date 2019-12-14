import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обглодать: PerfectVerb = {
  name: Word('обглодать', 6),
  singular1stPerson: Word('обгложу', 6),
  singular2ndPerson: Word('обгложешь', 4),
  singular3rdPerson: Word('обгложет', 4),
  plural1stPerson: Word('обгложем', 4),
  plural2ndPerson: Word('обгложете', 4),
  plural3rdPerson: Word('обгложут', 4),
  masculinePast: Word('обглодал', 6),
  femininePast: Word('обглодала', 6),
  neuterPast: Word('обглодало', 6),
  pluralPast: Word('обглодали', 6),
  imperativeInformal: Word('обгложи', 6),
  imperativeFormal: Word('обгложите', 6),
  imperfect: [],
};

perfectVerbs.set(обглодать.name.text, обглодать);

export { обглодать };