import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низать: PerfectVerb = {
  name: Word('низать', 3),
  singular1stPerson: Word('нижу', 3),
  singular2ndPerson: Word('нижешь', 1),
  singular3rdPerson: Word('нижет', 1),
  plural1stPerson: Word('нижем', 1),
  plural2ndPerson: Word('нижете', 1),
  plural3rdPerson: Word('нижут', 1),
  masculinePast: Word('низал', 3),
  femininePast: Word('низала', 3),
  neuterPast: Word('низало', 3),
  pluralPast: Word('низали', 3),
  imperativeInformal: Word('нижи', 3),
  imperativeFormal: Word('нижите', 3),
  imperfect: [],
};

perfectVerbs.set(низать.name.text, низать);

export { низать };