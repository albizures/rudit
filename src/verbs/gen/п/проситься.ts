import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проситься: PerfectVerb = {
  name: Word('проситься', 4),
  singular1stPerson: Word('прошусь', 4),
  singular2ndPerson: Word('просишься', 2),
  singular3rdPerson: Word('просится', 2),
  plural1stPerson: Word('просимся', 2),
  plural2ndPerson: Word('проситесь', 2),
  plural3rdPerson: Word('просятся', 2),
  masculinePast: Word('просился', 4),
  femininePast: Word('просилась', 4),
  neuterPast: Word('просилось', 4),
  pluralPast: Word('просились', 4),
  imperativeInformal: Word('просись', 4),
  imperativeFormal: Word('проситесь', 4),
  imperfect: [],
};

perfectVerbs.set(проситься.name.text, проситься);

export { проситься };