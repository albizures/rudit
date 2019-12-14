import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свалить: PerfectVerb = {
  name: Word('свалить', 4),
  singular1stPerson: Word('свалю', 4),
  singular2ndPerson: Word('свалишь', 2),
  singular3rdPerson: Word('свалит', 2),
  plural1stPerson: Word('свалим', 2),
  plural2ndPerson: Word('свалите', 2),
  plural3rdPerson: Word('свалят', 2),
  masculinePast: Word('свалил', 4),
  femininePast: Word('свалила', 4),
  neuterPast: Word('свалило', 4),
  pluralPast: Word('свалили', 4),
  imperativeInformal: Word('свали', 4),
  imperativeFormal: Word('свалите', 4),
  imperfect: [],
};

perfectVerbs.set(свалить.name.text, свалить);

export { свалить };