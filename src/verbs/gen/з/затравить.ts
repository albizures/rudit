import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затравить: PerfectVerb = {
  name: Word('затравить', 6),
  singular1stPerson: Word('затравлю', 7),
  singular2ndPerson: Word('затравишь', 4),
  singular3rdPerson: Word('затравит', 4),
  plural1stPerson: Word('затравим', 4),
  plural2ndPerson: Word('затравите', 4),
  plural3rdPerson: Word('затравят', 4),
  masculinePast: Word('затравил', 6),
  femininePast: Word('затравила', 6),
  neuterPast: Word('затравило', 6),
  pluralPast: Word('затравили', 6),
  imperativeInformal: Word('затрави', 6),
  imperativeFormal: Word('затравите', 6),
  imperfect: [],
};

perfectVerbs.set(затравить.name.text, затравить);

export { затравить };