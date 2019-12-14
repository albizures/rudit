import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const решить: PerfectVerb = {
  name: Word('решить', 3),
  singular1stPerson: Word('решу', 3),
  singular2ndPerson: Word('решишь', 3),
  singular3rdPerson: Word('решит', 3),
  plural1stPerson: Word('решим', 3),
  plural2ndPerson: Word('решите', 3),
  plural3rdPerson: Word('решат', 3),
  masculinePast: Word('решил', 3),
  femininePast: Word('решила', 3),
  neuterPast: Word('решило', 3),
  pluralPast: Word('решили', 3),
  imperativeInformal: Word('реши', 3),
  imperativeFormal: Word('решите', 3),
  imperfect: ['решать'],
};

perfectVerbs.set(решить.name.text, решить);

export { решить };