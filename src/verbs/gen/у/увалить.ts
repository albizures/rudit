import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увалить: PerfectVerb = {
  name: Word('увалить', 4),
  singular1stPerson: Word('увалю', 4),
  singular2ndPerson: Word('увалишь', 2),
  singular3rdPerson: Word('увалит', 2),
  plural1stPerson: Word('увалим', 2),
  plural2ndPerson: Word('увалите', 2),
  plural3rdPerson: Word('увалят', 2),
  masculinePast: Word('увалил', 4),
  femininePast: Word('увалила', 4),
  neuterPast: Word('увалило', 4),
  pluralPast: Word('увалили', 4),
  imperativeInformal: Word('ували', 4),
  imperativeFormal: Word('увалите', 4),
  imperfect: [],
};

perfectVerbs.set(увалить.name.text, увалить);

export { увалить };