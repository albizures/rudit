import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затруднить: PerfectVerb = {
  name: Word('затруднить', 7),
  singular1stPerson: Word('затрудню', 7),
  singular2ndPerson: Word('затруднишь', 7),
  singular3rdPerson: Word('затруднит', 7),
  plural1stPerson: Word('затрудним', 7),
  plural2ndPerson: Word('затрудните', 7),
  plural3rdPerson: Word('затруднят', 7),
  masculinePast: Word('затруднил', 7),
  femininePast: Word('затруднила', 7),
  neuterPast: Word('затруднило', 7),
  pluralPast: Word('затруднили', 7),
  imperativeInformal: Word('затрудни', 7),
  imperativeFormal: Word('затрудните', 7),
  imperfect: [],
};

perfectVerbs.set(затруднить.name.text, затруднить);

export { затруднить };