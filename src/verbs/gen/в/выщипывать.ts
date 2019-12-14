import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выщипывать: PerfectVerb = {
  name: Word('выщипывать', 3),
  singular1stPerson: Word('выщипываю', 3),
  singular2ndPerson: Word('выщипываешь', 3),
  singular3rdPerson: Word('выщипывает', 3),
  plural1stPerson: Word('выщипываем', 3),
  plural2ndPerson: Word('выщипываете', 3),
  plural3rdPerson: Word('выщипывают', 3),
  masculinePast: Word('выщипывал', 3),
  femininePast: Word('выщипывала', 3),
  neuterPast: Word('выщипывало', 3),
  pluralPast: Word('выщипывали', 3),
  imperativeInformal: Word('выщипывай', 3),
  imperativeFormal: Word('выщипывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выщипывать.name.text, выщипывать);

export { выщипывать };