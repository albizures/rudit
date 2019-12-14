import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кликать: PerfectVerb = {
  name: Word('кликать', 2),
  singular1stPerson: Word('кличу', 2),
  singular2ndPerson: Word('кличешь', 2),
  singular3rdPerson: Word('кличет', 2),
  plural1stPerson: Word('кличем', 2),
  plural2ndPerson: Word('кличете', 2),
  plural3rdPerson: Word('кличут', 2),
  masculinePast: Word('кликал', 2),
  femininePast: Word('кликала', 2),
  neuterPast: Word('кликало', 2),
  pluralPast: Word('кликали', 2),
  imperativeInformal: Word('кликай', 2),
  imperativeFormal: Word('кликайте', 2),
  imperfect: ['кликнуть'],
};

perfectVerbs.set(кликать.name.text, кликать);

export { кликать };