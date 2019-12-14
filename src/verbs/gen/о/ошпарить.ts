import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошпарить: PerfectVerb = {
  name: Word('ошпарить', 3),
  singular1stPerson: Word('ошпарю', 3),
  singular2ndPerson: Word('ошпаришь', 3),
  singular3rdPerson: Word('ошпарит', 3),
  plural1stPerson: Word('ошпарим', 3),
  plural2ndPerson: Word('ошпарите', 3),
  plural3rdPerson: Word('ошпарят', 3),
  masculinePast: Word('ошпарил', 3),
  femininePast: Word('ошпарила', 3),
  neuterPast: Word('ошпарило', 3),
  pluralPast: Word('ошпарили', 3),
  imperativeInformal: Word('ошпарь', 3),
  imperativeFormal: Word('ошпарьте', 3),
  imperfect: [],
};

perfectVerbs.set(ошпарить.name.text, ошпарить);

export { ошпарить };