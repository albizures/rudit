import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пищать: PerfectVerb = {
  name: Word('пищать', 3),
  singular1stPerson: Word('пищу', 3),
  singular2ndPerson: Word('пищишь', 3),
  singular3rdPerson: Word('пищит', 3),
  plural1stPerson: Word('пищим', 3),
  plural2ndPerson: Word('пищите', 3),
  plural3rdPerson: Word('пищат', 3),
  masculinePast: Word('пищал', 3),
  femininePast: Word('пищала', 3),
  neuterPast: Word('пищало', 3),
  pluralPast: Word('пищали', 3),
  imperativeInformal: Word('пищи', 3),
  imperativeFormal: Word('пищите', 3),
  imperfect: ['пискнуть'],
};

perfectVerbs.set(пищать.name.text, пищать);

export { пищать };