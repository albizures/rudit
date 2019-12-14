import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестать: PerfectVerb = {
  name: Word('перестать', 6),
  singular1stPerson: Word('перестану', 6),
  singular2ndPerson: Word('перестанешь', 6),
  singular3rdPerson: Word('перестанет', 6),
  plural1stPerson: Word('перестанем', 6),
  plural2ndPerson: Word('перестанете', 6),
  plural3rdPerson: Word('перестанут', 6),
  masculinePast: Word('перестал', 6),
  femininePast: Word('перестала', 6),
  neuterPast: Word('перестало', 6),
  pluralPast: Word('перестали', 6),
  imperativeInformal: Word('перестань', 6),
  imperativeFormal: Word('перестаньте', 6),
  imperfect: ['переставать'],
};

perfectVerbs.set(перестать.name.text, перестать);

export { перестать };