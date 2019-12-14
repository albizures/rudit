import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропахать: PerfectVerb = {
  name: Word('пропахать', 6),
  singular1stPerson: Word('пропашу', 6),
  singular2ndPerson: Word('пропашешь', 4),
  singular3rdPerson: Word('пропашет', 4),
  plural1stPerson: Word('пропашем', 4),
  plural2ndPerson: Word('пропашете', 4),
  plural3rdPerson: Word('пропашут', 4),
  masculinePast: Word('пропахал', 6),
  femininePast: Word('пропахала', 6),
  neuterPast: Word('пропахало', 6),
  pluralPast: Word('пропахали', 6),
  imperativeInformal: Word('пропаши', 6),
  imperativeFormal: Word('пропашите', 6),
  imperfect: [],
};

perfectVerbs.set(пропахать.name.text, пропахать);

export { пропахать };