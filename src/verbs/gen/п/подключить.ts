import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подключить: PerfectVerb = {
  name: Word('подключить', 7),
  singular1stPerson: Word('подключу', 7),
  singular2ndPerson: Word('подключишь', 7),
  singular3rdPerson: Word('подключит', 7),
  plural1stPerson: Word('подключим', 7),
  plural2ndPerson: Word('подключите', 7),
  plural3rdPerson: Word('подключат', 7),
  masculinePast: Word('подключил', 7),
  femininePast: Word('подключила', 7),
  neuterPast: Word('подключило', 7),
  pluralPast: Word('подключили', 7),
  imperativeInformal: Word('подключи', 7),
  imperativeFormal: Word('подключите', 7),
  imperfect: [],
};

perfectVerbs.set(подключить.name.text, подключить);

export { подключить };