import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропищать: PerfectVerb = {
  name: Word('пропищать', 6),
  singular1stPerson: Word('пропищу', 6),
  singular2ndPerson: Word('пропищишь', 6),
  singular3rdPerson: Word('пропищит', 6),
  plural1stPerson: Word('пропищим', 6),
  plural2ndPerson: Word('пропищите', 6),
  plural3rdPerson: Word('пропищат', 6),
  masculinePast: Word('пропищал', 6),
  femininePast: Word('пропищала', 6),
  neuterPast: Word('пропищало', 6),
  pluralPast: Word('пропищали', 6),
  imperativeInformal: Word('пропищи', 6),
  imperativeFormal: Word('пропищите', 6),
  imperfect: [],
};

perfectVerbs.set(пропищать.name.text, пропищать);

export { пропищать };