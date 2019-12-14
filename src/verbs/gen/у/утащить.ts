import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утащить: PerfectVerb = {
  name: Word('утащить', 4),
  singular1stPerson: Word('утащу', 4),
  singular2ndPerson: Word('утащишь', 2),
  singular3rdPerson: Word('утащит', 2),
  plural1stPerson: Word('утащим', 2),
  plural2ndPerson: Word('утащите', 2),
  plural3rdPerson: Word('утащат', 2),
  masculinePast: Word('утащил', 4),
  femininePast: Word('утащила', 4),
  neuterPast: Word('утащило', 4),
  pluralPast: Word('утащили', 4),
  imperativeInformal: Word('утащи', 4),
  imperativeFormal: Word('утащите', 4),
  imperfect: [],
};

perfectVerbs.set(утащить.name.text, утащить);

export { утащить };