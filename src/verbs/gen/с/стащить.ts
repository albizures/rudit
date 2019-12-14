import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стащить: PerfectVerb = {
  name: Word('стащить', 4),
  singular1stPerson: Word('стащу', 4),
  singular2ndPerson: Word('стащишь', 2),
  singular3rdPerson: Word('стащит', 2),
  plural1stPerson: Word('стащим', 2),
  plural2ndPerson: Word('стащите', 2),
  plural3rdPerson: Word('стащат', 2),
  masculinePast: Word('стащил', 4),
  femininePast: Word('стащила', 4),
  neuterPast: Word('стащило', 4),
  pluralPast: Word('стащили', 4),
  imperativeInformal: Word('стащи', 4),
  imperativeFormal: Word('стащите', 4),
  imperfect: [],
};

perfectVerbs.set(стащить.name.text, стащить);

export { стащить };