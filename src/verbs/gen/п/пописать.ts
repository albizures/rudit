import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пописать: PerfectVerb = {
  name: Word('пописать', 5),
  singular1stPerson: Word('попишу', 5),
  singular2ndPerson: Word('попишешь', 3),
  singular3rdPerson: Word('попишет', 3),
  plural1stPerson: Word('попишем', 3),
  plural2ndPerson: Word('попишете', 3),
  plural3rdPerson: Word('попишут', 3),
  masculinePast: Word('пописал', 5),
  femininePast: Word('пописала', 5),
  neuterPast: Word('пописало', 5),
  pluralPast: Word('пописали', 5),
  imperativeInformal: Word('попиши', 5),
  imperativeFormal: Word('попишите', 5),
  imperfect: [],
};

perfectVerbs.set(пописать.name.text, пописать);

export { пописать };