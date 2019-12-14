import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпасть: PerfectVerb = {
  name: Word('выпасть', 1),
  singular1stPerson: Word('выпаду', 1),
  singular2ndPerson: Word('выпадешь', 1),
  singular3rdPerson: Word('выпадет', 1),
  plural1stPerson: Word('выпадем', 1),
  plural2ndPerson: Word('выпадете', 1),
  plural3rdPerson: Word('выпадут', 1),
  masculinePast: Word('выпал', 1),
  femininePast: Word('выпала', 1),
  neuterPast: Word('выпало', 1),
  pluralPast: Word('выпали', 1),
  imperativeInformal: Word('выпади', 1),
  imperativeFormal: Word('выпадите', 1),
  imperfect: [],
};

perfectVerbs.set(выпасть.name.text, выпасть);

export { выпасть };