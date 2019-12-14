import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const председательствовать: PerfectVerb = {
  name: Word('председательствовать', 7),
  singular1stPerson: Word('председательствую', 7),
  singular2ndPerson: Word('председательствуешь', 7),
  singular3rdPerson: Word('председательствует', 7),
  plural1stPerson: Word('председательствуем', 7),
  plural2ndPerson: Word('председательствуете', 7),
  plural3rdPerson: Word('председательствуют', 7),
  masculinePast: Word('председательствовал', 7),
  femininePast: Word('председательствовала', 7),
  neuterPast: Word('председательствовало', 7),
  pluralPast: Word('председательствовали', 7),
  imperativeInformal: Word('председательствуй', 7),
  imperativeFormal: Word('председательствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(председательствовать.name.text, председательствовать);

export { председательствовать };