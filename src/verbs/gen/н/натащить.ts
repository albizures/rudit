import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натащить: PerfectVerb = {
  name: Word('натащить', 5),
  singular1stPerson: Word('натащу', 5),
  singular2ndPerson: Word('натащишь', 3),
  singular3rdPerson: Word('натащит', 3),
  plural1stPerson: Word('натащим', 3),
  plural2ndPerson: Word('натащите', 3),
  plural3rdPerson: Word('натащат', 3),
  masculinePast: Word('натащил', 5),
  femininePast: Word('натащила', 5),
  neuterPast: Word('натащило', 5),
  pluralPast: Word('натащили', 5),
  imperativeInformal: Word('натащи', 5),
  imperativeFormal: Word('натащите', 5),
  imperfect: [],
};

perfectVerbs.set(натащить.name.text, натащить);

export { натащить };