import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перековать: PerfectVerb = {
  name: Word('перековать', 7),
  singular1stPerson: Word('перекую', 6),
  singular2ndPerson: Word('перекуёшь', 6),
  singular3rdPerson: Word('перекуёт', 6),
  plural1stPerson: Word('перекуём', 6),
  plural2ndPerson: Word('перекуёте', 6),
  plural3rdPerson: Word('перекуют', 6),
  masculinePast: Word('перековал', 7),
  femininePast: Word('перековала', 7),
  neuterPast: Word('перековало', 7),
  pluralPast: Word('перековали', 7),
  imperativeInformal: Word('перекуй', 5),
  imperativeFormal: Word('перекуйте', 5),
  imperfect: [],
};

perfectVerbs.set(перековать.name.text, перековать);

export { перековать };