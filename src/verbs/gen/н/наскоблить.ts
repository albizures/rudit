import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наскоблить: PerfectVerb = {
  name: Word('наскоблить', 7),
  singular1stPerson: Word('наскоблю', 7),
  singular2ndPerson: Word('наскоблишь', 7),
  singular3rdPerson: Word('наскоблит', 7),
  plural1stPerson: Word('наскоблим', 7),
  plural2ndPerson: Word('наскоблите', 7),
  plural3rdPerson: Word('наскоблят', 7),
  masculinePast: Word('наскоблил', 7),
  femininePast: Word('наскоблила', 7),
  neuterPast: Word('наскоблило', 7),
  pluralPast: Word('наскоблили', 7),
  imperativeInformal: Word('наскобли', 7),
  imperativeFormal: Word('наскоблите', 7),
  imperfect: [],
};

perfectVerbs.set(наскоблить.name.text, наскоблить);

export { наскоблить };