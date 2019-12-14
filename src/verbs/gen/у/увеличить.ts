import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увеличить: PerfectVerb = {
  name: Word('увеличить', 4),
  singular1stPerson: Word('увеличу', 4),
  singular2ndPerson: Word('увеличишь', 4),
  singular3rdPerson: Word('увеличит', 4),
  plural1stPerson: Word('увеличим', 4),
  plural2ndPerson: Word('увеличите', 4),
  plural3rdPerson: Word('увеличат', 4),
  masculinePast: Word('увеличил', 4),
  femininePast: Word('увеличила', 4),
  neuterPast: Word('увеличило', 4),
  pluralPast: Word('увеличили', 4),
  imperativeInformal: Word('увеличь', 4),
  imperativeFormal: Word('увеличьте', 4),
  imperfect: ['увеличивать'],
};

perfectVerbs.set(увеличить.name.text, увеличить);

export { увеличить };