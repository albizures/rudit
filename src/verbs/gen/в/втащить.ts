import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втащить: PerfectVerb = {
  name: Word('втащить', 4),
  singular1stPerson: Word('втащу', 4),
  singular2ndPerson: Word('втащишь', 2),
  singular3rdPerson: Word('втащит', 2),
  plural1stPerson: Word('втащим', 2),
  plural2ndPerson: Word('втащите', 2),
  plural3rdPerson: Word('втащат', 2),
  masculinePast: Word('втащил', 4),
  femininePast: Word('втащила', 4),
  neuterPast: Word('втащило', 4),
  pluralPast: Word('втащили', 4),
  imperativeInformal: Word('втащи', 4),
  imperativeFormal: Word('втащите', 4),
  imperfect: [],
};

perfectVerbs.set(втащить.name.text, втащить);

export { втащить };