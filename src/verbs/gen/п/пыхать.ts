import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пыхать: PerfectVerb = {
  name: Word('пыхать', 1),
  singular1stPerson: Word('пышу', 1),
  singular2ndPerson: Word('пышешь', 1),
  singular3rdPerson: Word('пышет', 1),
  plural1stPerson: Word('пышем', 1),
  plural2ndPerson: Word('пышете', 1),
  plural3rdPerson: Word('пышут', 1),
  masculinePast: Word('пыхал', 1),
  femininePast: Word('пыхала', 1),
  neuterPast: Word('пыхало', 1),
  pluralPast: Word('пыхали', 1),
  imperativeInformal: Word('пышь', 1),
  imperativeFormal: Word('пышьте', 1),
  imperfect: [],
};

perfectVerbs.set(пыхать.name.text, пыхать);

export { пыхать };